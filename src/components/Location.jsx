import { FaMapMarkerAlt, FaPhone, FaGoogle, FaClock, FaDirections } from 'react-icons/fa';
import { MdFitnessCenter } from 'react-icons/md';
import './Location.css';

export default function Location() {
    return (
        <section className="location" id="location">
            <div className="container">
                {/* Header */}
                <div className="location-header">
                    <p className="section-subtitle">Find Us</p>
                    <h2 className="section-title">Visit Pumping Iron Gym</h2>
                </div>

                <div className="location-grid">
                    {/* Map */}
                    <div className="location-map-section">
                        <div className="location-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.5!2d88.43!3d26.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441!2sSiliguri!5e0!3m2!1sen!2sin!4v1"
                                allowFullScreen
                                loading="lazy"
                                title="Pumping Iron Gym Location - Siliguri"
                            />
                        </div>
                        <a
                            href="https://maps.google.com/?q=P9CJ%2BPP+Siliguri"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary location-directions-btn"
                        >
                            <FaDirections /> Get Directions
                        </a>
                    </div>

                    {/* Info */}
                    <div className="location-info">
                        {/* Address */}
                        <div className="location-card">
                            <div className="location-card-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="location-card-content">
                                <h3>Address</h3>
                                <p>
                                    Oppo. SBI Bank, Swarnashree Building,<br />
                                    Khaprail More, Thana Road,<br />
                                    Siliguri, West Bengal 734010
                                </p>
                                <p className="location-plus-code">
                                    Plus Code: <a href="https://maps.google.com/?q=P9CJ%2BPP+Siliguri" target="_blank" rel="noreferrer">P9CJ+PP Siliguri, West Bengal</a>
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="location-card">
                            <div className="location-card-icon">
                                <FaPhone />
                            </div>
                            <div className="location-card-content">
                                <h3>Phone</h3>
                                <p>
                                    <a href="tel:+91XXXXXXXXXX">Contact us for details</a>
                                </p>
                            </div>
                        </div>

                        {/* Google Reviews */}
                        <div className="location-card location-card-highlight">
                            <div className="location-card-icon">
                                <FaGoogle />
                            </div>
                            <div className="location-card-content">
                                <h3>Google Reviews</h3>
                                <p className="location-rating">
                                    <span className="rating-number">4.9</span>
                                    <span className="rating-stars">★★★★★</span>
                                    <span className="rating-label">Unisex Gym</span>
                                </p>
                            </div>
                        </div>

                        {/* Gym Type */}
                        <div className="location-card">
                            <div className="location-card-icon">
                                <MdFitnessCenter />
                            </div>
                            <div className="location-card-content">
                                <h3>Facilities</h3>
                                <p>Crossfit • Personal Training • Weight Training • Nutrition Consulting</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="location-hours">
                            <div className="location-hours-header">
                                <FaClock className="location-hours-icon" />
                                <h3>Gym Timing</h3>
                            </div>
                            <div className="location-hours-row">
                                <span>Monday</span>
                                <span className="hours-open">6:00 AM – 10:00 PM</span>
                            </div>
                            <div className="location-hours-row">
                                <span>Tuesday</span>
                                <span className="hours-open">6:00 AM – 10:00 PM</span>
                            </div>
                            <div className="location-hours-row">
                                <span>Wednesday</span>
                                <span className="hours-open">6:00 AM – 10:00 PM</span>
                            </div>
                            <div className="location-hours-row">
                                <span>Thursday</span>
                                <span className="hours-open">6:00 AM – 10:00 PM</span>
                            </div>
                            <div className="location-hours-row">
                                <span>Friday</span>
                                <span className="hours-open">6:00 AM – 10:00 PM</span>
                            </div>
                            <div className="location-hours-row">
                                <span>Saturday</span>
                                <span className="hours-open">6:00 AM – 10:00 PM</span>
                            </div>
                            <div className="location-hours-row">
                                <span>Sunday</span>
                                <span className="hours-closed">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
