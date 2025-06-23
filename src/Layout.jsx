import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
        <Header />
            <main>
                <div className='main-container'>
                    <Outlet />
                </div>
            </main>
        <Footer />
    </>
  )
}

export default Layout
