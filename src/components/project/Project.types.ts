export interface ProjectData {
    title: string;
    period: string;
    description: string;
    techStack: string[];
    image?: string;
    link?: string;
    detailedDescription?: string;
    features?: string[];
    githubLink?: string;
    demoLink?: string;
    troubleShooting?: Array<{ 
        challenge: string; 
        solution: string; 
        reason: string; 
    }>;
    projectReflection?: Array<{
        title: string;
        content: string;
    }>;
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
