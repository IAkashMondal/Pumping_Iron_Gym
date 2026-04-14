import { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaTrophy, FaMedal, FaInstagram } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import suman1 from '../assets/suman-1.jpg';
import suman2 from '../assets/suman-2.jpg';
import suman3 from '../assets/suman-3.jpg';
import suman4 from '../assets/suman-4.jpg';
import suman5 from '../assets/suman-5.jpg';
import './Coaches.css';

const sumanImages = [suman1, suman2, suman3, suman4, suman5];

const achievements = [
    { year: '2012', title: 'Jr. National 1st Runner Up' },
    { year: '2018', title: 'IBBFF Mr. India Runner Up' },
    { year: '2019', title: 'IFBB Diamond Cup Runner Up' },
    { year: '2022', title: 'IFBB Thailand Pro Qualifier 80kg' },
    { year: '2023', title: 'NPC Rajasthan 80kg' },
];

const otherCoaches = [
    {
        name: 'Ajit',
        role: 'Personal Trainer',
        desc: 'Specializes in personal training and body transformation. Known for creating customized workout plans that deliver real results.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=600&fit=crop',
    },
    {
        name: 'Rohit',
        role: 'Fitness Coach',
        desc: 'Expert in weight training and nutrition consulting. Dedicated to building strength, endurance, and confidence in every member.',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=600&fit=crop',
    },
];

export default function Coaches() {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [dragStart, setDragStart] = useState(null);
    const [dragging, setDragging] = useState(false);

    const total = sumanImages.length;

    const goTo = useCallback(
        (i) => setCurrent((i + total) % total),
        [total]
    );

    const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
    const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

    // Auto-advance every 1 second
    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(goNext, 1000);
        return () => clearInterval(timer);
    }, [goNext, isHovered]);

    // Touch swipe
    const minSwipe = 50;
    const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const d = touchStart - touchEnd;
        if (Math.abs(d) >= minSwipe) d > 0 ? goNext() : goPrev();
    };

    // Mouse drag
    const onMouseDown = (e) => { setDragStart(e.clientX); setDragging(true); };
    const onMouseUp = (e) => {
        if (!dragging || dragStart === null) return;
        const d = dragStart - e.clientX;
        if (Math.abs(d) >= minSwipe) d > 0 ? goNext() : goPrev();
        setDragging(false); setDragStart(null);
    };
    const onMouseLeave = () => { setDragging(false); setDragStart(null); setIsHovered(false); };

    return (
        <section className="coaches" id="coaches">
            <div className="container">
                {/* Header */}
                <div className="coaches-header">
                    <p className="section-subtitle">Meet The Team</p>
                    <h2 className="section-title">Our Expert Coaches</h2>
                </div>

                {/* ── Suman Das Feature ── */}
                <div className="coach-featured">
                    <div
                        className="coach-carousel"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={onMouseLeave}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                    >
                        <button className="ccoach-btn ccoach-btn-prev" onClick={goPrev} aria-label="Previous">
                            <FaChevronLeft />
                        </button>
                        <div className="coach-carousel-viewport">
                            <div
                                className="coach-carousel-track"
                                style={{
                                    transform: `translateX(-${current * 100}%)`,
                                    transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
                                }}
                            >
                                {sumanImages.map((img, i) => (
                                    <div className="coach-carousel-slide" key={i}>
                                        <img src={img} alt={`Suman Das - ${i + 1}`} draggable="false" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="ccoach-btn ccoach-btn-next" onClick={goNext} aria-label="Next">
                            <FaChevronRight />
                        </button>

                        {/* Dots */}
                        <div className="coach-carousel-dots">
                            {sumanImages.map((_, i) => (
                                <button
                                    key={i}
                                    className={`coach-carousel-dot${i === current ? ' active' : ''}`}
                                    onClick={() => goTo(i)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="coach-featured-bio">
                        <div className="coach-featured-badge">
                            <GiWeightLiftingUp /> IFBB PRO
                        </div>
                        <h3 className="coach-featured-name">Suman Das</h3>
                        <p className="coach-featured-role">Head Coach & IFBB Pro Athlete</p>
                        <p className="coach-featured-desc">
                            IFBB Pro bodybuilder and the driving force behind Pumping Iron Gym.
                            With over a decade of competitive experience at national and
                            international levels, Coach Suman brings world-class expertise
                            to every training session.
                        </p>

                        <div className="coach-achievements">
                            <h4 className="coach-achievements-title">
                                <FaTrophy /> Competition Achievements
                            </h4>
                            {achievements.map((a) => (
                                <div className="coach-achievement-row" key={a.year + a.title}>
                                    <span className="achievement-year">{a.year}</span>
                                    <span className="achievement-title">{a.title}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://www.instagram.com/ifbb_elite_pro_suman_das_90?igsh=MWEzNGFkbWh5bDRsNg%3D%3D"
                            target="_blank"
                            rel="noreferrer"
                            className="coach-instagram-btn"
                        >
                            <FaInstagram /> Follow on Instagram
                        </a>
                    </div>
                </div>

                {/* ── Other Coaches ── */}
                <div className="coaches-other-heading">
                    <h3>Also Training You</h3>
                </div>
                <div className="coaches-grid">
                    {otherCoaches.map((c) => (
                        <div className="coach-card" key={c.name}>
                            <div className="coach-card-image">
                                <img src={c.image} alt={c.name} />
                            </div>
                            <div className="coach-card-body">
                                <h3 className="coach-card-name">{c.name}</h3>
                                <p className="coach-card-role">{c.role}</p>
                                <p className="coach-card-desc">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
