import { FaDumbbell } from 'react-icons/fa';
import { GiWeightLiftingUp, GiMuscleUp, GiMeal } from 'react-icons/gi';
import { MdFitnessCenter } from 'react-icons/md';
import gymInterior from '../assets/gym-interior.png';
import trainerCoaching from '../assets/trainer-coaching.png';
import './About.css';

const services = [
    { icon: <MdFitnessCenter />, label: 'Crossfit' },
    { icon: <GiMeal />, label: 'Nutrition Consulting' },
    { icon: <GiMuscleUp />, label: 'Personal Training' },
    { icon: <FaDumbbell />, label: 'Weight Training' },
];

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-grid">
                    {/* Text Side */}
                    <div className="about-text">
                        <p className="section-subtitle">About Pumping Iron</p>
                        <h2 className="section-title">Our Mission</h2>
                        <p>
                            At Pumping Iron Gym, we believe fitness is for everyone. As a
                            premium unisex gym in Siliguri, we provide world-class equipment,
                            expert coaching, and a motivating atmosphere that pushes you to
                            become the best version of yourself.
                        </p>
                        <p>
                            With dedicated coaches — Suman Das, Ajit & Rohit — guiding you
                            through personalized training programs, crossfit sessions, and
                            nutrition consulting, your transformation journey starts here.
                            Rated 4.9★ on Google by our amazing community.
                        </p>
                        <div className="about-features" id="services">
                            {services.map((f) => (
                                <div className="about-feature" key={f.label}>
                                    <span className="about-feature-icon">{f.icon}</span>
                                    <span className="about-feature-label">{f.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Images Side */}
                    <div className="about-images">
                        <div className="about-img-wrapper">
                            <img src={gymInterior} alt="Pumping Iron Gym interior" />
                        </div>
                        <div className="about-img-wrapper">
                            <img src={trainerCoaching} alt="Coach training athlete" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
