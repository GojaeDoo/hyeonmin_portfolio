import * as S from './Navigation.styled';

interface NavigationProps {
    isVisible: boolean;
    onNavigate: (section: string) => void;
}

export const Navigation = ({ isVisible, onNavigate }: NavigationProps) => {
    if (!isVisible) return null;

    return (
        <S.NavigationBar>
            <S.NavigationToggle>
                <S.ToggleIcon />
            </S.NavigationToggle>
            <S.NavigationMenu>
                <S.NavigationButton onClick={() => onNavigate('about')}>
                    About
                </S.NavigationButton>
                <S.NavigationButton onClick={() => onNavigate('skill')}>
                    Skill
                </S.NavigationButton>
                <S.NavigationButton onClick={() => onNavigate('project')}>
                    Project
                </S.NavigationButton>
            </S.NavigationMenu>
        </S.NavigationBar>
    );
};

export default Navigation; 