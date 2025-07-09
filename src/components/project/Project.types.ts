export interface ProjectData {
    title: string;
    period: string;
    description: string;
    techStack: string[];
    image?: string;
    link?: string;
}

export interface ProjectPresenterProps {
    projects: ProjectData[];
} 