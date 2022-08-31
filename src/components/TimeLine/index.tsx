import React from 'react';
import { clientWithBreakDown, StyledBulletCircle } from 'src/styles';
import styled, { CSSProperties } from 'styled-components';

const TimeLine: React.FC<{ children: any, style?: CSSProperties, className?: string, position?: 'left' | 'right' }> = ({ style, className, children, position }) => {
  return (
    <StyledItemTimeLine className={`${className} time-line`} position={position} style={style}>
      <StyledCircleLine className='circle'>
        {className === 'top' && (<StyledLine className='line-top' />)}
        <StyledBulletCircle />
        <StyledLine />
      </StyledCircleLine>
      <StyledContentTimeLine position={position} className='content'>
        {children}
      </StyledContentTimeLine>
    </StyledItemTimeLine>
  )
}


const StyledItemTimeLine = styled.div<{ position: 'left' | 'right' }>`
  display: flex;
  align-items: flex-start;
  .circle {
    transform: translate(${props => props.position === 'right' ? '0' : '-50%'}, 0);
  }
  
  &.top {
    .circle {
      transform: translate(${props => props.position === 'right' ? '0' : '-50%'}, -28%);
      height:140%;
      margin-top: 0;
      .line-top {
        height: 46%;
      }
    }
  }

  

  @media(max-width: 420px) {
    &.top {
      .circle {
        height:116%;
        transform: translate(${props => props.position === 'right' ? '0' : '-50%'}, -14%);
        .line-top {
          height: 20%;
        }
      }
    }
  }


  @media(max-width: 420px) {
    &.top {
      .circle {
        height:116%;
        transform: translate(${props => props.position === 'right' ? '0' : '-50%'}, -14%);
        .line-top {
          height: 20%;
        }
      }
    }
  }
`
const StyledCircleLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 50px;

`
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

const StyledContentTimeLine = styled.div<{ position: 'left' | 'right' }>`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 20px;
  color: ${props => props.theme.colors.white};
  margin-left: ${props => props.position === 'right' ? '0' : '40px'};
  margin-right: ${props => props.position === 'right' ? '40px' : '0'};
  text-align: ${props => props.position};

  padding-bottom: 128px;

  @media(max-width: 1600px) {
    padding-bottom: 40px;
  }
  
  @media(max-width: ${clientWithBreakDown}) {
    margin-left: ${props => props.position === 'right' ? '0' : '20px'};
    margin-right: ${props => props.position === 'right' ? '20px' : '0'};
  }

  @media(max-width: 420px) {
    font-size: 16px;
  }
`;

export default TimeLine;