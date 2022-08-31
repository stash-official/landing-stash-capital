import React from 'react';
import { clientWithBreakDown, StashButton, StyledTagComing, StyledWrapContainer, StyledWrapper } from 'src/styles';
import { urlRoute } from 'src/utils/urlRoute';
import styled from 'styled-components';
import LogoStash from '../../assets/images/logo-stash.png';

const SectionB: React.FC = () => {
  return (
    <ReStyledWrapper>
      <StyledWrapContainer>
        <StyledWrapLogo>
          <div data-aos="fade"
          >
            <img src={LogoStash} alt="icon" />
          </div>
        </StyledWrapLogo>
        <StyledWrapContentRight>
          <StyledQuoteAbout>ABOUT</StyledQuoteAbout>
          <StyledText>
            STASH is a unique, blockchain solution pioneering the future of decentralised finance, combining high-yielding, auto-compounding, auto-staking features with digital banking facilities. This first-of-its-kind, utility-based crypto is able to offer banking services virtually through the metaverse, seamlessly merging the real world with the digital world of the future.
          </StyledText>
          <StyledText>
            Let $STASH stay in your wallet and auto-compound without staking to get profits.
            Interest is automatically sent to your wallets just by holding it.
          </StyledText>

          <StyledText>
            Led by an experienced and doxxed team, simply buy, hodl, sit back, relax and watch your portfolio grow swiftly and steadily.
          </StyledText>

          <StashButton
            onClick={() => {
              window.open(urlRoute.app, "_blank");
            }}
          >Open App
          </StashButton>
        </StyledWrapContentRight>
      </StyledWrapContainer>
    </ReStyledWrapper >
  )
}

const ReStyledWrapper = styled(StyledWrapper)`

`

const StyledWrapLogo = styled.div`
  width: 40%;
  img {
    width: 100%;
  }

  @media(max-width: ${clientWithBreakDown}) {
    display: none;
    width: 0;
  }
`;

const StyledWrapContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: right;
  width: 55%;
  margin-left: 5%;

  button {
    margin-top: 80px;
    width: 200px;
  }

  
  @media(max-width: ${clientWithBreakDown}) {
    text-align:center;
    align-items: center;;
    justify-content: center;;
    width: 100%;
    margin-left: 0;
    button {
      margin-top: 40px;
      width: 200px;
    }
  }

  @media(max-width: 576px) {
    button {
      margin-top: 20px;
    }
  }

  
  @media(max-width: 420px) {
    button {
      width: auto;
    }
  }
`

const StyledQuoteAbout = styled.div`
  font-size: 26px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.red};
  width: 160px;
  padding: 4px 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  @media(max-width: 576px) {
    font-size: 16px;
    line-height: 26px;
    margin: 8px 0 ;
  }
`
const StyledText = styled.div`
  font-family: 'Poppins';
  font-size: 20px;
  line-height: 40px;

  color: ${props => props.theme.colors.white};
  margin: 24px 0 40px;

  @media(max-width: 1600px) {
    font-size: 24px;
    line-height: 36px;
  }

  @media(max-width: 1300px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media(max-width: ${clientWithBreakDown}) {
    margin: 16px 0 ;
  }

  @media(max-width: 576px) {
    font-size: 16px;
    line-height: 26px;
    margin: 8px 0 ;
  }
`
export default SectionB;