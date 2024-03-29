import 'tailwindcss/tailwind.css'
import '../globals.css';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout';
import { MendableChatBubble } from "@mendable/search";

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