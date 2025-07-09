export interface Skill {
    id: number;
    name: string;
    icon: string;
    level: number; // 1-5 레벨
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
    renderLevelDots: (level: number) => React.ReactNode;
    handleImageError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
