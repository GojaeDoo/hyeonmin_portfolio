'use client'

import { useEffect, useState } from 'react';
import AboutPresenter from "./About.presenter";
import { Question } from './About.types';

export const AboutContainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

    const questions: Question[] = [
        {
            id: 1,
            question: "Q.개발자가 된 이유가 무엇인가?",
            answer: `코딩을 처음 접했을 때, 단순한 코드 몇 줄이 바로 화면에 반영되는 게 재미있었습니다.
            작게 시작한 기능이 점점 형태를 갖춰가는 과정을 보면서 더 깊게 배우고 싶어졌고,
            그렇게 하나씩 만들어가는 즐거움이 저를 개발자의 길로 이끌었습니다.`
            
        },
        {
            id: 2,
            question: "Q.어떤 제품이나 서비스를 만들고 싶은 사람인가?",
            answer: `사용자가 "설명 없이도 감으로 쓸 수 있는" 웹 서비스를 만들고 싶습니다.
            복잡한 설명 없이도 자연스럽게 쓸 수 있는 UI와,
            이용하는데 불편하지 않고 필요한 정보를 빠르게 찾을 수 있는 구조를 갖춘 서비스를 목표로 하고 있습니다.`
        },
        {
            id: 3,
            question: "Q.어떤 가치관을 가지고 일을 하는 사람인가?",
            answer: `저는 '사용자와 함께 성장하는 개발'을 중요한 가치로 생각합니다.
            서비스를 이용하는 사람이 쉽게 이해하고 편리하게 사용할 수 있도록 고민하며, 
            동시에 팀원들과 지식을 공유하고 의견을 나누면서 함께 발전하는 과정을 중요하게 여깁니다.
            그래서 기능을 구현할 때는 사용자 경험을 먼저 고려하고, 모르는 부분은 솔직하게 질문하며 학습해 나가려고 합니다.`
        }
    ];

    const handleQuestionClick = (question: string) => {
        setSelectedQuestion(question);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedQuestion('');
    };

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleIconMouseEnter = (iconName: string) => {
        setHoveredIcon(iconName);
    };

    const handleIconMouseLeave = () => {
        setHoveredIcon(null);
    };

    return(
        <div id="about">
            <AboutPresenter 
                questions={questions}
                isModalOpen={isModalOpen}
                selectedQuestion={selectedQuestion}
                hoveredIndex={hoveredIndex}
                onQuestionClick={handleQuestionClick}
                onCloseModal={closeModal}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                hoveredIcon={hoveredIcon}
                onIconMouseEnter={handleIconMouseEnter}
                onIconMouseLeave={handleIconMouseLeave}
            />
        </div>
    )
}

export default AboutContainer;