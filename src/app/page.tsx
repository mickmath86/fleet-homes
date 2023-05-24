import Image from 'next/image'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Mission from './components/Mission'
import ProductRight from './components/ProductRight'
import ProductLeft from './components/ProductLeft'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>  
      <Hero/>
      <Steps/>
      {/* <Mission/> */}
      <ProductRight/>
      <ProductLeft/>
      <Footer/> 
    </>
  )
}
