import React from 'react';
import './home.css';
import Navbar from '../../components/Navbar/navbar';
import Header from '../../components/header/header';
import Featured from '../../components/Featured/Featured';
import PropertyList from '../../components/PropertyList/PropertyList';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/footer/footer';
function Home() {
  return (
  <> 
  <Navbar />
  <Header />
  <Featured/>
   <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Hotels guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <br></br>
        <Footer/>
  </>
  );
}

export default Home;