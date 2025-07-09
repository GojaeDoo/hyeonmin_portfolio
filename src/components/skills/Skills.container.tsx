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
                { id: 1, name: "HTML5", level: 5, icon: "/images/icon/HTML.svg" },
                { id: 2, name: "CSS3", level: 5, icon: "/images/icon/CSS.svg" },
                { id: 3, name: "JavaScript", level: 5, icon: "/images/icon/JavaScript.svg" },
                { id: 4, name: "TypeScript", level: 4, icon: "/images/icon/TypeScript.svg" },
                { id: 5, name: "React", level: 5, icon: "/images/icon/React.svg" },
                { id: 6, name: "Next.js", level: 4, icon: "/images/icon/NextJS-Light.svg" },
                { id: 7, name: "Redux", level: 4, icon: "/images/icon/Redux.svg" },
                { id: 8, name: "Styled Components", level: 4, icon: "/images/icon/StyledComponents.svg" }
            ]
        },
        {
            id: 2,
            title: "Backend",
            skills: [
                { id: 9, name: "Node.js", level: 3, icon: "/images/icon/NodeJS.svg" },
                { id: 10, name: "PostgreSQL", level: 3, icon: "/images/icon/PostgreSQL-Light.svg" },
                { id: 11, name: "GraphQL", level: 3, icon: "/images/icon/GraphQL-Light.svg" }
            ]
        },
        {
            id: 3,
            title: "Tools",
            skills: [
                { id: 12, name: "Git", level: 4, icon: "/images/icon/Git.svg" },
                { id: 13, name: "GitHub", level: 4, icon: "/images/icon/Github-Light.svg" },
                { id: 14, name: "VS Code", level: 5, icon: "/images/icon/VSCode.svg" },
                { id: 15, name: "Figma", level: 3, icon: "/images/icon/Figma.png" },
                { id: 16, name: "Postman", level: 3, icon: "/images/icon/Postman.svg" },
                { id: 17, name: "Axios", level: 4, icon: "/images/icon/Azios.svg" }
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

    const renderLevelDots = (level: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: index < level ? '#4CAF50' : '#ddd',
                    margin: '0 2px'
                }}
            />
        ));
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
                renderLevelDots={renderLevelDots}
                handleImageError={handleImageError}
            />
        </div>
    );
};

export default SkillsContainer;
