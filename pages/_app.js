import 'tailwindcss/tailwind.css'
import '../globals.css';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout';
import { MendableChatBubble } from "@mendable/search";
import { Topbar } from '../components/topbar';
import { APIDataContextProvider } from '../contexts/APIDataContext';

function MyApp({ Component, pageProps }) {
  return (
    <APIDataContextProvider>
      <main lang="en" className="font-montserrat">
        <Layout>
          {/* <Topbar /> */}
          <Component {...pageProps} />
          <MendableChatBubble 
          anon_key='4a621d80-aa5b-43cc-8600-dd155943ba19' cmdShortcutKey='m' style={{ darkMode: true, accentColor: "#00B8CC" }} />
        </Layout>     
        <Analytics />
      </main>
    </APIDataContextProvider>
  )
}

export default MyApp