import { GiWeightLiftingUp, GiMuscleUp, GiMeal } from 'react-icons/gi';
import { FaDumbbell, FaStar } from 'react-icons/fa';
import { MdFitnessCenter } from 'react-icons/md';
import heroBg from '../assets/hero-bg.png';
import './Hero.css';

const features = [
    { icon: <MdFitnessCenter />, label: 'Crossfit' },
    { icon: <GiMeal />, label: 'Nutrition Consulting' },
    { icon: <GiMuscleUp />, label: 'Personal Training' },
    { icon: <FaDumbbell />, label: 'Weight Training' },
];

const stats = [
    { number: '4.9', label: 'Google Rating ★' },
    { number: '3+', label: 'Expert Coaches' },
    { number: '4', label: 'Core Services' },
    { number: 'Unisex', label: 'Gym For All' },
];

export default function Hero() {
    return (
        <section className="hero" id="home">
            {/* Background */}
            <div className="hero-background">
                <img src={heroBg} alt="Gym training" />
            </div>
            <div className="hero-overlay" />

            {/* Content */}
            <div className="hero-content fade-in-up">
                <span className="hero-tag">Unisex Premium Gym • Siliguri</span>
                <h1 className="hero-title">
                    Unlock Your Strength.
                    <span className="highlight">Define Your Potential.</span>
                </h1>
                <p className="hero-description">
                    Train with passion, transform with power at Pumping Iron Gym.
                    Crossfit, personal training, weight training & nutrition consulting —
                    all under one roof in Siliguri.
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn-primary">Start Today</a>
                    <a href="#services" className="btn-outline">Our Services</a>
                </div>
                <div className="hero-features">
                    {features.map((f) => (
                        <div className="hero-feature-card" key={f.label}>
                            <div className="hero-feature-icon">{f.icon}</div>
                            <div className="hero-feature-label">{f.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Bar */}
            <div className="hero-stats">
                <div className="hero-stats-inner">
                    {stats.map((s) => (
                        <div className="hero-stat" key={s.label}>
                            <span className="hero-stat-number">{s.number}</span>
                            <span className="hero-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
