import React from 'react';
import styled from 'styled-components';
import { StashButton, StyledTagComing } from '../../styles';
import LogoImg from '../../assets/images/logo.png';
import Navigation from './nav';
import { Link } from 'react-router-dom';
import { urlRoute } from 'src/utils/urlRoute';

const Header: React.FC = () => {

  return (
    <StyledWrapper>
      <StyledContainer>
        <Link to='/'>
          <StyledWrapLogo src={LogoImg} alt="logo website" />
        </Link>
        <StyledWrapNavButton>
          <StyledWrapNav>
            <Navigation />
          </StyledWrapNav>
          <StashButton
            onClick={() => {
              window.open(urlRoute.app, "_blank");
            }}
          >Open App
          </StashButton>
        </StyledWrapNavButton>

      </StyledContainer>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  max-width: ${props => props.theme.maxWidthContainer};
  margin: 0 auto;
`
const StyledContainer = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  }
`;

const StyledWrapLogo = styled.img`
  max-width: 100px;
`;

const StyledWrapNavButton = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin-left: 32px;
  }

  @media(max-width: 767px) {
    button {
      margin-left: 18px;
    }
    
  }
`;

const StyledWrapNav = styled.div`
  display: block;

  @media(max-width: 576px) {
    display: none;
  }
`;


export default Header;