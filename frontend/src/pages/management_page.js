import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Management from '../components/management';
import Menu from '../components/menu';

const ManagementPage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Management />
      <Footer />
    </div>
  );
}

export default ManagementPage;
