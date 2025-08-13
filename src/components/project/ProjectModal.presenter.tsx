import React from 'react';
import * as S from './Project.styled';
import { ProjectModalPresenterProps } from './ProjectModal.types';

export const ProjectModalPresenter: React.FC<ProjectModalPresenterProps> = ({ 
    project, 
    isOpen, 
    onClose, 
    onGithubClick, 
    onDemoClick,
    onOverlayClick
}) => {
    if (!project) return null;

    return (
        <S.ModalOverlay isOpen={isOpen} onClick={onOverlayClick}>
            <S.ModalContent>
                <S.CloseButton onClick={onClose}>×</S.CloseButton>
                
                <S.ModalHeader>
                    <S.ModalTitle>{project.title}</S.ModalTitle>
                    <S.ModalPeriod>{project.period}</S.ModalPeriod>
                </S.ModalHeader>

                <S.ModalBody>
                    <S.ProjectDescription>
                        <S.ProjectImage src={project.image} alt={project.title + ' 이미지'} />
                        <S.ModalSubTitle>프로젝트 설명</S.ModalSubTitle>
                        <p>{project.detailedDescription}</p>
                        <S.ModalBar />
                        
                        <S.TechStackSection>
                            <S.ModalSubTitle>사용 기술</S.ModalSubTitle>
                            <S.TechList>
                                {project.techStack?.map((tech, index) => (
                                    <S.TechItem key={index}>{tech}</S.TechItem>
                                ))}
                            </S.TechList>
                        </S.TechStackSection>
                        {project.features && project.features.length > 0 && (
                            <S.FeaturesSection>
                                <S.ModalSubTitle>주요 기능</S.ModalSubTitle>
                                <S.FeaturesList>
                                    {project.features.map((feature, index) => (
                                        <S.FeatureItem key={index}>{feature}</S.FeatureItem>
                                    ))}
                                </S.FeaturesList>
                            </S.FeaturesSection>
                        )}
                        
                        {project.troubleShooting && project.troubleShooting.length > 0 && (
                            <S.TroubleShootingSection>
                                <S.ModalSubTitle>도전 과제</S.ModalSubTitle>
                                {project.troubleShooting.map((item, index) => (
                                    <S.ChallengeItem key={index}>
                                        <S.ChallengeContent>
                                            <S.ChallengeText>{index+1}. {item.challenge}</S.ChallengeText>
                                            <S.SolutionContent>
                                                {item.solution}
                                            </S.SolutionContent>
                                            {item.reason && (
                                                <S.ReasonContent>
                                                    <S.ReasonLabel>채택이유</S.ReasonLabel>
                                                    <S.ReasonText dangerouslySetInnerHTML={{ __html: item.reason }} />
                                                </S.ReasonContent>
                                            )}
                                        </S.ChallengeContent>
                                    </S.ChallengeItem>
                                ))}
                            </S.TroubleShootingSection>
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