import { NextResponse } from 'next/server'

// Flux RSS thématiques SISR / cybersécurité / réseaux
// Modifiez cette liste pour ajouter/retirer des sources
const FEEDS = [
  {
    url: 'https://www.cert.ssi.gouv.fr/feed/',
    source: 'ANSSI',
    categorie: 'Cybersécurité',
  },
  {
    url: 'https://feeds.feedburner.com/TheHackersNews',
    source: 'The Hacker News',
    categorie: 'Cybersécurité',
  },
  {
    url: 'https://www.lemondeinformatique.fr/flux-rss/thematique/securite/rss.xml',
    source: 'Le Monde Informatique',
    categorie: 'Sécurité',
  },
  {
    url: 'https://www.zdnet.fr/feeds/rss/actualites/securite/',
    source: 'ZDNet France',
    categorie: 'Réseaux & Sécurité',
  },
  {
    url: 'https://www.it-connect.fr/feed/',
    source: 'IT-Connect',
    categorie: 'Systèmes & Réseaux',
  },
  {
    url: 'https://korben.info/feed',
    source: 'Korben',
    categorie: 'Tech & Sécurité',
  },
]

interface RSSItem {
  titre: string
  lien: string
  date: string
  description: string
  source: string
  categorie: string
}

function extractText(xml: string, tag: string): string {
  const patterns = [
    new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i'),
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'),
  ]
  for (const pattern of patterns) {
    const m = xml.match(pattern)
    if (m?.[1]) return m[1].replace(/<[^>]+>/g, '').trim()
  }
  return ''
}

function extractAttr(xml: string, tag: string, attr: string): string {
  const m = xml.match(new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`, 'i'))
  return m?.[1] ?? ''
}

async function parseFeed(feed: (typeof FEEDS)[0]): Promise<RSSItem[]> {
  try {
    const res = await fetch(feed.url, {
      headers: { 'User-Agent': 'Mozilla/5.0 Portfolio-RSS-Reader/1.0' },
      next: { revalidate: 1800 }, // cache 30 min
    })
    if (!res.ok) return []
    const xml = await res.text()

    // Extract <item> blocks
    const itemMatches = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) ?? []

    return itemMatches.slice(0, 5).map((item) => {
      const titre = extractText(item, 'title') || 'Sans titre'
      const lien =
        extractText(item, 'link') ||
        extractAttr(item, 'link', 'href') ||
        feed.url
      const date = extractText(item, 'pubDate') || extractText(item, 'dc:date') || ''
      const description =
        extractText(item, 'description') ||
        extractText(item, 'content:encoded') ||
        extractText(item, 'summary') ||
        ''

      return {
        titre: titre.slice(0, 120),
        lien,
        date,
        description: description.slice(0, 200),
        source: feed.source,
        categorie: feed.categorie,
      }
    })
  } catch {
    return []
  }
}

export async function GET() {
  const results = await Promise.allSettled(FEEDS.map(parseFeed))

  const items: RSSItem[] = results
    .flatMap((r) => (r.status === 'fulfilled' ? r.value : []))
    .sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0
      const db = b.date ? new Date(b.date).getTime() : 0
      return db - da
    })
    .slice(0, 30)

  return NextResponse.json({ items, updatedAt: new Date().toISOString() })
}
