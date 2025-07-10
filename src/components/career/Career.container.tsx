'use client'

import { CareerPresenter } from "./Career.presenter";
import { CareerData } from './Career.types';
import { useEffect, useRef, useState } from 'react';

const careers: CareerData[] = [
    {
        logo: '/images/career/한국ICT인재개발원.png',
        company: '한국ICT인재개발원',
        period: '2023.12 ~ 2024.07 (6.5개월)',
        description: '국비지원 과정',
        tags: ['HTML', 'CSS', 'JavaScript', 'Java', 'JSP', 'Spring', 'React','MySQL', 'AWS', 'Git','GitHub' ],
        details: [
            {
                title: 'JAVA 기반 풀스택 웹개발자 양성과정 수료',
                period: '2023.12 ~ 2024.07 (6.5개월)'
            }
        ]
    },
    {
        logo: '/images/career/오토시맨틱스.png',
        company: '㈜오토시맨틱스',
        period: '2024.08 ~ 2024.10 (2개월)',
        description: 'AI 및 Metaport 기반 웹 서비스 개발 회사',
        tags: ['HTML', 'CSS', 'JavaScript', 'Metaport'],
        details: [
            {
                title: '마곡 Soil 기계실 메타포트 웹 UI 작업',
                period: '2024.08 ~ 2024.10 (2개월)',
            }
        ]
    },
    {
        logo: '/images/career/유니콘스.png',
        company: '㈜유니콘스',
        period: '2024.10 ~ 2025.01 (3개월)',
        description: '시설물 생애주기비용 분석 시스템 및 토목 엔지니어링 회사',
        tags: ['HTML', 'CSS', 'JavaScript', 'Java', 'JSP', 'Spring', 'PostgreSQL' , 'SVN'],
        details: [
            {
                title: '기반시설관리시스템 웹 제작',
                period: '2024.10 ~ 2025.01 (3개월)',
            }
        ]
    },
    {
        logo: '/images/career/림팩토리.png',
        company: '림팩토리',
        period: '2025.01 ~ 재직 중',
        description: '캐릭터 모델링 및 애니메이션 제작 회사',
        tags: ['HTML', 'CSS', 'JavaScript','TypeScript', 'Vue.js', 'Node.js','PostgreSQL' , 'SVN'],
        details: [
            {
                title: '병원의원급 EHR 웹 제작',
                period: '2024.01 ~ 진행 중',
            }
        ]
    }
];

export const CareerContainer = () => {
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visible, setVisible] = useState<boolean[]>(Array(careers.length).fill(false));

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        rowRefs.current.forEach((el, idx) => {
            if (!el) return;
            const observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisible(prev => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                        observer.disconnect();
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => {
            observers.forEach(o => o.disconnect());
        };
    }, [careers.length]);

    return(
        <div id="career">
            <CareerPresenter 
                careers={careers} 
                visible={visible}
                rowRefs={rowRefs}
            />
        </div>
    )
}

export default CareerContainer;