import { useEffect } from 'react';
import './blog.scss';
import LatestNews from './LatestNews';



const BlogPage = () => {
    const latestNews = [
        {
            "imageData": {
                "imageUrl": "./assets/images/blog/news-1.jpg",
                "alt": "news-1"
            },
            "date": "January 25, 2025",
            "title": "The Power of Pink: Celebrity Style Inspo from Our Favorite Icons lorem"
        },
        {
            "imageData": {
                "imageUrl": "./assets/images/blog/news-2.jpg",
                "alt": "news-1"
            },
            "date": "January 25, 2025",
            "title": "The Power of Pink: Celebrity Style Inspo from Our Favorite Icons lorem"
        },
        {
            "imageData": {
                "imageUrl": "./assets/images/blog/news-3.jpg",
                "alt": "news-1"
            },
            "date": "January 25, 2025",
            "title": "The Power of Pink: Celebrity Style Inspo from Our Favorite Icons lorem"
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observerInstance) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observerInstance.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));

        // Cleanup on unmount
        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    return (
        <>
            <section className="blog-section">
                <article className="blog-info ">
                    <h1 className="h4-m sub-container">The Power of Pink: Celebrity Style Inspo from Our Favorite Icons</h1>
                    <div className="blog-meta-data text-m text-m-n">
                        <span>By Jane Doe</span>
                        <p>Published: Apr 25, 2024 2:19 PM EDT</p>
                    </div>

                    <div className="blog-social-icons">
                        <img src="./assets//svg/insta.svg" alt="insta" />
                        <img src="./assets/svg/meta.svg" alt="meta" />
                        <img src="./assets//svg/twitter.svg" alt="twitter" />
                    </div>

                    <div className="blog-main-img">
                        <picture>
                            <source srcset="./assets/images/blog/blog-main-m.jpg" media="(max-width: 768px)" />
                            <source srcset="./assets/images/blog/blog-main.jpg" media="(max-width: 1512px)" />
                            <img src="./assets/images/blog/blog-main.jpg" alt="Example Image" />
                        </picture>
                    </div>
                    <div className="blog-text">
                        <div className="blog-main-text text-m">
                            <div className="fade-in">
                                <p>
                                    When it comes to making bold fashion statements, there’s one color that never fails to
                                    turn
                                    heads: pink. From soft pastels to vibrant fuchsias, pink has been making waves on red
                                    carpets,
                                    runways, and Instagram feeds worldwide. This week, we’re diving into how our favorite
                                    celebrities are redefining the ultimate power color.
                                </p>
                                <p className="text-l-b">Paris Hilton’s Double Pink Moment</p>
                                <p>The iconic Paris Hilton reminded us why she’s forever a trendsetter. Spotted at a recent
                                    event,
                                    Paris stunned in two show-stopping hot pink ensembles. The first was a sleek satin mini
                                    dress
                                    with dramatic puffed sleeves—a nod to old Hollywood glamour, paired with glittering
                                    diamond
                                    accessories and her signature blonde waves. The second? A daring, high-slit gown with
                                    rhinestone
                                    embellishments that caught every flash of paparazzi light. It’s classic Paris: bold,
                                    beautiful,
                                    and unapologetically pink.</p>
                                <p className="text-l-b">How to Channel Your Inner Paris</p>
                                <p>Want to bring some Hilton-worthy glam into your wardrobe? Here’s how:</p>
                                <ol>
                                    <li>Go Monochrome: Don’t shy away from an all-pink look. Mixing textures like satin,
                                        tulle,
                                        and
                                        sequins can add dimension and keep it chic</li>
                                    <li>Statement Accessories: Think crystal chokers, oversized sunglasses, and metallic
                                        heels.
                                        The
                                        right accessories can elevate any outfit.</li>
                                    <li>Confidence is Key: Paris Hilton’s greatest accessory? Confidence. Whether you’re
                                        rocking
                                        hot
                                        pink or any other bold hue, wear it like you own it.</li>
                                </ol>
                                <p className="text-l-b">Other Celebs Making Pink Pop</p>
                                <ul>
                                    <li>Zendaya: The fashion icon wowed in a bubblegum pink power suit at a recent premiere,
                                        complete with sharp tailoring and a sleek ponytail.</li>
                                    <li>Rihanna: Always ahead of the curve, RiRi was spotted in a pastel pink feathered
                                        dress
                                        from
                                        her own Fenty collection, proving that pink can be edgy and ethereal.</li>
                                    <li>Timothée Chalamet: Breaking barriers in menswear, Timothée rocked a blush pink
                                        tuxedo at
                                        the
                                        Oscars, showing that pink isn’t just for the ladies.</li>
                                </ul>
                            </div>
                            <div className="blog-img-sec">
                                <picture>
                                    <source srcset="./assets/images/blog/blog-sec-m.jpg" media="(max-width: 768px)" />
                                    <source srcset="./assets/images/blog/blog-sec-d.jpg" media="(max-width: 1512px)" />
                                    <img src="./assets/images/blog/blog-sec-d.jpg" alt="Example Image" />
                                </picture>
                            </div>

                            <div className="fade-in">
                                <p className="text-l-b">Why Pink Is Here to Stay</p>

                                <p>Pink isn’t just a color—it’s a mood, a statement, and a celebration of individuality.
                                    Whether
                                    you’re channeling Barbiecore vibes or keeping it subtle, there’s a shade of pink for
                                    everyone. As the fashion world continues to embrace gender-neutral palettes and bold
                                    self-expression, pink remains a timeless choice.</p>

                                <button>Shop the Look</button>

                                <p>Ready to add some pink power to your wardrobe? Check out our latest collection featuring:
                                </p>
                                <ul>
                                    <li>Satin slip dresses in blush and magenta.</li>
                                    <li>Oversized fuchsia blazers for that Zendaya-approved vibe.</li>
                                    <li>Crystal-studded heels and bags to complete your look.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="separator"></div>

                        <div className="blog-latest-news">
                            <h3>Latest News</h3>

                            <div className="latest-news-tiles fade-in">
                                {latestNews.map((news, index) => (
                                    <LatestNews
                                        key={index}
                                        imageData={news.imageData}
                                        date={news.date}
                                        title={news.title}
                                        index={index}
                                        total={latestNews.length}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default BlogPage
