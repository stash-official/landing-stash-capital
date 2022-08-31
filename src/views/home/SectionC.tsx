import React from 'react';
import { StashButton, StyledTagComing, StyledWrapContainer, StyledWrapper } from 'src/styles';
import { urlRoute } from 'src/utils/urlRoute';
import styled from 'styled-components';

const SectionC: React.FC = () => {
  return (
    <ReStyledWrapper>
      <StyledWrapContainer style={{ flexDirection: 'column', position: 'relative' }}>

        <StyledLine className='line-1' />


        <StyledWrapContentText>
          <StyledText className='small'>
            Stash rewards holders with
          </StyledText>
          <StyledText className='big'>
            <div data-aos="zoom-in">
              The best
            </div>
          </StyledText>

          <StyledText className='big-2'>
            compounding interest < br />
            on avalanche
          </StyledText>


          <StyledText className='medium'>
            increasing Your STASH at <br />
            an exciting rate.
          </StyledText>
          <StyledLine className='line-2' />
          <ReStyledButton
            onClick={() => {
              window.open(urlRoute.app, "_blank");
            }}
          >Open App
          </ReStyledButton>
        </StyledWrapContentText>
      </StyledWrapContainer>
    </ReStyledWrapper >
  )
}

const ReStyledWrapper = styled(StyledWrapper)`

`;
const ReStyledButton = styled(StashButton)`
  margin: 10% 24px;

  font-size: 28px;
  width: 250px;
  height: 70px;

  @media(max-width: 900px) {
    font-size: 24px;
    width: 200px;
    height: 55px;
  }

  @media(max-width: 576px) {
    font-size: 16px;
    width: auto;
    height: auto;
    margin: 12px;
  }

`
const StyledWrapContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  position: relative;
`

const StyledText = styled.div`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  text-align: right;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  padding-right: 24px;
  
  &.big {
    font-size: 280px;
    line-height: 290px;
    margin-bottom: -16px;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  &.big-2 {
    font-size: 140px;
    line-height: 160px;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  &.medium {
    font-size: 60px;
    line-height: 70px;
  }

  &.small {
    font-size: 64px;
    line-height: 64px;
  }


  @media(max-width: 1200px) {
    &.big {
      font-size: 220px;
      line-height: 240px;
      margin-bottom: -24px;
    }

    &.big-2 {
      font-size: 100px;
      line-height: 110px;
    }

    &.medium {
      font-size: 50px;
      line-height: 50px;
    }

    &.small {
      font-size: 40px;
      line-height: 30px;
    }
  }

  @media(max-width: 900px) {
    padding-right: 12px;

    &.big {
      font-size: 170px;
      line-height: 180px;
      margin-bottom: -8px;
    }

    &.big-2 {
      font-size: 80px;
      line-height: 90px;
    }

    &.medium {
      font-size: 50px;
      line-height: 60px;
    }

    &.small {
      font-size: 40px;
      line-height: 50px;
    }
  }

  @media(max-width: 767px) {
    &.big {
      font-size: 130px;
      line-height: 140px;
      margin-bottom: -16px;
    }

    &.big-2 {
      font-size: 50px;
      line-height: 60px;
    }

    &.medium {
      font-size: 30px;
      line-height: 40px;
    }

    &.small {
      font-size: 30px;
      line-height: 30px;
    }
  }

  @media(max-width: 450px) {
    &.big {
      font-size: 100px;
      line-height: 110px;
      margin-bottom: -12px;
    }

    &.big-2 {
      font-size: 30px;
      line-height: 30px;
    }

    &.medium {
      font-size: 20px;
      line-height: 25px;
    }

    &.small {
      font-size: 20px;
      line-height: 15px;
    }
  }

  @media(max-width: 350px) {
    &.big {
      font-size: 80px;
      line-height: 90px;
      margin-bottom: -8px;
    }
  }

`;


const StyledLine = styled.div`
  background: ${props => props.theme.colors.red};
  position: absolute;
  &.line-2 {
    bottom: -12%;
    right: -30px;
    width: 20px; 
    height: 112%;

  }

  &.line-1 {
    bottom: -13%;
    left: 0;
    width: 150px; 
    height: 30%;
  }

  @media(max-width: 900px) {
    &.line-2 {
      right: -10px;
      width: 10px;
    }

    &.line-1 {
      width: 100px
    }
  }

  @media(max-width: 576px) {
    &.line-2 {
      top: -30%;
      height: 135%;
    }

    &.line-1 {
      width: 70px
    }
  }

`
export default SectionC;