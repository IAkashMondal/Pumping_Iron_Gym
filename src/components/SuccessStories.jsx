import { FaStar, FaGoogle, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';
import './SuccessStories.css';

const reviews = [
    {
        name: 'Dev Sarkar',
        review: 'The gym is very good and I enjoy going to the gym 😊',
        stars: 5,
        timeAgo: 'a year ago',
        initial: 'D',
        color: '#e67e22',
    },
    {
        name: 'Pinku Kumar',
        review: 'Go and train urself under Mr India suman da the best gym of siliguri, go for it guys 💪💪',
        stars: 5,
        timeAgo: 'a year ago',
        badge: 'Local Guide',
        initial: 'P',
        color: '#e74c3c',
    },
    {
        name: 'Abhay Sahu',
        review: 'Hygiene and decipline 100% ❤️ one of the favorite gym. This is my personal opinion. 😊',
        stars: 5,
        timeAgo: 'a year ago',
        initial: 'A',
        color: '#3498db',
    },
    {
        name: 'Nurdip Sarkar',
        review: 'Best gym in siliguri, best trainer and best out of best gym, thank you Suman da for building the best gym',
        stars: 5,
        timeAgo: 'a year ago',
        initial: 'N',
        color: '#9b59b6',
    },
    {
        name: 'Sunny Jaiswal',
        review: 'One of the best gym for enhanced your fitness journey & building muscles under the guidance of best trainers..',
        stars: 5,
        timeAgo: 'a year ago',
        initial: 'S',
        color: '#7f8c8d',
    },
    {
        name: 'Rahul M.',
        review: 'Amazing crossfit sessions and the personal training programs are top-notch. Suman da really knows his stuff! 🔥',
        stars: 5,
        timeAgo: '6 months ago',
        initial: 'R',
        color: '#27ae60',
    },
];

const CARDS_PER_VIEW = 3;

export default function SuccessStories() {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [dragStart, setDragStart] = useState(null);
    const [dragging, setDragging] = useState(false);

    const totalPages = Math.ceil(reviews.length / CARDS_PER_VIEW);

    const goTo = useCallback(
        (i) => setCurrent(((i % totalPages) + totalPages) % totalPages),
        [totalPages]
    );
    const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
    const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

    // Auto-advance every 3s (paused on hover)
    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(goNext, 3000);
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

    // Get current 3 cards
    const startIdx = current * CARDS_PER_VIEW;
    const visibleReviews = reviews.slice(startIdx, startIdx + CARDS_PER_VIEW);

    return (
        <section className="success" id="success">
            <div className="container">
                {/* Header */}
                <div className="success-header">
                    <p className="section-subtitle">
                        <FaGoogle style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        4.9 ★ on Google
                    </p>
                    <h2 className="section-title">What Our Members Say</h2>
                    <p className="success-subtext">Real reviews from our amazing community</p>
                </div>

                {/* Carousel */}
                <div
                    className="reviews-carousel"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={onMouseLeave}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                >
                    <button className="rv-btn rv-btn-prev" onClick={goPrev} aria-label="Previous">
                        <FaChevronLeft />
                    </button>

                    <div className="reviews-grid">
                        {visibleReviews.map((r) => (
                            <div className="review-card" key={r.name}>
                                <FaQuoteLeft className="review-quote-icon" />
                                <div className="review-header">
                                    <div className="review-avatar" style={{ background: r.color }}>
                                        {r.initial}
                                    </div>
                                    <div className="review-meta">
                                        <h4 className="review-name">{r.name}</h4>
                                        {r.badge && <span className="review-badge">{r.badge}</span>}
                                        <span className="review-time">{r.timeAgo}</span>
                                    </div>
                                </div>
                                <div className="review-stars">
                                    {[...Array(r.stars)].map((_, j) => (
                                        <FaStar key={j} />
                                    ))}
                                </div>
                                <p className="review-text">{r.review}</p>
                                <div className="review-source">
                                    <FaGoogle /> Google Review
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="rv-btn rv-btn-next" onClick={goNext} aria-label="Next">
                        <FaChevronRight />
                    </button>
                </div>

                {/* Dots */}
                <div className="rv-dots">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={`rv-dot${i === current ? ' active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Page ${i + 1}`}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="success-cta">
                    <a href="#contact" className="btn-primary">
                        Join Our Community
                    </a>
                </div>
            </div>
        </section>
    );
}
