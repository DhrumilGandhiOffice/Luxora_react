import React, { useEffect, useState } from 'react';
import './header.scss';
import MenuLink from './MenuLink';


function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
            <header className={scrolled ? 'header scrolled' : 'header'}>
                <nav className="navbar">
                    <button className="hamburger" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                        <img src="/assets/svg/humburger.svg" className="menu-icon" alt="Menu" />
                        <img src="/assets/svg/close.svg" className="close-icon" alt="Close Menu" />
                    </button>

                    <a href="index.html" className="logo">
                        <img src="/assets/svg/logo_black.svg" alt="Luxora" />
                    </a>
                    <MenuLink />
                    <div className="nav-icons">

                        <div className="icons">
                            <a href="#" className="search-icon" aria-label="Search">
                                <img src="/assets/svg/search.svg" alt="" />
                            </a>
                            <a href="#" className="account-icon" aria-label="Account">
                                <img src="/assets/svg/user.svg" alt="" />
                            </a>
                            <a href="#" className="cart-icon" aria-label="Cart">
                                <img src="/assets/svg/cart.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </nav>

                <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>

                    <MenuLink isMobile={true} onLinkClick={() => setMenuOpen(false)}/>


                    <div className="separator">
                        <div className="menu-footer">
                            <div className="search">
                                <p className="text-m">Search</p>
                            </div>
                            <p className="v-separator">|</p>
                            <div className="account">
                                <p className="text-m">Account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
