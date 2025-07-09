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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SkillsSection = styled.section`
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
    overflow: visible;
    padding-bottom: 0;
    margin-bottom: 0;
`;

export const SkillsContent = styled.div`
    max-width: 1200px;
    width: 100%;
    animation: ${fadeInUp} 1s ease-out;
    overflow: visible;
    padding-bottom: 0;
    margin-bottom: 0;
`;

export const SkillsTitle = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: #f5f5f5;
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'Orbitron', 'Rajdhani', sans-serif;
    
    @media (max-width: 768px) {
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  overflow: visible;
  padding-bottom: 0;
  margin-bottom: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
`;

export const SkillCategory = styled.div`
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    animation: ${slideIn} 0.8s ease-out;
    
    @media (max-width: 768px) {
        padding: 1.5rem;
        border-radius: 12px;
    }
    
    @media (max-width: 480px) {
        padding: 1.2rem;
        border-radius: 10px;
    }
`;

export const CategoryTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 600;
    color: #f5f5f5;
    margin-bottom: 1.5rem;
    font-family: 'Orbitron', 'Rajdhani', sans-serif;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
`;

export const SkillsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    
    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.8rem;
    }
`;

export const SkillItem = styled.div`
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 0.7rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }
    
    @media (max-width: 480px) {
        padding: 0.4rem;
        border-radius: 6px;
    }
`;

export const SkillIcon = styled.img`
    width: 32px;
    height: 32px;
    margin-bottom: 0.4rem;
    
    @media (max-width: 768px) {
        width: 28px;
        height: 28px;
    }
    
    @media (max-width: 480px) {
        width: 20px;
        height: 20px;
        margin-bottom: 0.2rem;
    }
`;

export const SkillName = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: #e8e8e8;
    font-family: 'Inter', 'Roboto', sans-serif;
    margin-bottom: 0.2rem;
    
    @media (max-width: 480px) {
        font-size: 0.85rem;
    }
`;

export const SkillLevel = styled.div`
    display: flex;
    justify-content: center;
    gap: 2px;
    margin-top: 0.1rem;
    @media (max-width: 480px) {
        margin-top: 0;
    }
`;

export const LevelDot = styled.div<{ filled: boolean }>`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => props.filled ? '#4CAF50' : 'rgba(255, 255, 255, 0.2)'};
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
        width: 5px;
        height: 5px;
    }
    
    @media (max-width: 480px) {
        width: 4px;
        height: 4px;
    }
`;
