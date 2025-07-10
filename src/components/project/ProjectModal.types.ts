import { ProjectData } from './Project.types';

export interface ProjectModalPresenterProps {
    project: ProjectData;
    isOpen: boolean;
    onClose: () => void;
    onGithubClick: () => void;
    onDemoClick: () => void;
    onOverlayClick: (e: React.MouseEvent) => void;
}

export interface ProjectModalContainerProps {
    project: ProjectData | null;
    isOpen: boolean;
    onClose: () => void;
} 