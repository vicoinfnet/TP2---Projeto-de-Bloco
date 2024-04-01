import "@fontsource/roboto";
import "./App.css";


import React from 'react';
import { AppBar } from './AppBar';
import { Banner } from './Banner';
import { SiteDescription } from './SiteDescription';
import { Footer } from './Footer';
import { CardsGrid } from './CardsGrid';
import SecondBanner from './SecondBanner';
import ContactForm from './ContactForm';


function App() {
  return (
    <div>
      <AppBar />
      <Banner />
      <CardsGrid />
      <SiteDescription /> 
      <SecondBanner />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
