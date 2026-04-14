import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
} from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-main">
                {/* Brand */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <GiWeightLiftingUp size={28} color="#ff6a00" />
                        <div className="footer-logo-text">
                            Pumping <span>Iron</span> Gym
                        </div>
                    </div>
                    <p className="footer-description">
                        Transform your body, transform your life. Siliguri's premier
                        unisex gym offering crossfit, personal training, weight training,
                        and nutrition consulting. Rated 4.9★ on Google.
                    </p>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="YouTube"><FaYoutube /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#coaches">Coaches</a></li>
                        <li><a href="#success">Reviews</a></li>
                        <li><a href="#location">Location</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-column">
                    <h4>Contact Info</h4>
                    <div className="footer-contact-item">
                        <FaMapMarkerAlt />
                        <span>Oppo. SBI Bank, Swarnashree Building, Khaprail More, Thana Road, Siliguri, WB 734010</span>
                    </div>
                    <div className="footer-contact-item">
                        <FaPhone />
                        <span>Contact us for details</span>
                    </div>
                    <div className="footer-contact-item">
                        <FaEnvelope />
                        <span>info@pumpingirongym.in</span>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="footer-column">
                    <h4>Newsletter</h4>
                    <p className="footer-newsletter">
                        Subscribe for the latest fitness tips, schedules, and exclusive
                        offers from Pumping Iron Gym.
                    </p>
                    <div className="footer-newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="button">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>© 2025 Pumping Iron Gym, Siliguri. All Rights Reserved.</p>
            </div>

            {/* Decorative */}
            <div className="footer-decoration">✦</div>
        </footer>
    );
}
