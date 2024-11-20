"use client";

import React, { useEffect, useState, useRef } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 1000, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setDisplayValue(0); // Reset when out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    let timer: number;

    const step = () => {
      start += increment;
      if (start < end) {
        setDisplayValue(Math.floor(start));
        timer = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(end);
      }
    };

    timer = window.requestAnimationFrame(step);

    return () => {
      if (timer) {
        window.cancelAnimationFrame(timer);
      }
    };
  }, [value, duration, isVisible]);

  return <span ref={elementRef}>{displayValue}{suffix}</span>;
};

export default AnimatedNumber; 