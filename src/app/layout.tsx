import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Tracker from '@/components/Tracker'
import ScrollToTop from '@/components/ScrollToTop'
import { config } from '@/data/config'

export const metadata: Metadata = {
  title: `${config.identity.prenom} ${config.identity.nom} — Portfolio`,
  description: config.identity.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Tracker />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
