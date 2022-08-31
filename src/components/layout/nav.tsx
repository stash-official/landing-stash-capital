import React, { useMemo } from 'react';
import styled from 'styled-components';
import { urlRoute } from '../../utils/urlRoute';

export const navigationLink = [
  {
    name: "DOCS",
    url: urlRoute.whitePaper,
  },
  {
    name: "DISCORD",
    url: urlRoute.discord,
  },
  {
    name: "TELEGRAM",
    url: urlRoute.telegram,
  }
]



const Navigation: React.FC<{ bottomBar?: boolean }> = ({ bottomBar = false }) => {
  const renderNav = useMemo(() => navigationLink.map(item => (
    <StyledNav
      key={item.name}
      onClick={() => {
        window.open(item.url, '_blank')
      }}
    >
      {item.name}
    </StyledNav>
  )), []);

  return (
    <StyledWrapNav>
      {renderNav}
    </StyledWrapNav>
  )
}
const StyledWrapNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  @media(max-width: 576px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const StyledNav = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  margin:0  32px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  position: relative;
  
  @media(min-width: 1250px) {
    &:after{
      content: '';
      position: absolute;
      border-bottom: 1px solid red;
      bottom: -8px;
      left: 0;
      right: 100%;
      transition: all .2s;
    }

    &:hover:after{
      right: 0;
    }
  }



  @media(max-width: 767px) {
    margin:0 18px;
  }

  @media(max-width: 420px) {
    font-size: 14px;
  }
`;


export default Navigation;