import * as S from './Project.styled';
import { ProjectPresenterProps } from './Project.types';
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../common/Navigation/Navigation';

export const ProjectPresenter = ({ projects }: ProjectPresenterProps) => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visible, setVisible] = useState<boolean[]>(Array(projects.length).fill(false));

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        cardRefs.current.forEach((el, idx) => {
            if (!el) return;
            const observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisible(prev => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                        observer.disconnect();
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => { observers.forEach(o => o.disconnect()); };
    }, [projects.length]);

    // 네비게이션 항상 표시, 이동
    const showNavigation = true;
    const handleNavigate = (section: string) => {
        const sectionId = section === 'about' ? 'about' : section === 'skill' ? 'skills' : section;
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <S.ProjectSection id="project">
            <S.ProjectTitle>PROJECT</S.ProjectTitle>
            <S.ProjectGrid>
                {projects.map((project, idx) => (
                    <S.ProjectCard
                        key={project.title + idx}
                        ref={el => (cardRefs.current[idx] = el)}
                        animate={visible[idx]}
                        delay={0.1 * idx}
                    >
                        {project.image && <S.ProjectImage src={project.image} alt={project.title + ' 이미지'} />}
                        <S.ProjectTitleText>{project.title}</S.ProjectTitleText>
                        <S.ProjectPeriod>{project.period}</S.ProjectPeriod>
                        <S.ProjectDesc>{project.description}</S.ProjectDesc>
                        <S.TechStackList>
                            {project.techStack.map(tech => (
                                <S.TechStack key={tech}>{tech}</S.TechStack>
                            ))}
                        </S.TechStackList>
                        {project.link && (
                            <S.ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                                더보기
                            </S.ProjectLink>
                        )}
                    </S.ProjectCard>
                ))}
            </S.ProjectGrid>
            <Navigation isVisible={showNavigation} onNavigate={handleNavigate} />
        </S.ProjectSection>
    );
};

export default ProjectPresenter; 