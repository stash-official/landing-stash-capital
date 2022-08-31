import React from 'react';
import { NUMBER_APY_STAKING } from 'src/constants';
import { clientWithBreakDown, StashButton, StyledWrapContainer, StyledWrapper } from 'src/styles';
import styled from 'styled-components';
import ImgEarn from '../../assets/images/img-earn.png';


const SectionD: React.FC = () => {
  return (
    <ReStyledWrapper>
      <StyledImgSupportSection src={ImgEarn} />
      <StyledWrapContainer style={{ flexDirection: 'column' }}>
        <StyledWrapTextSection className='top'>
          <StyledText className='big-2'>
            How much can I earn in a year?
          </StyledText>
        </StyledWrapTextSection>

        <StyledWrapTextSection className='wrap-text-medium'>
          <StyledText className='medium'>
            With $250 USD of $STASH invested, after 365 days of auto-compounding, you can earn more than
          </StyledText>
        </StyledWrapTextSection>

        <div data-aos="zoom-in-up" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <StyledQuoteBenefit>
            <StyledText className='big'>
              <span>$</span>1,000,000 <span>USD</span>
            </StyledText>
          </StyledQuoteBenefit>
        </div>

        <StyledWrapTextSection >
          <StyledText className='medium-2'>
            of $STASH at {NUMBER_APY_STAKING}<span>%</span> APY*.
          </StyledText>
        </StyledWrapTextSection>


        <StyledWrapTextSection className='bottom' >
          <StyledText className='small'>
            *Earnings are calculated in a scenario where the RFV sustains the rebase reward for 365 days.
          </StyledText>
        </StyledWrapTextSection>

      </StyledWrapContainer>
    </ReStyledWrapper >
  )
}

const ReStyledWrapper = styled(StyledWrapper)`
  padding-bottom: 32px; 

  @media(max-width: 576px) {
    padding-bottom: 32px; 
  }

  @media(max-width: 420px) {
    padding-bottom: 16px; 
  }
`;

const StyledImgSupportSection = styled.img`
  position: absolute;
  top: -30px;
  width: 100%;
  max-width: 60px;

  @media(max-width: 767px) {
    max-width: 45px;
    top: -23px;
  }

  @media(max-width: 420px) {
    max-width: 40px;
    top: -20px;
  }

`

const StyledWrapTextSection = styled.div`
  text-align: center;
  margin-bottom: 36px;
  
  &.top {
    margin-top: 64px;
  }

  &.wrap-text-medium {
    width: 50%;
  }

  &.bottom {
    margin: 4% 0 0;
  }

  @media(max-width: 900px) {
    margin-bottom: 24px;

    &.wrap-text-medium {
      width: 65%;
    }
  }  

  @media(max-width: 767px) {
    &.top {
      margin-top: 32px;
    }
  }
  @media(max-width: 576px) {
    &.wrap-text-medium {
      width: 80%;
    }
  }

  @media(max-width: 420px) {
    &.bottom {
      margin: 16px 0 0;
    }
  }

  
`;

const StyledText = styled.div`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;

  color: ${props => props.theme.colors.white};

  &.big {
    font-size: 180px;
    line-height: 216px;
    transform: translateZ(0);
    backface-visibility: hidden;
  
    span {
      font-size: 130px;
      line-height: 140px;
    }
  }

  &.big-2 {
    font-size: 100px;
    line-height: 92px;
    letter-spacing: 0.02em;

    transform: translateZ(0);
    backface-visibility: hidden;
  }

  &.medium  {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 26px;
    line-height: 36px;
  }

  &.medium-2  {
    font-family: 'Futura Md BT'; // TODO
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 45px;

    span {
      font-size: 26px;
      line-height: 34px;
    }
  }  

  &.small {
    font-family: 'Futura Md BT';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: rgba(255, 255, 255, 0.3);
  }

  @media(max-width: 1400px) {
    &.big {
      font-size: 110px;
      line-height: 140px;
      span {
        font-size: 80px;
        line-height: 80px;
      }
    }

    &.big-2 {
      font-size: 60px;
      line-height: 92px;
      letter-spacing: 0.02em;
    }

    &.medium  {
      font-size: 20px;
      line-height: 26px;
    }

    &.medium-2  {
      font-size: 26px;
      line-height: 34px;

      span {
        font-size: 20px;
        line-height: 24px;
      }
    }  

    &.small {
      font-size: 14px;
      line-height: 20px;
    }
  }



  @media(max-width: 900px) {
    &.big {
      font-size: 80px;
      line-height: 110px;
      span {
        font-size: 55px;
        line-height: 55px;
      }
    }

    &.big-2 {
      font-size: 45px;
      line-height: 40px;
    }

    &.medium  {
      font-size: 16px;
      line-height: 26px;
    }

    &.medium-2  {
      font-size: 22px;
      line-height: 24px;

      span {
        font-size: 20px;
        line-height: 24px;
      }
    }  
  }

  @media(max-width: 660px) {
    &.big {
      font-size: 50px;
      line-height: 50px;
      span {
        font-size: 40px;
        line-height: 40px;
      }
    }

    &.big-2 {
      font-size: 32px;
      line-height: 32px;
    }

    &.medium  {
      font-size: 14px;
      line-height: 20px;
    }

    &.medium-2  {
      font-size: 18px;
      line-height: 20px;

      span {
        font-size: 12px;
        line-height: 12px;
      }
    }  
  }

  
  @media(max-width: 420px) {
    &.big {
      font-size: 40px;
      line-height: 50px;
      span {
        font-size: 32px;
        line-height: 32px;
      }
    }

    &.big-2 {
      font-size: 26px;
      line-height: 26px;
    }

    &.medium  {
      font-size: 14px;
      line-height: 18px;
    }

    &.medium-2  {
      font-size: 18px;
      line-height: 20px;

      span {
        font-size: 12px;
        line-height: 12px;
      }
    }  
    
    &.small {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;


const StyledQuoteBenefit = styled(StyledWrapTextSection)`
  border: 12px solid ${props => props.theme.colors.red};
  border-radius: 999px;
  padding: 16px 40px ;
  width: 100%;
  text-align: center;


  @media(max-width: 1400px) {
    width: 80%;
    border-width: 6px;
    padding: 8px 40px;
  }

  @media(max-width: 910px) {
    width: 90%;
  }

  @media(max-width: 576px) {
    padding: 8px 40px;
    border-width: 4px;
  }

  @media(max-width: 420px) {
    padding: 4px 24px;
    border-width: 3px;
  }

  @media(max-width: 350px) {
    padding: 4px 16px;
    border-width: 3px;
  }
`;

export default SectionD;