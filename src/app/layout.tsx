import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { config } from '@/data/config'

export const metadata: Metadata = {
  title: `${config.identity.prenom} ${config.identity.nom} — Portfolio`,
  description: config.identity.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
