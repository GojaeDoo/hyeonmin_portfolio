'use client'

import { useEffect } from 'react';
import IntroPresenter from "./Intro.presenter";

export const IntroContainer = () => {
    useEffect(() => {
        const handleClick = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const scrollIndicator = document.querySelector('[data-scroll-indicator]');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', handleClick);
        }

        return () => {
            if (scrollIndicator) {
                scrollIndicator.removeEventListener('click', handleClick);
            }
        };
    }, []);

    return <IntroPresenter />;
}

export default IntroContainer; 