import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import Images from '../components/carousel_images'
import Footer from '../components/footer'
import Emergency from '../components/emergency'

const home_page = () => {
  return (
    <div>
      < Header />
      < Emergency />
      < Menu />
      < Images />
      < Footer />
    </div>
  )
}

export default home_page