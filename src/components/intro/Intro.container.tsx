import { useEffect } from 'react';
import IntroPresenter from "./Intro.presenter";

export const IntroContainer = () => {
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            // 아래로 스크롤할 때 about으로 이동 (조건 단순화)
            if (e.deltaY > 0) {
                e.preventDefault();
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
                e.preventDefault();
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        const handleClick = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);
        const scrollIndicator = document.querySelector('[data-scroll-indicator]');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', handleClick);
        }

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
            if (scrollIndicator) {
                scrollIndicator.removeEventListener('click', handleClick);
            }
        };
    }, []);

    return <IntroPresenter />;
}

export default IntroContainer; 