import Hero from '../components/Hero/Hero';
import BrandCarousel from '../components/BrandCarousel/BrandCarousel';
import MostFamous from '../components/MostFamous/MostFamous';
import About from '../components/AboutLuxora/About';
import Video from '../components/Video/Video';
import Category from '../components/Category/Category';
import LatestJournal from '../components/LatestJournal/LatestJournal';

function Home() {
  return (
    <>
        <Hero />
        <BrandCarousel />
        <MostFamous />
        <About />
        <Video />
        <Category />
        <LatestJournal />
    </>
  )
}

export default Home
