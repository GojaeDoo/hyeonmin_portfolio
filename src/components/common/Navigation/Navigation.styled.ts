import styled from "styled-components";

export const NavigationBar = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
        bottom: 1.5rem;
        right: 1.5rem;
    }
    
    @media (max-width: 480px) {
        bottom: 1rem;
        right: 1rem;
    }
`;

export const NavigationToggle = styled.div`
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    
    &:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: scale(1.05);
    }
    
    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
    
    @media (max-width: 480px) {
        width: 45px;
        height: 45px;
    }
`;

export const NavigationMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    pointer-events: none;
    
    ${NavigationBar}:hover & {
        opacity: 1;
        transform: translateY(0);
        pointer-events: all;
    }
`;

export const NavigationButton = styled.button`
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 0.8rem 1.2rem;
    color: #f5f5f5;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: 'Inter', 'Roboto', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    white-space: nowrap;
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateX(-5px);
    }
    
    @media (max-width: 768px) {
        padding: 0.6rem 1rem;
        font-size: 0.8rem;
        border-radius: 10px;
    }
    
    @media (max-width: 480px) {
        padding: 0.5rem 0.8rem;
        font-size: 0.75rem;
        border-radius: 8px;
    }
`;

export const ToggleIcon = styled.div`
    width: 20px;
    height: 20px;
    position: relative;
    
    &::before,
    &::after {
        content: '';
        position: absolute;
        background: #f5f5f5;
        transition: all 0.3s ease;
    }
    
    &::before {
        width: 20px;
        height: 2px;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
    
    &::after {
        width: 2px;
        height: 20px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    
    @media (max-width: 768px) {
        width: 16px;
        height: 16px;
        
        &::before {
            width: 16px;
            height: 2px;
        }
        
        &::after {
            width: 2px;
            height: 16px;
        }
    }
    
    @media (max-width: 480px) {
        width: 14px;
        height: 14px;
        
        &::before {
            width: 14px;
            height: 2px;
        }
        
        &::after {
            width: 2px;
            height: 14px;
        }
    }
`; 