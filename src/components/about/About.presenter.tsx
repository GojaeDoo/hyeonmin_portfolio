import React from 'react';
import Image from 'next/image';
import * as S from './About.styled'
import { AboutPresenterProps } from './About.types'
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export const AboutPresenter = ({ 
    questions, 
    isModalOpen, 
    selectedQuestion, 
    hoveredIndex,
    onQuestionClick, 
    onCloseModal,
    onMouseEnter,
    onMouseLeave,
    hoveredIcon,
    onIconMouseEnter,
    onIconMouseLeave
}: AboutPresenterProps) => {
    return(
        <>
            <S.AboutSection>
                <S.AboutContent>
                    <S.ContentSection>
                        <S.AboutTitle>About Me</S.AboutTitle>
                        <S.AboutDescription>
                            안녕하세요! 프론트엔드 개발자 최현민입니다.
                            <br />
                            최고의 개발자가 되기 위해 끈질기게 노력하겠습니다!
                        </S.AboutDescription>
                        <S.AboutIconsContainer>
                            <S.AboutIcon
                                onMouseEnter={() => onIconMouseEnter('github')}
                                onMouseLeave={onIconMouseLeave}
                                onClick={() => window.open('https://github.com/GojaeDoo', '_blank')}
                                style={{ cursor: 'pointer' }}
                            >
                                {React.createElement(FaGithub as any, { size: 36, color: "#ffffff" })}
                                {hoveredIcon === 'github' && (
                                    <S.IconTooltip className="visible">
                                        GitHub 프로필 보기
                                    </S.IconTooltip>
                                )}
                            </S.AboutIcon>
                            <S.AboutIcon
                                onMouseEnter={() => onIconMouseEnter('email')}
                                onMouseLeave={onIconMouseLeave}
                            >
                                {React.createElement(FaEnvelope as any, { size: 36, color: "#ffffff" })}
                                {hoveredIcon === 'email' && (
                                    <S.IconTooltip className="visible">
                                        minchoi9979@naver.com
                                    </S.IconTooltip>
                                )}
                            </S.AboutIcon>
                            <S.AboutIcon
                                onMouseEnter={() => onIconMouseEnter('phone')}
                                onMouseLeave={onIconMouseLeave}
                            >
                                {React.createElement(FaPhone as any, { size: 36, color: "#ffffff" })}
                                {hoveredIcon === 'phone' && (
                                    <S.IconTooltip className="visible">
                                        010-8623-0775
                                    </S.IconTooltip>
                                )}
                            </S.AboutIcon>
                        </S.AboutIconsContainer>
                    </S.ContentSection>
                </S.AboutContent>
                
                <S.QuestionSection>
                    <S.QuestionSectionTitle>Question</S.QuestionSectionTitle>
                    <S.QuestionContentAllBox>
                        {questions.map((item, idx) => (
                            <S.QuestionContentBox 
                                key={item.id}
                                onClick={() => onQuestionClick(item.question)}
                                onMouseEnter={() => onMouseEnter(idx)}
                                onMouseLeave={onMouseLeave}
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


        </>
    )
}

export default AboutPresenter;