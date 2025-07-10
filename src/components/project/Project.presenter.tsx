import * as S from './Project.styled';
import { ProjectPresenterProps } from './Project.types';
import React, { useRef } from 'react';
import Navigation from '../common/Navigation/Navigation';
import ProjectModalContainer from './ProjectModal.container';

export const ProjectPresenter: React.FC<ProjectPresenterProps> = ({ 
    projects, 
    visible, 
    selectedProject, 
    isModalOpen, 
    onProjectClick, 
    onCloseModal, 
    onNavigate 
}) => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
                        data-project-card
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
                        <S.ProjectLink onClick={() => onProjectClick(project)}>
                            더보기
                        </S.ProjectLink>
                    </S.ProjectCard>
                ))}
            </S.ProjectGrid>
            <Navigation isVisible={true} onNavigate={onNavigate} />
            
            <ProjectModalContainer
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={onCloseModal}
            />
        </S.ProjectSection>
    );
};

export default ProjectPresenter; 