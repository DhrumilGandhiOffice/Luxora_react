import React from 'react';
import './about.scss';

const About = () => {
    return (
        <>
            <section id="about" className="sub-container about">
                <article className="about-text">
                    <h3>About Luxora</h3>
                    <div className="about-container">
                        <div className="about-image">
                            <picture>
                                <source srcset="./assets/images/about/about_m.jpg" media="(max-width: 768px)" />
                                    <source srcset="./assets/images/about/about.jpg" media="(max-width: 1512px)" />
                                        <img src="./assets/images/about/about.jpg" alt="Example Image" />
                                    </picture>
                                </div>
                                <div className="about-data">
                                    <p className="text-n">At Luxora, we believe that fashion is more than just clothing – it’s a way to express your
                                        unique story. Our brand is built on the values of elegance, comfort, and individuality, creating timeless
                                        pieces that resonate with your lifestyle.Each Luxora design is crafted with meticulous attention to
                                        detail,
                                        blending premium fabrics with contemporary styles to ensure you feel confident and stylish. Whether you're
                                        dressing up for a special occasion or embracing everyday chic, Luxora offers versatile collections that
                                        celebrate your personal style.</p>
                                </div>
                        </div>
                </article>
            </section>
        </>
    )
}

export default About
