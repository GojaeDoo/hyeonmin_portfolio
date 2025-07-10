export interface Question {
    id: number;
    question: string;
    answer: string;
}

export interface AboutPresenterProps {
    questions: Question[];
    isModalOpen: boolean;
    selectedQuestion: string;
    hoveredIndex: number | null;
    onQuestionClick: (question: string) => void;
    onCloseModal: () => void;
    onMouseEnter: (index: number) => void;
    onMouseLeave: () => void;
    showNavigation: boolean;
    onNavigate: (section: string) => void;
}
