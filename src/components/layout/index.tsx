import React from 'react';
import styled from 'styled-components';
import BottomBar from './bottomBar';
import Footer from './footer';
import Header from './header';


const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledWrapHeader className='header'>
        <Header />
      </StyledWrapHeader>
      <StyledWrapChild>
        {children}
      </StyledWrapChild>
      <BottomBar />
      <StyledWrapFooter>
        <Footer />
      </StyledWrapFooter>
    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  height: 100vh;
  width: 100%; 
`;
const StyledWrapHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
`
const StyledWrapChild = styled.div`
  flex: 1;
  padding-top: 64px;
  position: relative;
  width: 100%;
`

const StyledWrapFooter = styled.div`
  width: 100%;
  z-index: 1;
`

export default Layout;