import React from 'react';
import "../styles/navigations.css"
const NavigationDots = ({ activeIndex, totalSections, onDotClick }) => {
    return (
        <div className="navigation-dots">
            {[...Array(totalSections)].map((_, index) => (
                <button
                    key={index}
                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => onDotClick(index)}
                    aria-label={`Перейти к секции ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default NavigationDots;