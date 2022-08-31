import React from 'react';
import TimeLine from 'src/components/TimeLine';
import { StashButton, StyledWrapContainer, StyledWrapper } from 'src/styles';
import { urlRoute } from 'src/utils/urlRoute';
import styled from 'styled-components';
import ImgCard from '../../assets/images/cardATM.png';
import logoBank from '../../assets/images/logoBank.png';


const SectionBank: React.FC = () => {

  return (
    <StyledWrapper>
      <StyledDrawSquare />
      <StyledWrapContainer style={{ flexDirection: 'column' }}>
        <StyledWrapHeader>
          <StyledWrapTitle>
            <StyledLine className='left' />
            <StyledText className='medium'>
              Connecting
            </StyledText>
            <StyledText className="big">
              traditional finance
            </StyledText>
          </StyledWrapTitle>
          <StyledWrapTitle className='right'>
            <StyledText className='medium'>
              to the

            </StyledText>
            <StyledText className="big">
              world of crypto
            </StyledText>
            <StyledLine className='right' />
          </StyledWrapTitle>
        </StyledWrapHeader>
        <StyledWrapDetailContent>
          <StyledImgCard src={ImgCard} />
          <StyledWrapTimeLine>
            <TimeLine position='right' className='top'>
              <div data-aos="fade-left"
              >
                Users can store their STASH and other cryptos, convert them to fiat and spend using the prepaid credit card.
              </div>
            </TimeLine>
            <TimeLine position='right'  >
              <div data-aos="fade-left"
                data-aos-delay="200"
              >
                Enabling a fiat to crypto wallet with a prepaid credit card
              </div>
            </TimeLine>
            <TimeLine position='right'  >
              <div data-aos="fade-left"
                data-aos-delay="200"
                style={{
                  position: 'relative'
                }}
              >
                Partner of credit card, Asia Digital Bank.
                <img src={logoBank} alt="logo bank" style={{ marginBottom: 16 }} />
                <StashButton style={{
                  position: "absolute",
                  width: "max-content",
                  right: "2%",
                  bottom: "-13%"
                }} onClick={() => {
                  window.open(urlRoute.expressInterestNow, "_blank");
                }}>Express Interest Now</StashButton>
              </div>
            </TimeLine>
          </StyledWrapTimeLine>
        </StyledWrapDetailContent>

      </StyledWrapContainer>
      <StyledDrawSquare className='bottom' />
    </StyledWrapper>
  )
}

const clientWidthOneCol = "676px";

const StyledWrapHeader = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`

const StyledWrapTitle = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;

  &.right {
    transform: translate(40%, 0);
  }

  @media(max-width: 576px) {
    &.right {
      transform: translate(20%, 0);
    }
  }
`;


const StyledText = styled.span<{ className: 'big' | 'medium' | 'small' | string }>`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  z-index: 1;

  &.big {
    font-size: 110px;
    line-height: 110px;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  &.medium {
    font-size: 50px;
    line-height: 75px;
    margin-right: 24px;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateX(-110%);
  }

  @media(max-width: 1200px) {
    &.big {
      font-size: 80px;
      line-height: 80px;
    }
    &.medium {
      font-size: 40px;
      line-height: 55px;
    }
  }

  @media(max-width: 900px) {
    &.big {
      font-size: 50px;
      line-height: 50px;
    }
    &.medium {
      font-size: 24px;
      line-height: 35px;
    }
  }

  @media(max-width: 576px) {
    &.big {
      font-size: 50px;
      line-height: 50px;
    }
    &.medium {
      position: relative;
      transform: unset;  
      margin-right: 4px;
    }
  }

  @media(max-width: 480px) {
    &.big {
      font-size: 30px;
      line-height: 30px;
    }
    &.medium {
      font-size: 16px;
      line-height: 20px;
      position: relative;
      transform: unset;  
      margin-right: 4px;
    }
  }
`;

const StyledLine = styled.div<{ className: "left" | 'right' }>`
  background: ${props => props.theme.colors.red};

  width: 105%;
  height: 40px;

  position: absolute;

  &.left {
    transform: translate(-77%,0%);
  }

  &.right {
    transform: translate(30%,0%);
  width: 160%;
  }

  @media(max-width: 1200px) {
    height: 30px;
    &.left {
      transform: translate(-77%,0%);
    }

    &.right {
      transform: translate(30%,0%);
    width: 160%;
    }
  }

  @media(max-width: 900px) {
    height: 20px;
    &.left {
      transform: translate(-77%,0%);
    }

    &.right {
      transform: translate(30%,0%);
    width: 160%;
    }
  }

  @media(max-width: 576px) {
    &.left {
      transform: translate(-77%,0%);
    }

    &.right {
      transform: translate(30%,0%);
    width: 160%;
    }
  }
  @media(max-width: 480px) {
    height: 10px;
    &.left {
      transform: translate(-60%,0%);
    }

    &.right {
      transform: translate(30%,0%);
    width: 160%;
    }
  }
`;

const StyledWrapDetailContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 40px; 

  padding-top: 128px;


  @media(max-width: ${clientWidthOneCol}) {
    grid-template-columns: 1fr;
    padding-top: 64px;
  }
`;

const StyledImgCard = styled.img`
  max-width: 600px;
  width: 100%;
  transform: translateY(-8%);

  @media(max-width:  ${clientWidthOneCol}) {
    transform: unset;
    margin: 24px auto 80px;
    width: 70vw;
    max-width: 400px;
  }
`;

const StyledWrapTimeLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 40px);

  .time-line {
    width: 100%;
    flex-direction: row-reverse;

    .content {
      text-align: right;
      line-height: 40px;
       img {
        margin-top: 64px;
        max-width: 400px;
        width: 100%;
      }
    }
  }
  @media(max-width: 900px) {
    .time-line {
      .content {
        margin-right: 20px;
        padding-right: 0;
      }
    }
  }

  @media(max-width: 767px) {
    .time-line {
      .content {
        img {
          margin-top: 24px;
        }
      }
    }
  }

  @media(max-width:  ${clientWidthOneCol}) {
    width: 100%;
  }
`;

const StyledDrawSquare = styled.div`
  width: 30px;
  height: 40px;
  padding: 10px;
  border: 5px solid ${props => props.theme.colors.red};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  &.bottom { 
    top: unset;
    bottom: 0;
    transform: translate(-50%, 50%);
  }

  &:after {
    content: ' ';
    padding: 20px 15px;
    background: red;
    position: absolute;
  }

  @media(max-width: 767px) {
    width: 20px;
    height: 30px;
    padding: 8px;
    border: 3px solid ${props => props.theme.colors.red};

    &:after {
      content: ' ';
      padding: 15px 10px;
    }
  }
`

export default SectionBank;