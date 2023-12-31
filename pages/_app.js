import '@styles/globals.css'
import Script from 'next/script'

function Application({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
        <Script id="script1">{`!function(){window.semaphore=window.semaphore||[],window.ketch=function(){window.semaphore.push(arguments)};var e=new URLSearchParams(document.location.search),o=e.has("property")?e.get("property"):"website_smart_tag",n=document.createElement("script");n.type="text/javascript",n.src="https://global.ketchcdn.com/web/v2/config/helix/".concat(o,"/boot.js"),n.defer=n.async=!0,document.getElementsByTagName("head")[0].appendChild(n)}();`}</Script>
        <Script id="script2">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5MF7SXS');`}</Script>
        <Script id="script3"> {`
          console.log('Hello Ryan!');
          `}
        </Script>
    </>
  )
}

export default Application
