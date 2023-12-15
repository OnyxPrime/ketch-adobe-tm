import Head from 'next/head'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <Script>{`!function(){window.semaphore=window.semaphore||[],window.ketch=function(){window.semaphore.push(arguments)};var e=new URLSearchParams(document.location.search),o=e.has("property")?e.get("property"):"website_smart_tag",n=document.createElement("script");n.type="text/javascript",n.src="https://global.ketchcdn.com/web/v2/config/helix/".concat(o,"/boot.js"),n.defer=n.async=!0,document.getElementsByTagName("head")[0].appendChild(n)}();`}</Script>
        
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
