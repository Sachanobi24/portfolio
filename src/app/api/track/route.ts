import { NextRequest, NextResponse } from 'next/server'
import { redis } from '@/lib/redis'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { page } = body

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown'

    const userAgent = req.headers.get('user-agent') || 'unknown'
    const referer = req.headers.get('referer') || 'direct'

    const isMobile = /mobile|android|iphone|ipad/i.test(userAgent)
    const isTablet = /ipad|tablet/i.test(userAgent)
    const device = isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop'

    let browser = 'unknown'
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) browser = 'Chrome'
    else if (userAgent.includes('Firefox')) browser = 'Firefox'
    else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) browser = 'Safari'
    else if (userAgent.includes('Edg')) browser = 'Edge'

    let geo = { country: 'Unknown', city: 'Unknown', region: 'Unknown' }
    if (ip !== 'unknown' && ip !== '127.0.0.1' && !ip.startsWith('192.168')) {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=country,city,regionName`)
        if (geoRes.ok) {
          const geoData = await geoRes.json()
          geo = {
            country: geoData.country || 'Unknown',
            city: geoData.city || 'Unknown',
            region: geoData.regionName || 'Unknown',
          }
        }
      } catch {}
    }

    const visit = {
      ip, page: page || '/', device, browser, referer,
      country: geo.country, city: geo.city, region: geo.region,
      timestamp: new Date().toISOString(),
    }

    await redis.lpush('visits', JSON.stringify(visit))
    await redis.ltrim('visits', 0, 499)
    await redis.hincrby('page_counts', page || '/', 1)
    await redis.incr('total_visits')

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Track error:', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
