import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import Images from '../components/carousel_images'
import Footer from '../components/footer'

const home_page = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Images />
      <p>At The Right Pack Out, we bring over a decade of experience and specialized training to manage and care for you high-end contents. From stage costumes, collectibles, and artwork to brand-name leather and garment items, paper products, sports memorabilia, jewelry, and more, our team handles it all with precision and care. 
      Our commitment to excellence is driven by our core values and dedication to service, ensuring your treasured items are handled with the utmost respect and professionalism. At The Right Pack Out, we not only resort your items but also offer peace of mind through our trusted and reliable service. 
</p>
      <Footer />
    </div>
  )
}

export default home_page