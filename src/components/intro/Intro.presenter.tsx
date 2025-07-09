import * as S from './Intro.styled'

export const IntroPresenter = () => {
    return(
        <>
            <S.Background>
                <S.ContentWrapper>
                    <S.IntroBigText 
                        $animation="left" 
                        $position="top-left"
                    >
                        HYEONMIN
                    </S.IntroBigText>
                    <S.IntroBigText 
                        $animation="right" 
                        $position="middle-right"
                    >
                        PORTFOLIO
                    </S.IntroBigText>
                    <S.IntroSmallText>
                        Frontend Developer
                    </S.IntroSmallText>
                </S.ContentWrapper>
                <S.ScrollIndicator 
                    data-scroll-indicator
                ></S.ScrollIndicator>
            </S.Background>
        </>
    )
}

export default IntroPresenter; 