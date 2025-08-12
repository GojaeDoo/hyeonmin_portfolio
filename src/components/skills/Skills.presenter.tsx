import * as S from './Skills.styled';
import { SkillsPresenterProps } from './Skills.types';
import Navigation from '../common/Navigation/Navigation';

export const SkillsPresenter = ({ skillCategories, showNavigation, onNavigate, handleImageError }: SkillsPresenterProps) => {
    return (
        <>
            <S.SkillsSection>
                <S.SkillsContent>
                    <S.SkillsTitle>Skills</S.SkillsTitle>
                    <S.SkillsGrid>
                        {skillCategories.map((category) => (
                            <S.SkillCategory key={category.id}>
                                <S.CategoryTitle>{category.title}</S.CategoryTitle>
                                <S.SkillsList>
                                    {category.skills.map((skill) => (
                                        <S.SkillItem key={skill.id}>
                                            <S.SkillIcon 
                                                src={skill.icon} 
                                                alt={skill.name}
                                                onError={handleImageError}
                                            />
                                            <S.SkillName>{skill.name}</S.SkillName>
                                        </S.SkillItem>
                                    ))}
                                </S.SkillsList>
                            </S.SkillCategory>
                        ))}
                    </S.SkillsGrid>
                </S.SkillsContent>
            </S.SkillsSection>

            <Navigation 
                isVisible={showNavigation} 
                onNavigate={onNavigate}
            />
        </>
    );
};

export default SkillsPresenter;
