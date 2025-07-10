'use client'

import React, { useEffect } from 'react';
import ProjectModalPresenter from './ProjectModal.presenter';
import { ProjectModalContainerProps } from './ProjectModal.types';

export const ProjectModalContainer: React.FC<ProjectModalContainerProps> = ({ 
    project, 
    isOpen, 
    onClose 
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

    if (!project) return null;

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