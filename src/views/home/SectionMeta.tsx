import React, { useCallback, useState } from "react";
import MentionText from "src/components/MentionText";

import { StyledWrapContainer, StyledWrapper } from 'src/styles';
import styled from "styled-components";
import BannerStashCity from '../../assets/images/banner-stash-city.png';
import BannerGame1 from '../../assets/images/banner-game-1.png';
import BannerGame2 from '../../assets/images/banner-game-2.png';
import BannerGame3 from '../../assets/images/banner-game-3.png';
import BannerGame4 from '../../assets/images/banner-game-4.png';
import ModalCapitalCity from "./ModalCapitalCity";

const SectionMeta: React.FC = () => {

  const [openModal, setOpenModal] = useState(false);

  const _handleOpenModal = useCallback(() => setOpenModal(true), []);
  const _handleCloseModal = useCallback(() => setOpenModal(false), []);

  return (
    <StyledWrapper style={{ padding: '128px 0' }}>
      <StyledRectangle />
      <ReStyledContainer>
        <StyledWrapContent>
          <StyledText className="small">
            Battle Arena. NFT Hub. New Innovations. Endless Parties.
            <div className="line" />
          </StyledText>
          <StyledText className="medium">
            Welcome to our
          </StyledText>
          <StyledText className="big">
            METAVERSE
            <br />
            STASHCITY
            <div className="line" />
          </StyledText>
        </StyledWrapContent>
      </ReStyledContainer>
      <StyledWrapBannerStashCity>
        <StyledBannerStashCity src={BannerStashCity} alt="banner stash city" />
        <ReStyledButton onClick={_handleOpenModal} />
      </StyledWrapBannerStashCity>

      <ReStyledContainer>
        <MentionText>
          <StyledText className="medium-2">
            P2E GAMING
          </StyledText>
        </MentionText>
      </ReStyledContainer>

      <StyledWrapBannerGame>
        <StyledBannerGame src={BannerGame1} alt="banner-game-1" />
        <StyledBannerGame src={BannerGame2} alt="banner-game-2" />
        <StyledBannerGame src={BannerGame3} alt="banner-game-3" />
        <StyledBannerGame src={BannerGame4} alt="banner-game-4" />
      </StyledWrapBannerGame>

      <ReStyledContainer>
        <StyledQuote>
          COMING SOON
        </StyledQuote>
      </ReStyledContainer>

      <StyledRectangle className="rotate" />

      <ModalCapitalCity open={openModal} onDismiss={_handleCloseModal} />
    </StyledWrapper>
  )
}

const ReStyledContainer = styled(StyledWrapContainer)`
  align-items: flex-start;
  justify-content: flex-start;
`;


const StyledWrapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  z-index: 1;
  margin: 0 auto;

`

const StyledText = styled.div<{ className: 'big' | "medium" | 'medium-2' | 'small' }>`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  position: relative;
  width: 100%;

  &.big {
    font-size: 300px;
    line-height: 300px;
    letter-spacing: 0.02em;
    transform: translateZ(0);
    backface-visibility: hidden;
    
    .line {
      height: 150px;
      bottom: 27%;
    }
  }

  &.medium {
    font-size: 197px;
    line-height: 180px;
    letter-spacing: 0.02em;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  &.medium-2 {
    font-size: 95px;
    line-height: 114px;
    letter-spacing: 0.35em;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  &.small {
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.1em;
    padding-bottom: 24px;
    .line {
      height: 35px;
      bottom: 20%;
    }
  }
  .line {
    background: ${props => props.theme.colors.red};
    width: calc(100% - 16px);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }

  @media(max-width: 1500px) {
    &.big {
      font-size: 200px;
      line-height: 200px;
      .line {
        height: 80px;
        bottom: 32%;
      }
    }

    &.medium {
      font-size: 132px;
      line-height: 100px;
    }

    &.medium-2 {
      font-size: 60px;
      line-height: 84px;
    }

    &.small {
      font-size: 26px;
      line-height: 30px;
      padding-bottom: 32px;
      .line {
        height: 20px;
        bottom: 45%;
      }
    }
  }

  @media(max-width: 900px) {
    &.big {
      font-size: 150px;
      line-height: 140px;
      .line {
        height: 65px;
        bottom: 29%;
      }
    }

    &.medium {
      font-size: 98px;
      line-height: 80px;
    }
    
    &.medium-2 {
      font-size: 40px;
      line-height: 44px;
    }

    &.small {
      font-size: 20px;
      line-height: 30px;
      padding-bottom: 16px;
      .line {
        height: 12px;
        bottom: 42%;
      }
    }
  }


  @media(max-width: 678px) {
    &.big {
      font-size: 120px;
      line-height: 120px;
      .line {
        height: 55px;
        bottom: 29%;
      }
    }

    &.medium {
      font-size: 78px;
      line-height: 80px;
      margin-bottom: -10px;
    }

    &.medium-2 {
      font-size: 30px;
      line-height: 30px;
    }

    &.small {
      font-size: 16px;
      line-height: 20px;
      padding-bottom: 4px;
      .line {
        height: 12px;
        bottom: 15%;
      }
    }
    .line {
      width: calc(100% - 4px);
    }
  }

  
  @media(max-width: 500px) {
    &.big {
      font-size: 90px;
      line-height: 90px;
      .line {
        height: 45px;
        bottom: 27%;
      }
    }

    &.medium {
      font-size: 59px;
      line-height: 50px;
      margin-bottom: 0;
    }

    &.medium-2 {
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0.20em;
    }

    &.small {
      font-size: 12px;
      line-height: 14px;
      padding-bottom: 10px;
      .line {
        height: 8px;
        bottom: 40%;
      }
    }
    .line {
      width: calc(100% - 4px);
    }
  }

  @media(max-width: 375px) {
    &.big {
      font-size: 70px;
      line-height: 70px;
      .line {
        height: 35px;
        bottom: 27%;
      }
    }

    &.medium {
      font-size: 47px;
      line-height: 47px;
      margin-bottom: 0;
    }

    &.medium-2 {
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0.20em;
    }

    &.small {
      width: 180px;
      font-size: 14px;
      line-height: 14px;
      padding-bottom: 4px;
      word-break: break-word;
      white-space: normal;
      .line {
        height: 8px;
        bottom: 45%;
      }
    }
    .line {
      width: calc(100% - 4px);
    }
  }
`;

const StyledRectangle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 150px;
  height: 30px;
  display: grid;
  &:before {
    display: inline-block;
    content: ' ';
    height: 30px;
    background:#EA1C1C;
  }

  &:after {
    display: inline-block;
    content: ' ';
    width: 150px;
    height: 30px;
    background: #EA1C1C;
    transform: rotate(-90deg) translate(60%,-200%);
  }

  &.rotate {
    top: 0;
    right: 0;
    bottom: unset;
    left: unset;
    transform: rotate(180deg)
  }

  @media(max-width: 900px) {
    width: 100px;
    height: 20px;

    &:before {
      width: 100px;
      height: 20px;
    }

    &:after {
      width: 100px;
      height: 20px;
    }
  }

  @media(max-width: 420px) {
    width: 70px;
    height: 15px;

    &:before {
      width: 70px;
      height: 15px;
    }

    &:after {
      width: 70px;
      height: 15px;
      transform: rotate(-90deg) translate(61%,-180%);
    }
  }
`;

const StyledWrapBannerStashCity = styled.div`
  position: relative;
  padding: 128px 0;

  @media(max-width: 420px) {
    padding: 64px 0;

  }

  @media(max-width: 350px) {
    padding: 32px 0;
  }
`;

const ReStyledButton = styled.div`
  
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  transform: translate(-50%,100%);
  height: 5vw;
  cursor: pointer;

  @media(max-width: 420px) {
    transform: translate(-50%, 85%);
  }
`

const StyledBannerStashCity = styled.img`
  width: 100vw;
  height: 100%;
  
`;

const StyledWrapBannerGame = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 24px ; 
  padding: 128px 0;
  width: calc(100% - 48px);

  @media(max-width: 576px) {
    grid-template-columns: 1fr;
  }

  @media(max-width: 420px) {
    padding: 64px 0;
  }

  @media(max-width: 350px) {
    padding: 32px 0;
  }

`;

const StyledBannerGame = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledQuote = styled.div`
  font-size: 55px;
  line-height: 54px;
  letter-spacing: 0.85em;
  

  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.red};
  width: 100%;
  padding: 16px;
  text-transform: uppercase;
  text-align: center;


  @media(max-width: 1300px) {
    font-size: 50px;
    line-height: 50px;
    letter-spacing: 0.55em;
  }

  @media(max-width: 900px) {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0.45em;
  }

  @media(max-width: 687px) {
    font-size: 28px;
    line-height: 28px;
    letter-spacing: 0.35em;
  }

  @media(max-width: 420px) {
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.35em;
  }
`
export default SectionMeta;