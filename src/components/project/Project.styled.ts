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
    cursor: pointer;
    gap: 36px;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 18px;
    }
`;

export const ProjectCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'animate' && prop !== 'delay'
})<{ animate?: boolean; delay?: number }>`
    background: #232323;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.12);
    padding: 32px 28px 24px 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.5s, transform 0.5s, filter 0.3s ease, transform 0.3s ease;
    filter: blur(2px);
    transform: translateY(40px) scale(0.98);
    
    ${({ animate, delay }) =>
      animate && css`
        opacity: 1;
        transform: translateY(0) scale(0.98);
        animation: ${fadeInUp} 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
        animation-delay: ${delay || 0}s;
      `}
    
    &:hover {
        filter: blur(0px);
        transform: translateY(0) scale(1);
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (max-width: 600px) {
        padding: 16px 10px 12px 10px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.10);
        
        &:hover {
            box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
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
    cursor: pointer;
    &:hover {
        color: #4db3fa;
    }
`;

// 모달 관련 스타일
export const ModalOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    z-index: 10000;
    backdrop-filter: blur(4px);
`;

export const ModalBar = styled.div`
    width: 100%;
    height: 10px;
    background: #333;
    margin-bottom: 10px;
`;

export const ModalSubTitle = styled.h4`
    font-size: 1.5rem;
    font-weight: 700;
    color: #f5f5f5;
    margin-bottom: 12px;
    font-family: 'Orbitron', 'Rajdhani', sans-serif;
`;

export const ModalContent = styled.div`
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    max-width: 1500px; 
    width: 95%;
    max-height: 90vh; 
    position: relative;
    animation: modalFadeIn 0.3s ease-out;
    
    @keyframes modalFadeIn {
        from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
    
    @media (max-width: 768px) {
        width: 95%;
        max-height: 95vh;
        border-radius: 12px;
    }
    
    @media (max-width: 480px) {
        width: 98%;
        max-height: 98vh;
        border-radius: 10px;
    }
`;

export const ModalHeader = styled.div`
    padding: 24px 32px 16px 32px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    @media (max-width: 768px) {
        padding: 20px 24px 12px 24px;
    }
    
    @media (max-width: 480px) {
        padding: 16px 20px 10px 20px;
    }
`;

export const ModalTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    color: #f5f5f5;
    margin: 0 0 8px 0;
    font-family: 'Orbitron', 'Rajdhani', sans-serif;
    
    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.4rem;
    }
`;

export const ModalPeriod = styled.div`
    font-size: 1rem;
    color: #b0b0b0;
    margin-bottom: 16px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: #b0b0b0;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    transition: all 0.2s ease;
    
    &:hover {
        color: #f5f5f5;
        background: rgba(255, 255, 255, 0.1);
    }
    
    @media (max-width: 768px) {
        top: 16px;
        right: 16px;
        font-size: 1.3rem;
    }
`;

export const ModalBody = styled.div`
    padding: 24px 32px;
    max-height: 70vh;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        width: 0px;
        display: none;
    }
    
    &::-webkit-scrollbar-track {
        display: none;
    }
    
    &::-webkit-scrollbar-thumb {
        display: none;
    }
    
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    @media (max-width: 768px) {
        padding: 20px 24px;
        max-height: 65vh;
    }
    
    @media (max-width: 480px) {
        padding: 16px 20px;
        max-height: 60vh;
    }
`;

export const ModalImage = styled.img`
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 24px;
    background: #181818;
    
    @media (max-width: 768px) {
        max-height: 200px;
        border-radius: 8px;
        margin-bottom: 20px;
    }
`;

export const ModalDescription = styled.p`
    font-size: 1.1rem;
    color: #e0e0e0;
    line-height: 1.6;
    margin-bottom: 24px;
    
    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 20px;
    }
`;

export const ModalSection = styled.div`
    margin-bottom: 24px;
    
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

export const ModalSectionTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    color: #f5f5f5;
    margin-bottom: 12px;
    font-family: 'Inter', sans-serif;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
        margin-bottom: 10px;
    }
`;

export const ModalList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ModalListItem = styled.li`
    font-size: 1rem;
    color: #d0d0d0;
    line-height: 1.5;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
    
    &::before {
        content: '•';
        color: #7ecfff;
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    @media (max-width: 768px) {
        font-size: 0.95rem;
        margin-bottom: 6px;
    }
`;

export const ModalTechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
    
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

export const ModalTechTag = styled.span`
    background: #333;
    color: #fff;
    font-size: 0.9rem;
    padding: 6px 12px;
    border-radius: 16px;
    font-weight: 500;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
        padding: 4px 10px;
        border-radius: 12px;
    }
`;

export const ModalLinks = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 12px;
        margin-top: 20px;
        padding-top: 20px;
    }
`;

export const ModalLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: linear-gradient(135deg, #7ecfff 0%, #4db3fa 100%);
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(126, 207, 255, 0.3);
    }
    
    @media (max-width: 768px) {
        padding: 10px 16px;
        font-size: 0.9rem;
    }
`;

export const TroubleShootingSection = styled.div`
    margin : 50px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
`;

export const TroubleShootingList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const TroubleShootingItem = styled.li`
    font-size: 1rem;
    color: #d0d0d0;
    line-height: 1.5;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
`;

export const ChallengeItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 24px;
    padding: 0;
    cursor: default;
`;

export const ChallengeContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ChallengeText = styled.p`
    display: flex;
    color: #f5f5f5;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
`;

export const SolutionContent = styled.div`
    display: flex;
    color: #7ecfff;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-left: 8px;
    
    &::before {
        content: '↳ ';
        color: #7ecfff;
        font-weight: bold;
        margin-right: 8px;
    }
`;

export const ReasonContent = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 8px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    
    strong {
        color: #4db3fa;
        font-weight: 600;
    }
    
    span {
        color: #7ecfff;
        font-weight: 500;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 12px;
        padding: 16px;
    }
    
    @media (max-width: 480px) {
        gap: 10px;
        padding: 14px;
    }
`;

export const ReasonLabel = styled.div`
    color: #4db3fa;
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    min-width: 90px;
    flex-shrink: 0;
    padding-top: 2px;
    border-right: 2px solid #555;
    
    @media (max-width: 768px) {
        min-width: auto;
        border-right: none;
        border-bottom: 2px solid #555;
        padding-bottom: 8px;
        padding-top: 0;
        font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.8rem;
        padding-bottom: 6px;
    }
`;

export const ReasonText = styled.div`
    flex: 1;
    color: #a0a0a0;
    font-size: 0.85rem;
    line-height: 1.4;
    text-align: left;
    
    @media (max-width: 768px) {
        font-size: 0.9rem;
        line-height: 1.5;
    }
    
    @media (max-width: 480px) {
        font-size: 0.85rem;
    }
`;

export const ProjectDescription = styled.div`
    color: #e0e0e0;
    
    h3 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #f5f5f5;
        margin-bottom: 16px;
        font-family: 'Inter', sans-serif;
    }
    
    p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 24px;
        color: #d0d0d0;
    }
    
    @media (max-width: 768px) {
        h3 {
            font-size: 1.2rem;
            margin-bottom: 12px;
        }
        
        p {
            font-size: 1rem;
            margin-bottom: 20px;
        }
    }
`;

export const TechStackSection = styled.div`
    margin : 50px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

export const TechList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const TechItem = styled.span`
    background: #333;
    color: #fff;
    font-size: 0.9rem;
    padding: 6px 12px;
    border-radius: 16px;
    font-weight: 500;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
        padding: 4px 10px;
        border-radius: 12px;
    }
`;

export const ViewProjectButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: linear-gradient(135deg, #000000 0%, #000000 100%);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        padding: 10px 16px;
        font-size: 0.9rem;
    }
`;

export const FeaturesSection = styled.div`
    margin : 50px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

export const FeaturesList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const FeatureItem = styled.li`
    font-size: 1rem;
    color: #d0d0d0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    line-height: 1.5;
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
    
    &::before {
        content: '•';
        color: #7ecfff;
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    @media (max-width: 768px) {
        font-size: 0.95rem;
        margin-bottom: 6px;
    }
`;

export const LinksSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin : 24px 0;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
        flex-direction: row;
        gap: 10px;
        margin-top: 20px;
    }
`;

export const ProjectReflectionSection = styled.div`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
`;

export const ReflectionItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 24px;
    padding: 0;
    cursor: default;
    
    &:last-child {
        margin-bottom: 0;
    }
    
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

export const ReflectionContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ReflectionTitle = styled.p`
    display: flex;
    color: #f5f5f5;
    font-weight: 500;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
`;

export const ReflectionText = styled.div`
    color: #a0a0a0;
    font-size: 0.85rem;
    line-height: 1.4;
    text-align: left;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    width: 100%;
    font-family: 'Inter', sans-serif;
    
    strong {
        color: #4db3fa;
        font-weight: 600;
    }
    
    @media (max-width: 768px) {
        font-size: 0.9rem;
        line-height: 1.5;
    }
    
    @media (max-width: 480px) {
        font-size: 0.85rem;
    }
`;