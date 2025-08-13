'use client'

import React from 'react';
import ProjectModalPresenter from './ProjectModal.presenter';
import { ProjectModalContainerProps } from './ProjectModal.types';

export const ProjectModalContainer: React.FC<ProjectModalContainerProps> = ({
    project,
    isOpen,
    onClose
}) => {
    const handleGithubClick = () => {
        if (project?.githubLink) {
            window.open(project.githubLink, '_blank', 'noopener,noreferrer');
        }
    };

    const handleDemoClick = () => {
        if (project?.demoLink) {
            window.open(project.demoLink, '_blank', 'noopener,noreferrer');
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <ProjectModalPresenter
            project={project}
            isOpen={isOpen}
            onClose={onClose}
            onGithubClick={handleGithubClick}
            onDemoClick={handleDemoClick}
            onOverlayClick={handleOverlayClick}
        />
    );
};

export default ProjectModalContainer; 