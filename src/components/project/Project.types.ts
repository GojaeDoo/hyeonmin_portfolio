export interface ProjectData {
    title: string;
    period: string;
    description: string;
    techStack: string[];
    image?: string;
    detailedDescription?: string;
    features?: string[];
    challenges?: string[];
    solutions?: string[];
    githubLink?: string;
    demoLink?: string;
}

export interface ProjectPresenterProps {
    projects: ProjectData[];
    visible: boolean[];
    selectedProject: ProjectData | null;
    isModalOpen: boolean;
    onProjectClick: (project: ProjectData) => void;
    onCloseModal: () => void;
    onNavigate: (section: string) => void;
}

export interface ProjectContainerProps {
    // 빈 인터페이스
}