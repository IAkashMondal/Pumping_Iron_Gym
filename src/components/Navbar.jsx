import { useState, useEffect } from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Reviews', href: '#success' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <div className="navbar-logo-icon">
            <GiWeightLiftingUp size={34} color="#ff6a00" />
          </div>
          <div className="navbar-logo-text">
            Pumping <span>Iron</span> Gym
          </div>
        </a>

        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary navbar-cta">
            Join Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar-hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary"
          onClick={() => setMenuOpen(false)}
          style={{ textAlign: 'center', marginTop: '8px' }}
        >
          Join Now
        </a>
      </div>
    </nav>
  );
}
