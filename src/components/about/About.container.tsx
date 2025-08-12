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
            question: "Q.어떤 문제를 해결해 왔던 엔지니어인가?",
            answer: `가장 많이 부딪힌 건, UI가 실제 사용자 환경에서 기대한 대로 동작하지 않을 때였습니다. 
            예를 들어, 상태 업데이트가 의도한 타이밍에 반영되지 않아 렌더링이 꼬이거나, 비동기 데이터 처리 과정에서 화면이 깜빡이거나 멈추는 이슈가 생기기도 했습니다. 
            이런 문제들을 겪으면서 React의 상태 관리, 렌더링 흐름, 컴포넌트 구조를 더 이해하게 되었고, useEffect나 custom hook 등을 활용해 문제를 해결하는 경험을 쌓아왔습니다. 
            아직 부족한 점도 많지만, 문제를 놓치지 않고 끝까지 파고들며 해결해 나가는 과정 자체를 즐기고 있습니다.`
        },
        {
            id: 2,
            question: "Q.어떤 제품이나 서비스를 만들고 싶은 사람인가?",
            answer: `사용자가 "설명 없이도 감으로 쓸 수 있는" 웹 서비스를 만들고 싶습니다.
            개발을 처음 시작했을 때, 잘 만들어진 UI 하나가 얼마나 큰 도움을 주는지 직접 느낀 적이 많습니다. 
            그 경험 덕분에, 디자인보다는 기능에만 집중하던 초반에서 벗어나, 지금은 사용자 흐름과 인터페이스 구성에도 관심을 가지고 개발하고있습니다.
            앞으로는 정보를 명확하게 전달하고, 사용자의 시간을 아껴주는 인터페이스를 만드는 프론트엔드 개발자가 되고 싶습니다.`
        },
        {
            id: 3,
            question: "Q.어떤 가치관을 가지고 일을 하는 사람인가?",
            answer: `저는 "내가 만든 기능이 사용자에게 어떤 영향을 줄까?"를 먼저 생각하고, 최대한 깔끔하고 예측 가능한 코드를 작성하려고 노력합니다.
                    또, 이해되지 않는 부분을 넘기지 않고, 관련 문서를 찾아보거나 작은 테스트 코드를 작성해보며 스스로 납득한 뒤에 다음으로 넘어가는 습관을 들이고있습니다.
                    이런 태도와 노력이 제가 꾸준히 성장하는 데 중요한 밑바탕이 된다고 생각하기에 끊임없이 노력하겠습니다..`
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