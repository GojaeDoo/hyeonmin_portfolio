import { useEffect, useState } from 'react';
import AboutPresenter from "./About.presenter";
import { Question } from './About.types';

export const AboutContainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [showNavigation, setShowNavigation] = useState(false);

    const questions: Question[] = [
        {
            id: 1,
            question: "Q.개발자가 된 계기가 무엇인지?",
            answer: "사용자와 직접 소통하는 인터페이스를 만드는 것이 매력적이었습니다. 사용자 경험을 개선하고 시각적으로 아름다운 웹사이트를 만드는 과정에서 큰 성취감을 느낍니다. 또한 실시간으로 결과를 확인할 수 있어 즉각적인 피드백을 받을 수 있다는 점이 프론트엔드 개발의 가장 큰 장점이라고 생각합니다."
        },
        {
            id: 2,
            question: "Q.왜 프론트엔드 개발자가 되고 싶었는지?",
            answer: "처음에는 단순한 호기심으로 프로그래밍을 시작했습니다. 하지만 첫 번째 웹사이트를 만들어본 후, 코드 한 줄로 화면이 변화하는 것에 매료되었습니다. 특히 사용자들이 제가 만든 서비스를 사용하는 모습을 보면서, 기술로 사람들의 삶을 더 편리하게 만들 수 있다는 것을 깨달았습니다."
        },
        {
            id: 3,
            question: "Q.어떤 개발자가 되고 싶나?",
            answer: "사용자 중심의 사고를 가진 개발자가 되고 싶습니다. 단순히 기능을 구현하는 것이 아니라, 사용자가 정말 필요로 하는 것을 파악하고 직관적이고 편리한 인터페이스를 제공하는 개발자가 되고 싶습니다. 또한 지속적으로 새로운 기술을 학습하고, 팀과 함께 성장하는 개발자가 되고 싶습니다."
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

    const handleNavigate = (section: string) => {
        const sectionId = section === 'about' ? 'about' : section === 'skill' ? 'skills' : section;
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
                setShowNavigation(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // 초기 상태 확인
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div id="about">
            <AboutPresenter 
                questions={questions}
                isModalOpen={isModalOpen}
                selectedQuestion={selectedQuestion}
                onQuestionClick={handleQuestionClick}
                onCloseModal={closeModal}
                showNavigation={showNavigation}
                onNavigate={handleNavigate}
            />
        </div>
    )
}

export default AboutContainer;