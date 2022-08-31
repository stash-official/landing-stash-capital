import React from "react";
import styled from "styled-components";
import Navigation from "./nav";

const BottomBar: React.FC = () => {
  return (
    <StyledNavigationContainer>
      <Navigation />
    </StyledNavigationContainer>
  );
};

const StyledNavigationContainer = styled.div`
  display: none;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 10000000000;
  width: 100%;

  @media (max-width: 576px) {
    display: flex;
    width: 100%;

    background: linear-gradient(170deg,#3D3D3D 5.62%,#000000 100%);
    box-shadow: 0px -30px 40px 2px rgba(0,0,0,0.55), 0px 40px 30px rgba(0, 0, 0, 0.55);
  }
`;

export default BottomBar;
