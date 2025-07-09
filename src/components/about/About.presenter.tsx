import * as S from './About.styled'
import { AboutPresenterProps } from './About.types'
import Navigation from '../common/Navigation/Navigation';
import { useState } from 'react';

export const AboutPresenter = ({ 
    questions, 
    isModalOpen, 
    selectedQuestion, 
    onQuestionClick, 
    onCloseModal,
    showNavigation,
    onNavigate
}: AboutPresenterProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return(
        <>
            <S.AboutSection>
                <S.AboutContent>
                    <S.LeftSection>
                        <S.ProfileImage src="/images/MyImage.jpg" alt="최현민 프로필" />
                    </S.LeftSection>
                    <S.RightSection>
                        <S.AboutTitle>About Me</S.AboutTitle>
                        <S.AboutDescription>
                            안녕하세요! 저는 프론트엔드 개발자 최현민입니다.
                            사용자 경험을 중요시하며, 깔끔하고 효율적인 코드를 작성하는 것을 좋아합니다.
                            React, TypeScript, Next.js 등의 기술 스택을 활용하여 
                            현대적이고 반응형 웹 애플리케이션을 개발하고 있습니다.
                        </S.AboutDescription>
                    </S.RightSection>
                </S.AboutContent>
                
                <S.QuestionSection>
                    <S.QuestionSectionTitle>Question</S.QuestionSectionTitle>
                    <S.QuestionContentAllBox>
                        {questions.map((item, idx) => (
                            <S.QuestionContentBox 
                                key={item.id}
                                onClick={() => onQuestionClick(item.question)}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {item.question}
                                {hoveredIndex === idx && (
                                    <S.Tooltip>Click!</S.Tooltip>
                                )}
                            </S.QuestionContentBox>
                        ))}
                    </S.QuestionContentAllBox>
                </S.QuestionSection>

                {isModalOpen && (
                    <S.ModalOverlay onClick={onCloseModal}>
                        <S.ModalContent onClick={(e) => e.stopPropagation()}>
                            <S.ModalHeader>
                                <S.ModalTitle>{selectedQuestion}</S.ModalTitle>
                                <S.ModalCloseButton onClick={onCloseModal}>×</S.ModalCloseButton>
                            </S.ModalHeader>
                            <S.ModalBody>
                                {questions.find(q => q.question === selectedQuestion)?.answer}
                            </S.ModalBody>
                        </S.ModalContent>
                    </S.ModalOverlay>
                )}
            </S.AboutSection>

            <Navigation 
                isVisible={showNavigation} 
                onNavigate={onNavigate}
            />
        </>
    )
}

export default AboutPresenter;