import { useEffect, useState } from 'react';
import SkillsPresenter from "./Skills.presenter";
import { SkillCategory } from './Skills.types';
import { ReactNode } from 'react';

export const SkillsContainer = () => {
    const [showNavigation, setShowNavigation] = useState(false);

    const skillCategories: SkillCategory[] = [
        {
            id: 'frontend',
            title: 'Frontend',
            skills: [
                { id: 1, name: 'HTML', icon: '/images/icon/HTML.svg', category: 'frontend', level: 5 },
                { id: 2, name: 'CSS', icon: '/images/icon/CSS.svg', category: 'frontend', level: 5 },
                { id: 3, name: 'JavaScript', icon: '/images/icon/JavaScript.svg', category: 'frontend', level: 5 },
                { id: 4, name: 'React', icon: '/images/icon/React.svg', category: 'frontend', level: 5 },
                { id: 5, name: 'TypeScript', icon: '/images/icon/Typescript.svg', category: 'frontend', level: 4 },
                { id: 6, name: 'Next.js', icon: '/images/icon/NextJS-Light.svg', category: 'frontend', level: 4 },
                { id: 7, name: 'Redux', icon: '/images/icon/Redux.svg', category: 'frontend', level: 4 },
                { id: 8, name: 'Styled Components', icon: '/images/icon/StyledComponents.svg', category: 'frontend', level: 5 }
            ]
        },
        {
            id: 'backend',
            title: 'Backend',
            skills: [
                { id: 9, name: 'NodeJs', icon: '/images/icon/NodeJS.svg', category: 'backend', level: 4 },
                { id: 10, name: 'PostgreSQL', icon: '/images/icon/PostgreSQL-Light.svg', category: 'backend', level: 3 }
            ]
        },
        {
            id: 'tools',
            title: 'APIs',
            skills: [
                { id: 11, name: 'Axios', icon: '/images/icon/Azios.svg', category: 'tools', level: 5 },
                { id: 12, name: 'GraphQL', icon: '/images/icon/GraphQL-Light.svg', category: 'tools', level: 3 }
            ]
        },
        {
            id: 'devtools',
            title: 'Development Tools',
            skills: [
                { id: 13, name: 'Git', icon: '/images/icon/Git.svg', category: 'devtools', level: 5 },
                { id: 14, name: 'GitHub', icon: '/images/icon/Github-Light.svg', category: 'devtools', level: 5 },
                { id: 16, name: 'Postman', icon: '/images/icon/Postman.svg', category: 'devtools', level: 4 },
                { id: 17, name: 'Figma', icon: '/images/icon/figma.png', category: 'devtools', level: 3 }
            ]
        }
    ];

    const renderLevelDots = (level: number): ReactNode => {
        return Array.from({ length: 5 }, (_, index) => (
            <div key={index} style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: index < level ? '#4ade80' : '#e5e7eb',
                display: 'inline-block',
                marginRight: 3
            }} />
        ));
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const parent = target.parentElement;
        if (parent) {
            const skillName = parent.querySelector('div');
            if (skillName) {
                (skillName as HTMLElement).style.fontSize = '1.2rem';
                (skillName as HTMLElement).style.fontWeight = '600';
            }
        }
    };

    const handleNavigate = (section: string) => {
    };

    useEffect(() => {
        const handleScroll = () => {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                const rect = skillsSection.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
                setShowNavigation(isVisible);
            }
        };

        const handleWheel = (e: WheelEvent) => {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                const rect = skillsSection.getBoundingClientRect();
                const isInSkillsSection = rect.top <= 0 && rect.bottom >= window.innerHeight;
                
                if (isInSkillsSection) {
                    // Skills 섹션 내에서 스크롤할 때
                    if (e.deltaY > 0) {
                        // 아래로 스크롤 - Project로 이동 (나중에 구현)
                        e.preventDefault();
                    } else if (e.deltaY < 0) {
                        // 위로 스크롤 - About으로 이동
                        e.preventDefault();
                        const aboutSection = document.getElementById('about');
                        if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                const rect = skillsSection.getBoundingClientRect();
                const isInSkillsSection = rect.top <= 0 && rect.bottom >= window.innerHeight;
                
                if (isInSkillsSection) {
                    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                        e.preventDefault();
                    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                        e.preventDefault();
                        const aboutSection = document.getElementById('about');
                        if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);
        
        // 초기 상태 확인
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div id="skills">
            <SkillsPresenter 
                skillCategories={skillCategories}
                showNavigation={showNavigation}
                onNavigate={handleNavigate}
                renderLevelDots={renderLevelDots}
                handleImageError={handleImageError}
            />
        </div>
    );
};

export default SkillsContainer;
