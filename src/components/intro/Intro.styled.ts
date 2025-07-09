import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-300px) scale(0.8);
  }
  70% {
    opacity: 1;
    transform: translateX(30px) scale(1.1);
  }
  85% {
    opacity: 1;
    transform: translateX(-10px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(300px) translateY(-50%) scale(0.8);
  }
  70% {
    opacity: 1;
    transform: translateX(-30px) translateY(-50%) scale(1.1);
  }
  85% {
    opacity: 1;
    transform: translateX(10px) translateY(-50%) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(-50%) scale(1);
  }
`;

const slideInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150px) scale(0.8);
  }
  70% {
    opacity: 1;
    transform: translateY(-15px) scale(1.1);
  }
  85% {
    opacity: 1;
    transform: translateY(5px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const smokeEffect = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) translateY(0) rotate(0deg);
  }
  30% {
    opacity: 0.9;
    transform: scale(1.2) translateY(-15px) rotate(10deg);
  }
  60% {
    opacity: 0.6;
    transform: scale(1.5) translateY(-25px) rotate(-5deg);
  }
  100% {
    opacity: 0;
    transform: scale(2) translateY(-40px) rotate(15deg);
  }
`;

const smokeEffect2 = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) translateY(0) translateX(0);
  }
  30% {
    opacity: 0.5;
    transform: scale(0.9) translateY(-8px) translateX(-5px);
  }
  70% {
    opacity: 0.3;
    transform: scale(1.3) translateY(-18px) translateX(-10px);
  }
  100% {
    opacity: 0;
    transform: scale(1.6) translateY(-28px) translateX(-15px);
  }
`;

const smokeEffect3 = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) translateY(0) translateX(0);
  }
  25% {
    opacity: 0.4;
    transform: scale(0.7) translateY(-6px) translateX(5px);
  }
  65% {
    opacity: 0.2;
    transform: scale(1.1) translateY(-16px) translateX(8px);
  }
  100% {
    opacity: 0;
    transform: scale(1.4) translateY(-26px) translateX(12px);
  }
`;

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: #212121;
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.3;
    }
`;

export const IntroSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: #000;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

export const IntroBigText = styled.h1<{ animation: string; position: string }>`
    font-size: 8rem;
    font-weight: 900;
    color: #f5f5f5;
    letter-spacing: 0.3em;
    position: absolute;
    opacity: 0;
    animation: ${props => {
        switch(props.animation) {
            case 'left': return slideInLeft;
            case 'right': return slideInRight;
            default: return fadeInUp;
        }
    }} 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${props => {
        switch(props.animation) {
            case 'left': return '0s';
            case 'right': return '0.8s';
            default: return '0s';
        }
    }} forwards;
    font-family: 'Orbitron', 'Rajdhani', 'Arial Black', sans-serif;
    
    ${props => {
        switch(props.position) {
            case 'top-left':
                return `
                    top: 15%;
                    left: 10%;
                `;
            case 'middle-right':
                return `
                    top: 50%;
                    right: 10%;
                    transform: translateY(-50%);
                `;
            default:
                return '';
        }
    }}
    
    &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 0;
        width: 0;
        height: 4px;
        background: linear-gradient(90deg, #f5f5f5, #e0e0e0, #d0d0d0);
        border-radius: 2px;
        
    }
    
    &::before {
        content: '';
        position: absolute;
        bottom: -25px;
        left: 50%;
        width: 50px;
        height: 30px;
        background: radial-gradient(ellipse, rgba(245,245,245,0.4) 0%, rgba(245,245,245,0.2) 40%, rgba(245,245,245,0.1) 70%, transparent 100%);
        border-radius: 50%;
        transform: translateX(-50%);
        animation: ${smokeEffect} 1.2s ease-out ${props => {
            switch(props.animation) {
                case 'left': return '1.4s';
                case 'right': return '2.2s';
                default: return '1.4s';
            }
        }} both;
        pointer-events: none;
    }
    
    &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 45%;
        width: 40px;
        height: 25px;
        background: radial-gradient(ellipse, rgba(245,245,245,0.3) 0%, rgba(245,245,245,0.15) 50%, rgba(245,245,245,0.05) 80%, transparent 100%);
        border-radius: 50%;
        transform: translateX(-50%);
        animation: ${smokeEffect2} 1.4s ease-out ${props => {
            switch(props.animation) {
                case 'left': return '1.5s';
                case 'right': return '2.3s';
                default: return '1.5s';
            }
        }} both;
        pointer-events: none;
    }
    
    @media (max-width: 1200px) {
        font-size: 6rem;
        letter-spacing: 0.25em;
    }
    
    @media (max-width: 768px) {
        font-size: 3.5rem;
        letter-spacing: 0.2em;
        
        ${props => {
            switch(props.position) {
                case 'top-left':
                    return `
                        top: 20%;
                        left: 5%;
                    `;
                case 'middle-right':
                    return `
                        top: 50%;
                        right: 5%;
                        transform: translateY(-50%);
                    `;
                default:
                    return '';
            }
        }}
    }
    
    @media (max-width: 480px) {
        font-size: 2.8rem;
        letter-spacing: 0.15em;
        
        ${props => {
            switch(props.position) {
                case 'top-left':
                    return `
                        top: 25%;
                        left: 3%;
                    `;
                case 'middle-right':
                    return `
                        top: 50%;
                        right: 3%;
                        transform: translateY(-50%);
                    `;
                default:
                    return '';
            }
        }}
    }
`;

export const IntroSmallText = styled.p`
    font-size: 1.8rem;
    color: #e8e8e8;
    font-weight: 400;
    letter-spacing: 0.15em;
    animation: ${slideInUp} 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.6s both;
    text-align: center;
    position: absolute;
    bottom: 20%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: fit-content;
    max-width: 400px;
    font-family: 'Inter', 'Roboto', 'Segoe UI', sans-serif;
    opacity: 0;
    
    &::before {
        content: '';
        position: absolute;
        top: -25px;
        left: 50%;
        width: 35px;
        height: 20px;
        background: radial-gradient(ellipse, rgba(232,232,232,0.4) 0%, rgba(232,232,232,0.2) 40%, rgba(232,232,232,0.1) 70%, transparent 100%);
        border-radius: 50%;
        transform: translateX(-50%);
        animation: ${smokeEffect} 1.2s ease-out 2.8s both;
        pointer-events: none;
    }
    
    &::after {
        content: '';
        position: absolute;
        top: -20px;
        left: 55%;
        width: 30px;
        height: 18px;
        background: radial-gradient(ellipse, rgba(232,232,232,0.3) 0%, rgba(232,232,232,0.15) 50%, rgba(232,232,232,0.05) 80%, transparent 100%);
        border-radius: 50%;
        transform: translateX(-50%);
        animation: ${smokeEffect3} 1.3s ease-out 2.9s both;
        pointer-events: none;
    }
    
    @media (max-width: 1200px) {
        font-size: 1.6rem;
        max-width: 350px;
    }
    
    @media (max-width: 768px) {
        font-size: 1.4rem;
        max-width: 300px;
        letter-spacing: 0.1em;
        bottom: 25%;
        
        &::before {
            width: 25px;
            height: 15px;
            top: -20px;
        }
        
        &::after {
            width: 20px;
            height: 12px;
            top: -15px;
        }
    }
    
    @media (max-width: 480px) {
        font-size: 1.2rem;
        max-width: 250px;
        letter-spacing: 0.08em;
        bottom: 30%;
        
        &::before {
            width: 20px;
            height: 12px;
            top: -15px;
        }
        
        &::after {
            width: 15px;
            height: 10px;
            top: -12px;
        }
    }
`;

export const ScrollIndicator = styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(245, 245, 245, 0.6);
    font-size: 0.9rem;
    animation: ${fadeInUp} 1s ease-out 2s both;
    cursor: pointer;
    
    &::after {
        content: '↓';
        display: block;
        font-size: 1.5rem;
        margin-top: 5px;
        animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
    
    @media (max-width: 768px) {
        bottom: 20px;
        font-size: 0.8rem;
        
        &::after {
            font-size: 1.2rem;
        }
    }
    
    @media (max-width: 480px) {
        bottom: 15px;
        font-size: 0.7rem;
        
        &::after {
            font-size: 1rem;
        }
    }
`;