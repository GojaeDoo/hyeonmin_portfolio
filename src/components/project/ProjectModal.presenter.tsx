import React, { useEffect } from 'react';
import * as S from './Project.styled';
import { ProjectModalPresenterProps } from './ProjectModal.types';

export const ProjectModalPresenter: React.FC<ProjectModalPresenterProps> = ({ 
    project, 
    isOpen, 
    onClose, 
    onGithubClick, 
    onDemoClick 
}) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <S.ModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
            <S.ModalContent>
                <S.CloseButton onClick={onClose}>×</S.CloseButton>
                
                <S.ModalHeader>
                    <S.ModalTitle>{project.title}</S.ModalTitle>
                    <S.ModalPeriod>{project.period}</S.ModalPeriod>
                </S.ModalHeader>

                <S.ModalBody>
                    <S.ProjectDescription>
                        <S.ProjectImage src={project.image} alt={project.title + ' 이미지'} />
                        <h3>프로젝트 설명</h3>
                        <p>{project.detailedDescription || project.description}</p>
                        
                        <S.TechStackSection>
                            <h4>사용 기술</h4>
                            <S.TechList>
                                {project.techStack?.map((tech, index) => (
                                    <S.TechItem key={index}>{tech}</S.TechItem>
                                ))}
                            </S.TechList>
                        </S.TechStackSection>

                        {project.features && project.features.length > 0 && (
                            <S.FeaturesSection>
                                <h4>주요 기능</h4>
                                <S.FeaturesList>
                                    {project.features.map((feature, index) => (
                                        <S.FeatureItem key={index}>{feature}</S.FeatureItem>
                                    ))}
                                </S.FeaturesList>
                            </S.FeaturesSection>
                        )}

                        <S.LinksSection>
                            {project.githubLink && (
                                <S.ViewProjectButton onClick={onGithubClick}>
                                    GitHub
                                </S.ViewProjectButton>
                            )}
                            {project.demoLink && (
                                <S.ViewProjectButton onClick={onDemoClick}>
                                    WebSite
                                </S.ViewProjectButton>
                            )}
                        </S.LinksSection>
                    </S.ProjectDescription>
                </S.ModalBody>
            </S.ModalContent>
        </S.ModalOverlay>
    );
};

export default ProjectModalPresenter; 