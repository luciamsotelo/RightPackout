import React from 'react'
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Storage from '../components/storage.js';
import Menu from '../components/menu.js';

const storage = () => {
  return (
    <div>
      < Header />
      < Menu />
      < Storage />
      < Footer />
    </div>
  )
}

export default storage