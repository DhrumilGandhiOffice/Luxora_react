import { useState } from 'react'
import './assets/styles/main.scss'
import './assets/styles/_typography.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import BrandCarousel from './components/BrandCarousel/BrandCarousel';
import MostFamous from './components/MostFamous/MostFamous';
import About from './components/AboutLuxora/About';
import Video from './components/Video/Video';
import Category from './components/Category/Category';
import LatestJournal from './components/LatestJournal/LatestJournal';
import Blog from './components/Blog/Blog';



function App() {
  return (
    <>
      <Header />
      <div className='main-container'>
        <Hero />
        <BrandCarousel />
        <MostFamous />
        <About />
        <Video />
        <Category />
        <LatestJournal />
        {/* <Blog /> */}
      </div>
      <Footer />
    </>
  )
}

export default App
