export interface Question {
    id: number;
    question: string;
    answer: string;
}

export interface AboutPresenterProps {
    questions: Question[];
    isModalOpen: boolean;
    selectedQuestion: string;
    onQuestionClick: (question: string) => void;
    onCloseModal: () => void;
    showNavigation: boolean;
    onNavigate: (section: string) => void;
}
