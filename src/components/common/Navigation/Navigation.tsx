import * as S from './Navigation.styled';
import { useState } from 'react';

interface NavigationProps {
    isVisible: boolean;
    onNavigate: (section: string) => void;
}

export const Navigation = ({ isVisible, onNavigate }: NavigationProps) => {
    const [open, setOpen] = useState(false);
    if (!isVisible) return null;

    return (
        <S.NavigationBar>
            <S.NavigationToggle onClick={() => setOpen(v => !v)}>
                <S.ToggleIcon $open={open} />
            </S.NavigationToggle>
            <S.NavigationMenu $open={open}>
                <S.NavigationButton onClick={() => { setOpen(false); onNavigate('about'); }}>
                    About
                </S.NavigationButton>
                <S.NavigationButton onClick={() => { setOpen(false); onNavigate('skill'); }}>
                    Skill
                </S.NavigationButton>
                <S.NavigationButton onClick={() => { setOpen(false); onNavigate('career'); }}>
                    Career
                </S.NavigationButton>
                <S.NavigationButton onClick={() => { setOpen(false); onNavigate('project'); }}>
                    Project
                </S.NavigationButton>
            </S.NavigationMenu>
        </S.NavigationBar>
    );
};

export default Navigation; 