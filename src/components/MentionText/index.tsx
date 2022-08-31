import React from 'react';
import { StyledBulletCircle } from 'src/styles';
import styled from 'styled-components';



const MentionText: React.FC<{ children: any }> = ({ children }) => {


  return (
    <StyledWrapper>
      <StyledWrapCircleLineRow>
        <StyledBulletCircle />
        <StyledLine className='row' />
      </StyledWrapCircleLineRow>

      <StyledWrapContent>
        {children}
      </StyledWrapContent>

      <StyledWrapCircleLineRow>
        <StyledLine className='row' />
        <StyledBulletCircle />
      </StyledWrapCircleLineRow>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

`
const StyledWrapCircleLineRow = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

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


const StyledWrapContent = styled.div`
  padding: 0 40px;
  text-align: center;
 
  @media(max-width: 1300px) {
    flex: 1;
  }
  @media(max-width: 420px) {
    padding: 0 16px;
  }

`

export default MentionText;