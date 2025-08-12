'use client'

import { useEffect, useState } from 'react';
import SkillsPresenter from "./Skills.presenter";
import { SkillCategory } from './Skills.types';

export const SkillsContainer = () => {
    const [showNavigation, setShowNavigation] = useState(false);

    const skillCategories: SkillCategory[] = [
        {
            id: 1,
            title: "Frontend",
            skills: [
                { id: 1, name: "HTML5", icon: "/images/icon/HTML.svg" },
                { id: 2, name: "CSS3", icon: "/images/icon/CSS.svg" },
                { id: 3, name: "JavaScript", icon: "/images/icon/JavaScript.svg" },
                { id: 4, name: "TypeScript", icon: "/images/icon/TypeScript.svg" },
                { id: 5, name: "React", icon: "/images/icon/React.svg" },
                { id: 6, name: "Next.js",icon: "/images/icon/NextJS-Light.svg" },
                { id: 7, name: "Redux", icon: "/images/icon/Redux.svg" },
                { id: 8, name: "Styled Components",icon: "/images/icon/StyledComponents.svg" }
            ]
        },
        {
            id: 2,
            title: "Backend",
            skills: [
                { id: 9, name: "Node.js", icon: "/images/icon/NodeJS.svg" },
                { id: 10, name: "PostgreSQL",  icon: "/images/icon/PostgreSQL-Light.svg" },
                { id: 11, name: "GraphQL",icon: "/images/icon/GraphQL-Light.svg" }
            ]
        },
        {
            id: 3,
            title: "Tools",
            skills: [
                { id: 12, name: "Git",icon: "/images/icon/Git.svg" },
                { id: 13, name: "GitHub",  icon: "/images/icon/Github-Light.svg" },
                { id: 14, name: "VS Code",icon: "/images/icon/VSCode.svg" },
                { id: 15, name: "Figma", icon: "/images/icon/Figma.png" },
                { id: 16, name: "Postman", icon: "/images/icon/Postman.svg" },
                { id: 17, name: "Axios", icon: "/images/icon/Azios.svg" }
            ]
        }
    ];

    const handleNavigate = (section: string) => {
        const sectionId = section === 'about' ? 'about' : section === 'skill' ? 'skills' : section;
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.style.display = 'none';
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

        window.addEventListener('scroll', handleScroll);
        
        // 초기 상태 확인
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="skills">
            <SkillsPresenter 
                skillCategories={skillCategories}
                showNavigation={showNavigation}
                onNavigate={handleNavigate}
                handleImageError={handleImageError}
            />
        </div>
    );
};

export default SkillsContainer;
