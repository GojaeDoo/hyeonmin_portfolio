import { ProjectData } from './Project.types';

export interface ProjectModalPresenterProps {
    project: ProjectData | null;
    isOpen: boolean;
    onClose: () => void;
    onGithubClick: () => void;
    onDemoClick: () => void;
}

export interface ProjectModalContainerProps {
    project: ProjectData | null;
    isOpen: boolean;
    onClose: () => void;
} 