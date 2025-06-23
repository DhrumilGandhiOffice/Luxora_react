import React from 'react';
import './brandCarousel.scss';

const BrandCarousel = () => {
    const logos = [
        { src: './assets/images/brandCarousel/carousel-image-1.png', alt: 'logo-1' },
        { src: './assets/images/brandCarousel/carousel-image-2.png', alt: 'logo-2' },
        { src: './assets/images/brandCarousel/carousel-image-3.png', alt: 'logo-3' },
        { src: './assets/images/brandCarousel/carousel-image-4.png', alt: 'logo-4' },
        { src: './assets/images/brandCarousel/carousel-image-5.png', alt: 'logo-5' },
    ];
    const renderLogos = () => {
        return logos.map((logo, index) => (
            <li key={index}><img className='slide carousel-image' src={logo.src} alt={logo.alt} /></li>
        ))
    };
    return (
        <>
            <section className="carousel-auto">
                <div className="carousel-track">
                    <ul className="slides">
                        {renderLogos()}
                    </ul>
                    <ul className="slides-clone">
                        {renderLogos()}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default BrandCarousel
