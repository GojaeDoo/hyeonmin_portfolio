import styled, { keyframes, css } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CareerSection = styled.section`
    min-height: 100vh;
    padding: 80px 20px;
    background: #212121;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CareerTitle = styled.h2`
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

export const CareerContainer = styled.div`
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 600px) {
        gap: 18px;
    }
`;

export const CareerRow = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'animate' && prop !== 'delay'
})<{ animate?: boolean; delay?: number }>`
    display: flex;
    align-items: stretch;
    gap: 36px;
    width: 100%;
    background: #232323;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.12);
    padding: 36px 32px;
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
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 24px;
        padding: 28px 12px;
    }
    @media (max-width: 600px) {
        gap: 10px;
        padding: 16px 6px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    }
`;

export const LogoBox = styled.div`
    min-width: 140px;
    min-height: 140px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: #181818;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 16px rgba(0,0,0,0.18);
    overflow: hidden;
    @media (max-width: 900px) {
        margin-bottom: 8px;
    }
    @media (max-width: 600px) {
        min-width: 64px;
        min-height: 64px;
        width: 64px;
        height: 64px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.10);
    }
`;

export const LogoImg = styled.img`
    width: 70%;
    height: 70%;
    object-fit: contain;
`;

export const CareerContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    @media (max-width: 600px) {
        gap: 6px;
    }
`;

export const CompanyName = styled.h2`
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2px;
    color: #fff;
    @media (max-width: 600px) {
        font-size: 1.15rem;
    }
`;

export const Period = styled.div`
    font-size: 1rem;
    color: #b0b0b0;
    margin-bottom: 10px;
    @media (max-width: 600px) {
        font-size: 0.85rem;
        margin-bottom: 6px;
    }
`;

export const Description = styled.p`
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: #e0e0e0;
    @media (max-width: 600px) {
        font-size: 0.95rem;
        margin-bottom: 4px;
    }
`;

export const TagList = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px;
    @media (max-width: 600px) {
        gap: 4px;
        margin-bottom: 4px;
    }
`;

export const Tag = styled.span`
    background: #333;
    color: #fff;
    font-size: 0.95rem;
    padding: 4px 14px;
    border-radius: 16px;
    font-weight: 500;
    margin: 2px 0;
    @media (max-width: 600px) {
        font-size: 0.8rem;
        padding: 3px 10px;
        border-radius: 12px;
    }
`;

export const DetailList = styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    @media (max-width: 600px) {
        margin-top: 10px;
        gap: 7px;
    }
`;

export const DetailItem = styled.div`
    padding: 14px 0 0 0;
    border-top: 1px solid #333;
    display: flex;
    flex-direction: column;
    gap: 2px;
    @media (max-width: 600px) {
        padding: 7px 0 0 0;
    }
`;

export const SubTitleRow = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
`;

export const SubTitle = styled.div`
    font-weight: 700;
    font-size: 1.08rem;
    color: #f5f5f5;
    letter-spacing: 0.01em;
    @media (max-width: 600px) {
        font-size: 0.92rem;
    }
`;

export const SubPeriod = styled.div`
    font-size: 0.98rem;
    color: #b0b0b0;
    font-weight: 400;
    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;

export const SubDesc = styled.div`
    font-size: 0.98rem;
    color: #bdbdbd;
    margin-top: 2px;
    @media (max-width: 600px) {
        font-size: 0.8rem;
        margin-top: 1px;
    }
`;

export const Divider = styled.hr`
    border: none;
    border-top: 1px solid #333;
    margin: 32px 0 0 0;
    @media (max-width: 600px) {
        margin: 16px 0 0 0;
    }
`;



