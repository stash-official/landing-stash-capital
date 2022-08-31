import React from 'react';
import TimeLine from 'src/components/TimeLine';
import { StyledWrapContainer, StyledWrapper } from 'src/styles';
import { urlRoute } from 'src/utils/urlRoute';
import styled from 'styled-components';

const SectionE: React.FC = () => {

  return (
    <StyledWrapper>
      <StyledWrapContainer style={{ flexDirection: 'column', position: 'relative' }}>
        <div
          data-aos="fade-down"
        >
          <StyledStartnEarningNow
            onClick={() => {
              window.open(urlRoute.buyStash, "_blank")
            }}
          >
            <div className="outner"
            >
              <div className='inner'>
                <div>
                  START
                </div>
                <div>
                  EARNING
                </div>
                <div>
                  NOW
                </div>
              </div>
            </div>
          </StyledStartnEarningNow>
        </div>

        <StyledWrapTimlineSectionBottom>
          <StyledWrapContentLeft>
            <StyledTitleSection>
              Tokenomics
            </StyledTitleSection>
          </StyledWrapContentLeft>

          <StyledWrapTimeLine>
            <StyledQuote>
              STASH TOKENOMICS EXPLAINED
            </StyledQuote>
            <StyledWrapDes>
              <StyledText className='medium'>
                $STASH is an ARC-20 token with a capped supply that rewards holders using a brilliant rebase algorithm.
              </StyledText>
            </StyledWrapDes>


            <StyledWrapTimeLineContainer>
              <TimeLine className='top'>
                <div data-aos="fade-up"
                >
                  <StyledText className='title'>
                    Automatic LP
                  </StyledText>
                  <StyledText className='medium'>
                    4% of the trading fees return to the liquidity ensuring $STASH’s increasing collateral value.
                  </StyledText>
                </div>

              </TimeLine>

              <TimeLine>
                <div data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <StyledText className='title'>
                    Stash Reserve
                  </StyledText>
                  <StyledText className='medium'>
                    2% of the buy tax and 5% of the sell tax go to developing the utilities, brand, marketing and business expansion. Marketing and utility will be a priority as these will establish price stability and long term sustainability.
                  </StyledText>
                </div>
              </TimeLine>

              <TimeLine>
                <div data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <StyledText className='title'>
                    Risk Free Value
                  </StyledText>
                  <StyledText className='medium'>
                    5% of the trading fees are redirected to the STASH Safety Fund to make the staking rewards sustainable and provide positive rebase. It also helps to achieve price stability and long term sustainability with a competitive fixed APY.
                  </StyledText>
                </div>
              </TimeLine>

              <TimeLine>
                <div data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <StyledText className='title'>
                    blazing pit
                  </StyledText>
                  <StyledText className='medium'>
                    2% of every transaction is automatically burnt to control and manage the circulating supply.


                  </StyledText>
                </div>
              </TimeLine>
            </StyledWrapTimeLineContainer>

          </StyledWrapTimeLine>
        </StyledWrapTimlineSectionBottom>
        <StyledLine />
      </StyledWrapContainer>
    </StyledWrapper >
  )
}

const StyledWrapTimlineSectionBottom = styled.div`
  display: grid; 
  grid-template-columns: 15% 85%; 
  gap: 0px 0px; 

  @media(max-width: 900px) {
    grid-template-columns: 30% 65%; 
  }

  @media(max-width: 576px) {
    grid-template-columns: 35% 63%; 
  }
`

const StyledTitleSection = styled.div`
  color: ${props => props.theme.colors.white};
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 235px;
  line-height: 190px;

  text-transform: uppercase;

  writing-mode: vertical-rl;
  transform: rotate(180deg) translateZ(0);
  backface-visibility: hidden;
  @media(max-width: 767px) {
    font-size: 200px;
    line-height: 180px;
  }

  @media(max-width: 576px) {
    font-size: 180px;
    line-height: 150px;
  }

  @media(max-width: 450px) {
    font-size: 100px;
    line-height: 110px;
  }
  
`;

const StyledWrapContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media(max-width: 1400px) {
    align-items: center;
    justify-content: flex-start;
  }
`

const StyledWrapTimeLine = styled.div`
  margin-left: 7%;
`;

const StyledWrapTimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  margin-top: 128px;
  width: 80%;

  @media(max-width: 767px) {
    margin-top: 80px;
  }

  .content {
    font-size: 26px;

      @media(max-width: 1600px) {
        padding-bottom: 40px;
      }

      @media(max-width: 1300px) {
        font-size: 20px;
      }

    @media(max-width: 576px) {
      margin-left: 2%;
    }
  }
`

const StyledQuote = styled.div`
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  padding: 10px 24px;
  letter-spacing: 0.2em;
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 34px;
  width: max-content;

  @media(max-width: 767px) {
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.15em;
    width: auto;
  }

  @media(max-width: 576px) {
    padding: 6px 24px;
    font-size: 24px;
    line-height: 28px;
  }

  @media(max-width: 420px) {
    padding: 7px 24px;
  }
`;


const StyledWrapDes = styled.div`
  margin: 40px 0 80px;

  @media(max-width: 767px) {
    margin: 20px 0 60px;
  }

  @media(max-width: 420px) {
    margin: 20px 0;
  }
`
const StyledText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  color: ${props => props.theme.colors.white};

  &.title {
      font-size: 24px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    &.big {
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;

    }

    &.medium {
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }

  @media(max-width: 767px) {
    &.title {
      font-size: 18px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    &.big {
      font-weight: 700;
      font-size: 22px;
      line-height: 28px;
    }

    &.medium {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const StyledStartnEarningNow = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 50%;
  transform: translateY(-70%);  

  border: 8px solid ${props => props.theme.colors.red};
  background: transparent;
  cursor: pointer;
  padding: 18px;
  div.outner {
    width: calc(100% - 36px);
    height: calc(100% - 36px);
    border: 4px solid ${props => props.theme.colors.white};
    padding: 12px;
    border-radius: 50%;

    div.inner {
      border-radius: 50%;
      width: 100%;
      height: calc(100% - 24px);
      padding-bottom: 24px;

      background: ${props => props.theme.colors.red};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      text-align: center;

        letter-spacing: 5px;
        color: #FFF;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 40px;
        white-space: pre-line;

        transform: translateZ(0);
        backface-visibility: hidden;
        
    }
  } 

  @media(max-width: 420px) {
    width: 220px;
    height: 220px;
    transform: translateY(-60%);  
    div.outner {
      div.inner {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }

`;


const StyledLine = styled.div`
  background: ${props => props.theme.colors.red};
  position: absolute;
  bottom: -12%;
  right: -10%;
  width: 20px; 
  height: 60%;
  

  @media(max-width: 900px) {
    right: -10px;
    width: 10px;
    height: 60%;
  }

  @media(max-width: 576px) {
    height: 60%;
  }

`;

export default SectionE;