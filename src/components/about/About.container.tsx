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
            question: "Q.개발자가 된 계기가 무엇인지?",
            answer: "처음에는 단순한 호기심으로 프로그래밍을 시작했습니다. 하지만 첫 번째 웹사이트를 만들어본 후, 제가 작성한 코드로 화면이 변화하는 것에 신기함과 재미를 느꼈고 제가 만든 이 웹사이트로 사람들이 즐겁게 사용할 수 있게 하고 싶다는 생각이 들었습니다."
        },
        {
            id: 2,
            question: "Q.왜 프론트엔드 개발자가 되고 싶었는지?",
            answer: "사용자와 직접 소통하는 인터페이스를 만드는 것이 매력적이었습니다. 사용자 경험을 개선함에 있어서 시각적으로 아름다운 웹사이트를 만드는 과정에서 큰 성취감과 쾌감을 느껴서 프론트엔드 개발자가 되고 싶다고 생각했습니다."
        },
        {
            id: 3,
            question: "Q.어떤 개발자가 되고 싶나?",
            answer: "단순히 기능을 구현하는 개발자가 아닌, 사용자가 정말 필요로 하는 것을 파악하고 개선 및 구현하는 개발자가 되고싶고, 또한 지속적으로 새로운 기술을 학습하고, 팀과 함께 성장하는 개발자가 되고 싶습니다."
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