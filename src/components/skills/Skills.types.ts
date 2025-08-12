export interface Skill {
    id: number;
    name: string;
    icon: string;
}

export interface SkillCategory {
    id: number;
    title: string;
    skills: Skill[];
}

export interface SkillsPresenterProps {
    skillCategories: SkillCategory[];
    showNavigation: boolean;
    onNavigate: (section: string) => void;
    handleImageError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
