import 'tailwindcss/tailwind.css'
import '../globals.css';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout';
import { MendableChatBubble } from "@mendable/search";

export const metadata = {
  metadataBase: new URL('https://docs.icon.community/'),
  title: 'ICON Cross-Chain Documentation',
  description: 'Documentation for ICONs Cross-Chain Framework. Simplifying cross-chain development with its easy-to-use general message passing standard and connections to secure bridging protocols',
  keywords: ['ICON Official Website', 'ICON Foundation', 'ICON Foundation Official Website', 'ICON Cross-Chain Documentation', 'ICON General Message Passing (xCall)'],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'ICON Documentation',
    description: 'Documentation for ICONs Cross-Chain Framework. Simplifying cross-chain development with its easy-to-use general message passing standard and connections to secure bridging protocols',
    url: 'https://docs.icon.community/',
    siteName: 'ICON Cross-Chain Documentation',
    images: [
      {
        url: 'https://docs.icon.community/images/link-preview.jpg',
        alt: 'ICON Cross-Chain Documentation',
        width: 800,
        height: 600,
      },
      {
        url: 'https://docs.icon.community/images/link-preview.jpg',
        alt: 'ICON Cross-Chain Documentation',
        width: 1800,
        height: 1600,
      }     
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICON Cross-Chain Documentation',
    description: 'Documentation for ICONs Cross-Chain Framework. Simplifying cross-chain development with its easy-to-use general message passing standard and connections to secure bridging protocols',
    creator: '@helloiconworld',
    images: {
      url: 'https://docs.icon.community/images/link-preview.jpg',
      alt: 'ICON Cross-Chain Documentation',
      width: 1200,
      height: 630,
    }
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <main lang="en" className="font-montserrat">
      <Layout>
        <Component {...pageProps} />
        <MendableChatBubble 
        anon_key='4a621d80-aa5b-43cc-8600-dd155943ba19' cmdShortcutKey='m' style={{ darkMode: true, accentColor: "#00B8CC" }} />
      </Layout>     
      <Analytics />
    </main>
  )
}

export default MyApp