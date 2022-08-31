import React from 'react';
import TimeLine from 'src/components/TimeLine';
import { ADDRESS_STASH, NUMBER_APY_STAKING } from 'src/constants';
import { clientWithBreakDown, StashButton, StyledBulletCircle, StyledTagComing, StyledWrapContainer, StyledWrapper } from 'src/styles';
import { urlRoute } from 'src/utils/urlRoute';
import styled from 'styled-components';

const SectionA: React.FC = () => {

  return (
    <StyledWrapper>
      <StyledWrapContainer style={{ flexDirection: 'column' }}>
        <StyleedWrapTitleTimeLine>
          <StyledWrapContentLeft>
            <div data-aos="zoom-in">
              <StyledTitleSection>
                <StyledFlexRowWord>
                  <div className='word'>
                    <span >Experience</span>
                  </div>
                  <div>
                    <span className='red'>Digital</span>
                  </div>
                </StyledFlexRowWord>
                <StyledFlexRowWord>
                  <div className='word'>
                    <span className='red'>Banking</span>
                  </div>
                  <div className='word'>
                    IN
                  </div>
                  <div className='word'>
                    <span className='red'>DeFi</span>
                  </div>
                  <div>
                    WITH
                  </div>
                </StyledFlexRowWord>

                <StyledFlexRowWord>
                  <div className='word'>
                    <span className='red'>Auto-compounding</span>
                  </div>
                </StyledFlexRowWord>

                <StyledFlexRowWord>
                  <div className='word'>
                    AND
                  </div>
                  <div className='word'>
                    <span className='red'>Auto-staking</span>
                  </div>
                </StyledFlexRowWord>
              </StyledTitleSection>

              <FlexWrap>

                <StyledWrapButtonLink>
                  <StashButton
                    onClick={() => {
                      window.open(urlRoute.buyStash, "_blank");
                    }}
                  >Buy $STASH
                  </StashButton>
                  <StashButton onClick={() => {
                    window.open(urlRoute.whitePaper, "_blank");
                  }}>White Paper</StashButton>

                </StyledWrapButtonLink>
                <StyledWrapButtonLink>
                  <StashButton className='get-account' onClick={() => {
                    window.open(urlRoute.expressInterestNow, "_blank");
                  }}>Get Your Digital Account</StashButton>
                </StyledWrapButtonLink>


              </FlexWrap>

            </div>
          </StyledWrapContentLeft>

          <StyledWrapTimeLine>
            <TimeLine className="top">
              <div data-aos="fade-left"
                data-aos-delay="200"
              >
                Highest Fixed APY of <span className='red'>{NUMBER_APY_STAKING}<span className='small-red'>%</span></span>
              </div>

            </TimeLine>


            <TimeLine>
              <div data-aos="fade-left"
                data-aos-delay="400"
              >
                The Only Automatic Staking & Compounding Platform You Need!
              </div>
            </TimeLine>

            <TimeLine>
              <div data-aos="fade-left"
                data-aos-delay="600"
              >
                Get Attractive Rebase Rewards
                <br />
                Every <span className='red'>15 Minutes / 96 Times Daily!</span>
              </div>
            </TimeLine>

            <TimeLine>
              <div data-aos="fade-left"
                data-aos-delay="800"
              >
                Automatic burning of supply every transaction!
              </div>
            </TimeLine>

          </StyledWrapTimeLine>
        </StyleedWrapTitleTimeLine>

        <StyledWrapAPYContract>
          <StyledHeaderAutoStaking>
            <StyledTextAutoStaking className='medium'>
              STASH
            </StyledTextAutoStaking>
            <StyledQuoteAutoStaking>
              <StyledTextAutoStaking className='small'>
                AUTOSTAKING PROTOCOL
              </StyledTextAutoStaking>
            </StyledQuoteAutoStaking>
          </StyledHeaderAutoStaking>

          <StyledWrapAPY>
            <StyledTextAutoStaking className='big'>
              {NUMBER_APY_STAKING}
              <span className='big-2'>
                %
              </span>
            </StyledTextAutoStaking>
          </StyledWrapAPY>
          <StyledWrapQuoteAPY>
            <StyledTextAutoStaking className='small'>
              SIMPLY BUY, HOLD AND EARN
            </StyledTextAutoStaking>
          </StyledWrapQuoteAPY>
        </StyledWrapAPYContract>
      </StyledWrapContainer>

      <StyledWrapContainer>
        <StyledWrapCircleLineRow>
          <StyledBulletCircle />
          <StyledLine className='row' />
        </StyledWrapCircleLineRow>

        <StyledWrapContract>
          <StyledTextAutoStaking className='small'>
            <span style={{ fontWeight: 'bold', marginRight: 16 }}>$STASH Contract:</span>
            <span>{ADDRESS_STASH}</span>
          </StyledTextAutoStaking>
        </StyledWrapContract>

        <StyledWrapCircleLineRow>
          <StyledLine className='row' />
          <StyledBulletCircle />
        </StyledWrapCircleLineRow>
      </StyledWrapContainer>
    </StyledWrapper >
  )
}
const StyleedWrapTitleTimeLine = styled.div`
  width: 100%;
  display: grid; 
  grid-template-columns: 55% 45%; 
  gap: 0px 0px; 

  @media(max-width: 1600px) {
    grid-template-columns: 50% 50%; 
  }

  
  @media(max-width: ${clientWithBreakDown}) {
    grid-template-columns: 100%;
  }
`

const StyledFlexRowWord = styled.div`
  display: flex;
  align-items: center;
  @media(max-width: ${clientWithBreakDown}) {
    justify-content: center;
  }
`

const StyledTitleSection = styled.div`
  color: ${props => props.theme.colors.white};
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 100px;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  white-space: nowrap;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  .word {
    margin-right: 16px;
  }
  span.red {
    color: ${props => props.theme.colors.red};
  }

  @media(max-width: 1600px) {
    font-size: 90px;
    line-height: 90px;
  }

  @media(max-width: 1400px) {
    font-size: 75px;
    line-height: 75px;
  }

  @media(max-width: 1200px) {
    font-size: 70px;
    line-height: 70px;
  }

  @media(max-width: ${clientWithBreakDown}) {
    font-size: 100px;
    line-height: 100px;
    text-align: center;
  }

  

  @media(max-width: 767px) {
    font-size: 75px;
    line-height: 75px;
  }

  @media(max-width: 576px) {
    font-size: 70px;
    line-height: 70px;
  }

  
  @media(max-width: 500px) {
    font-size: 50px;
    line-height: 50px;
  }

  @media(max-width: 400px) {
    font-size: 45px;
    line-height: 45px;
  }

  
  @media(max-width: 350px) {
    font-size: 35px;
    line-height: 40px;
  }
`;

const StyledWrapContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media(max-width: ${clientWithBreakDown}) {
    align-items: center;
    justify-content: center;
  }
`;
const FlexWrap = styled.div`
  display: flex;
  margin: 16px 0;
  @media(max-width: 1476px) {
    flex-direction: column;
    .get-account {
      margin-top: 16px;
    }
  }

  

  @media (max-width: ${clientWithBreakDown}) {
    button:nth-child(2) {
        margin-right:0;
    }
    .get-account {
        margin-right: 0;
    }
  }

`
const StyledWrapButtonLink = styled.div`
  display: flex;
  align-items: center;

  button {
    word-break: keep-all;
    white-space: nowrap;

    margin-right: 16px;

    @media (max-width: 1200px) {
      font-size: 16px;
    }
    @media(max-width: 420px) {
      padding: 8px 12px;
    }
  }


  @media (max-width: ${clientWithBreakDown}) {
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
  }
`;


const StyledWrapTimeLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10%;
  span.red {
    font-family: 'Bebas Neue';
    color: ${props => props.theme.colors.red};
    font-size: 32px;
    margin-left: 4px;

    .small-red {
      font-size: 26px;
    }
    @media(max-width: 420px) {
      font-size: 24px;
      margin-left: 0;
      .small-red {
        font-size: 20px;
      }
    }
  }
  @media(max-width: ${clientWithBreakDown}) {
    margin-left: 0;
    margin-top: 80px;
  }
`;

const StyledLine = styled.div`
  width: 1px;
  height: 100%;
  background: ${props => props.theme.colors.red};

  &.row {
    width: 100%;
    height: 1px;
    background: ${props => props.theme.colors.white};
  }
`;

// Wrap APY Contract
const StyledWrapAPYContract = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const StyledHeaderAutoStaking = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const StyledWrapAPY = styled.div`
  margin-top: 40px;

  @media(max-width: 1200px) {
    margin-top: 20px;
  }

  @media(max-width: 576px) {
    margin-top: 16px;
  }
`;
const StyledTextAutoStaking = styled.div`
  color: ${props => props.theme.colors.white};
  font-family: 'Bebas Neue';
  font-weight: 400;

  &.big {
    font-size: 320px;
    line-height: 270px;
    letter-spacing: 0.03em;
    transform: translateZ(0);
    backface-visibility: hidden;
    
    .big-2 {
      font-size: 250px;
    }

  }


  &.medium {
    font-size: 71px;
    line-height: 75px;
    letter-spacing: 0.08em;
  }

  &.small {
    font-family: 'Poppins';
    font-size: 26px;
    line-height: 32px;
  }

  @media(max-width: 1400px) {
    &.big {
      font-size: 270px;
      line-height: 220px;
      .big-2 {
        font-size: 200px;
      }
    }
  }

  @media(max-width: 1200px) {
    &.big {
      font-size: 170px;
      line-height: 140px;
      .big-2 {
        font-size: 120px;
      }
    }
  }

  @media(max-width: 900px) {
    &.medium {
      font-size: 60px;
      line-height: 50px;
    }
    &.small {
      font-size: 20px;
      line-height: 32px;
    }
  }

  @media(max-width: 767px) {
    &.big {
      font-size: 120px;
      line-height: 120px;
      .big-2 {
        font-size: 80px;
      }
    }
  }

  @media(max-width: 576px) {
    &.big {
      font-size: 80px;
      line-height: 70px;
      .big-2 {
        font-size: 60px;
      }
    }

    &.medium {
      font-size: 40px;
      line-height: 30px;
    }
    &.small {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.08em;
    }
  }

  @media(max-width: 420px) {
    &.big {
      font-size: 70px;
      line-height: 60px;
      .big-2 {
        font-size: 50px;
      }
    }
    &.small {
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.08em;
    }
  }
  
`;

const StyledQuoteAutoStaking = styled.div`
  background: ${props => props.theme.colors.red};
  border-radius: 0px 30px 30px 0px;
  padding: 10px 24px;
  margin-top: -8px;
  margin-left: 24px;
  letter-spacing: 0.2em;

  @media(max-width: 767px) {
    margin-top: -4px;
  }

  @media(max-width: 576px) {
    margin-left: 12px;
    padding: 6px 24px;
  }

  @media(max-width: 420px) {
    padding: 7px 24px;
  }
`

const StyledWrapQuoteAPY = styled.div`
  background: #000000;
  padding: 8px 40px;
  margin: 16px 0;
  letter-spacing: 0.2em;

  @media(max-width: 420px) {
    padding: 8px 40px;
    margin: 4px 0 16px;
  }
`;


const StyledWrapCircleLineRow = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media(max-width: 420px) {
    display: none;
  }
`;

const StyledWrapContract = styled.div`
  padding: 0 40px;
  text-align: center;
 
  @media(max-width: 1300px) {

    span:nth-child(1) {
      margin-right: 0 !important;
      margin-bottom: 8px;
    }
    .small {
      display: flex;
      flex-direction: column;

    }
    flex: 1;

  }

  @media(max-width: 767px) {
    word-break: break-all;
    flex: auto;
    span {
      margin: 2px 0;
    }
  }
  @media(max-width: 420px) {
    .small {
      font-size: 18px;
    }
    padding: 0;
  
  }

`

export default SectionA;