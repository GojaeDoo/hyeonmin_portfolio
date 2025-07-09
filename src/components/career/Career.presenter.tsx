import * as S from './Career.styled'
import { CareerPresenterProps } from './Career.types';
import React, { useEffect, useRef, useState } from 'react';

export const CareerPresenter = ({ careers }: CareerPresenterProps) => {
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
        <>
            <S.CareerSection>
                <S.CareerTitle>CAREER</S.CareerTitle>
                <S.CareerContainer>
                    {careers.map((career, idx) => (
                        <React.Fragment key={career.company + idx}>
                            <S.CareerRow
                                ref={el => (rowRefs.current[idx] = el)}
                                animate={visible[idx]}
                                delay={0.1 * idx}
                            >
                                <S.LogoBox>
                                    <S.LogoImg src={career.logo} alt={`${career.company} 로고`} />
                                </S.LogoBox>
                                <S.CareerContent>
                                    <S.CompanyName>{career.company}</S.CompanyName>
                                    <S.Period>{career.period}</S.Period>
                                    <S.Description>{career.description}</S.Description>
                                    <S.TagList>
                                        {career.tags.map(tag => (
                                            <S.Tag key={tag}>{tag}</S.Tag>
                                        ))}
                                    </S.TagList>
                                    <S.DetailList>
                                        {career.details.map((detail, i) => (
                                            <S.DetailItem key={detail.title + i}>
                                                <S.SubTitleRow>
                                                    {detail.title && <S.SubTitle>┃ {detail.title}</S.SubTitle>}
                                                    {detail.period && <S.SubPeriod>{detail.period}</S.SubPeriod>}
                                                </S.SubTitleRow>
                                                {'desc' in detail && detail.desc && (
                                                    <S.SubDesc>{detail.desc}</S.SubDesc>
                                                )}
                                            </S.DetailItem>
                                        ))}
                                    </S.DetailList>
                                </S.CareerContent>
                            </S.CareerRow>
                            {idx !== careers.length-1 && <S.Divider />}
                        </React.Fragment>
                    ))}
                </S.CareerContainer>
            </S.CareerSection>
        </>
    )
}