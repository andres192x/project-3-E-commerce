import React from 'react';
import { useState } from 'react';

// contains css for header && footer
import './OnCodeApp.css';
// import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import AboutUs from './components/pages/AboutUs/AboutUs'
import Collection from './components/pages/Collection/Collection';
import Cart from './components/pages/Cart/Cart';
import Login from './components/pages/Login/Login'
import Signup from './components/pages/Login/Signup'

function OnCodeApp() {

  const [page, setPage] = useState('home');
  const handlePageRender = page => setPage(page);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home page={page} handlePageRender={handlePageRender} />;

      case 'about-us':
        return <AboutUs />

      case 'collection':
        return <Collection />

      case 'cart':
        return <Cart />

      case 'login':
        return <Login />

      default:
    }

  }


  return (
    <main>
      {/* NAVBAR */}
      <Header page={page} handlePageRender={handlePageRender} />
      {/* MAIN SECTION TO RERENDER */}
      <section id='page'>
        {renderPage()}
      </section>
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
export default OnCodeApp;