import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutSection = styled.section`
    min-height: 100vh;
    background: #212121;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    
    @media (max-width: 768px) {
        padding: 1.5rem;
        justify-content: flex-start;
        padding-top: 3rem;
    }
    
    @media (max-width: 480px) {
        padding: 1rem;
        padding-top: 2rem;
    }
`;

export const AboutContent = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4rem;
    animation: ${fadeInUp} 1s ease-out;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2.5rem;
        text-align: center;
        max-width: 100%;
    }
    
    @media (max-width: 480px) {
        gap: 2rem;
    }
`;

export const QuestionSection = styled.div`
    width: 100%;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    
    @media (max-width: 768px) {
        margin-top: 3rem;
        gap: 2rem;
    }
    
    @media (max-width: 480px) {
        margin-top: 2.5rem;
        gap: 1.5rem;
    }
`;

export const QuestionSectionTitle = styled.h3`
    font-size: 2.2rem;
    font-weight: 600;
    color: #f5f5f5;
    font-family: 'Orbitron', 'Rajdhani', sans-serif;
    text-align: center;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const QuestionContentAllBox = styled.div`
    width: 100%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        max-width: 100%;
    }
    
    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

export const QuestionContentBox = styled.div`
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #e8e8e8;
    font-family: 'Inter', 'Roboto', sans-serif;
    transition: all 0.3s ease;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    
    &:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        padding: 1.5rem;
        font-size: 1rem;
        min-height: 100px;
        border-radius: 12px;
    }
    
    @media (max-width: 480px) {
        padding: 1.2rem;
        font-size: 0.95rem;
        min-height: 80px;
        border-radius: 10px;
    }
`;

export const Tooltip = styled.span`
  position: absolute;
  top: -38px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  padding: 10px 22px;
  border-radius: 32px 32px 32px 32px/22px 22px 32px 32px;
  font-size: 1.05rem;
  font-family: 'Orbitron', 'Inter', sans-serif;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 6px 24px 0 rgba(120,120,120,0.18), 0 0 0 8px rgba(255,255,255,0.18) inset;
  z-index: 10;
  opacity: 0.97;
  filter: blur(0.2px) drop-shadow(0 2px 8px rgba(180,180,180,0.10));
  animation: cloudFloat 2.2s cubic-bezier(0.4,0.8,0.6,1) infinite alternate, fadeInTooltip 0.18s ease;

  @keyframes fadeInTooltip {
    from { opacity: 0; transform: translateX(-50%) scale(0.9) translateY(10px); }
    to { opacity: 0.97; transform: translateX(-50%) scale(1) translateY(0); }
  }
  @keyframes cloudFloat {
    0% { transform: translateX(-50%) translateY(0) scale(1) rotate(-2deg); }
    50% { transform: translateX(-50%) translateY(-8px) scale(1.04) rotate(2deg); }
    100% { transform: translateX(-50%) translateY(0) scale(1) rotate(-2deg); }
  }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
    
    @media (max-width: 768px) {
        padding: 0.5rem;
        align-items: flex-start;
        padding-top: 2rem;
    }
    
    @media (max-width: 480px) {
        padding: 0.5rem;
        padding-top: 1rem;
    }
`;

export const ModalContent = styled.div`
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    max-width: 600px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
    animation: fadeInUp 0.3s ease-out;
    
    @media (max-width: 768px) {
        max-width: 100%;
        max-height: 90vh;
        border-radius: 12px;
    }
    
    @media (max-width: 480px) {
        max-height: 95vh;
        border-radius: 10px;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem 1rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    @media (max-width: 768px) {
        padding: 1.5rem 1.5rem 1rem 1.5rem;
    }
    
    @media (max-width: 480px) {
        padding: 1.2rem 1.2rem 0.8rem 1.2rem;
    }
`;

export const ModalTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 600;
    color: #f5f5f5;
    font-family: 'Orbitron', 'Rajdhani', sans-serif;
    margin: 0;
    
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.1rem;
    }
`;

export const ModalCloseButton = styled.button`
    background: none;
    border: none;
    color: #f5f5f5;
    font-size: 2rem;
    cursor: pointer;
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        font-size: 1.8rem;
        width: 35px;
        height: 35px;
    }
    
    @media (max-width: 480px) {
        font-size: 1.6rem;
        width: 32px;
        height: 32px;
    }
`;

export const ModalBody = styled.div`
    padding: 2rem;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #e8e8e8;
    font-family: 'Inter', 'Roboto', sans-serif;
    
    @media (max-width: 768px) {
        padding: 1.5rem;
        font-size: 1rem;
        line-height: 1.7;
    }
    
    @media (max-width: 480px) {
        padding: 1.2rem;
        font-size: 0.95rem;
        line-height: 1.6;
    }
`;

export const ContentSection = styled.div`
    flex: 1;
    max-width: 100%;
    
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const AboutTitle = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: #f5f5f5;
    margin-bottom: 2rem;
    font-family: 'Orbitron', 'Rajdhani', sans-serif;
    
    @media (max-width: 768px) {
        font-size: 2.2rem;
        margin-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }
`;

export const AboutDescription = styled.p`
    font-size: 1.2rem;
    line-height: 1.8;
    color: #e8e8e8;
    font-family: 'Inter', 'Roboto', sans-serif;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
        line-height: 1.7;
    }
    
    @media (max-width: 480px) {
        font-size: 1rem;
        line-height: 1.6;
    }
`;

export const AboutIconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 2rem;
`;

export const AboutIcon = styled.div`
    width: 36px;
    height: 36px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &:hover {
        transform: scale(1.1);
    }
    
    svg {
        width: 100%;
        height: 100%;
    }
`;

export const IconTooltip = styled.div`
    position: absolute;
    bottom: -45px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: #ffffff;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    font-family: 'Inter', sans-serif;
    white-space: nowrap;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    
    &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid rgba(0, 0, 0, 0.9);
    }
    
    &.visible {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(-5px);
    }
`;
