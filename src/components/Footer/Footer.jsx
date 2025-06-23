import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <>
        <footer className="footer">
            <div className="footer-wraper">
            <div className="footer-items">
                <div id="contact" className="subscription">
                <h5>Subscribe To Our Newsletter</h5>
                <div className="input-container">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="footer-social-icons">
                    <img src="./assets//svg/insta.svg" alt="insta" />
                    <img src="./assets/svg/meta.svg" alt="meta" />
                    <img src="./assets//svg/twitter.svg" alt="twitter" />
                </div>
                </div>
                <div className="links">
                <div className="quick-link">
                    <h6>Quick Links</h6>

                    <ul>
                    <li><a className="text-n" href="#">Shop</a></li>
                    <li><a className="text-n" href="#">Blogs</a></li>
                    <li><a className="text-n" href="#">Category</a></li>
                    </ul>
                </div>
                <div className="company">
                    <h6>Company</h6>
                    <ul>
                    <li><a className="text-n" href="#">Contact Us</a></li>
                    <li><a className="text-n" href="#">FAQs</a></li>
                    <li><a className="text-n" href="#">Return Policy</a></li>
                    <li><a className="text-n" href="#">Privacy Policy</a></li>
                    <li><a className="text-n" href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
                </div>

            </div>
            <div className="separator"></div>
            <div className="footer-copy-right">
                <div className="footer-logo"><img src="./assets/svg/logo_black.svg" alt="footer-logo" /></div>
                <div className="copy-right-text text-n">© 2025-2026 | All Rights Reserved</div>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
