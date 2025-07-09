import styled, { keyframes, css } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ProjectSection = styled.section`
    min-height: 100vh;
    padding: 80px 20px;
    background: #212121;
    color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ProjectTitle = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: #f5f5f5;
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-family: 'Orbitron', 'Rajdhani', sans-serif;
    @media (max-width: 768px) {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        margin-top: 2.5rem;
    }
    @media (max-width: 480px) {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        margin-top: 1.5rem;
    }
`;

export const ProjectGrid = styled.div`
    width: 100%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 36px;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 18px;
    }
`;

export const ProjectCard = styled.div<{ animate?: boolean; delay?: number }>`
    background: #232323;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.12);
    padding: 32px 28px 24px 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.5s, transform 0.5s;
    ${({ animate, delay }) =>
      animate && css`
        opacity: 1;
        transform: translateY(0);
        animation: ${fadeInUp} 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
        animation-delay: ${delay || 0}s;
      `}
    @media (max-width: 600px) {
        padding: 16px 10px 12px 10px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    max-width: 320px;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 18px;
    background: #181818;
    @media (max-width: 600px) {
        height: 120px;
        border-radius: 8px;
        margin-bottom: 10px;
    }
`;

export const ProjectTitleText = styled.h3`
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #fff;
`;

export const ProjectPeriod = styled.div`
    font-size: 1rem;
    color: #b0b0b0;
    margin-bottom: 8px;
`;

export const ProjectDesc = styled.p`
    font-size: 1.05rem;
    color: #e0e0e0;
    margin-bottom: 10px;
`;

export const TechStackList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px;
`;

export const TechStack = styled.span`
    background: #333;
    color: #fff;
    font-size: 0.92rem;
    padding: 4px 12px;
    border-radius: 14px;
    font-weight: 500;
    margin: 2px 0;
    @media (max-width: 600px) {
        font-size: 0.8rem;
        padding: 3px 8px;
        border-radius: 10px;
    }
`;

export const ProjectLink = styled.a`
    margin-top: 8px;
    color: #7ecfff;
    font-size: 1rem;
    text-decoration: underline;
    &:hover {
        color: #4db3fa;
    }
`; 