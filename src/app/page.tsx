import Image from 'next/image'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Mission from './components/Mission'
import ProductRight from './components/ProductRight'
import ProductLeft from './components/ProductLeft'
import Footer from './components/Footer'
import Script from 'next/script'


export default function Home() {
  return (
    <>  
      <Hero/>
      <Steps/>
      {/* <Mission/> */}
      <ProductRight/>
      <ProductLeft/>
      <Footer/> 
          <div className="container">
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=GTM-MCWRCKQ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'GTM-MCWRCKQ');
            `}
          </Script>
        </div>
    </>
  )
}
