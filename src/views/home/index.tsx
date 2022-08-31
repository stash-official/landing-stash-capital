import React from 'react';
import styled from 'styled-components';

// Components Section

import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionBank from './SectionBank';
import SectionC from './SectionC';
import SectionD from './SectionD';
import SectionE from './SectionE';
import SectionF from './SectionF';
import SectionMeta from './SectionMeta';




const Home: React.FC = () => {

  return (
    <StyledWrapper>
      <StyledSection>
        <StyledWrapBgSection className='section-a'>
          <SectionA />
        </StyledWrapBgSection>
      </StyledSection>

      <StyledSection style={{ zIndex: 2 }}>
        <StyledWrapBgSection className='section-meta'>
          <SectionMeta />
        </StyledWrapBgSection>
      </StyledSection>

      <StyledSection style={{ zIndex: 3 }}>
        <StyledWrapBgSection className='section-bank'>
          <SectionBank />
        </StyledWrapBgSection>
      </StyledSection>

      <StyledSection style={{ zIndex: 1 }}>
        <StyledWrapBgSection className='section-b'>
          <SectionB />
        </StyledWrapBgSection>
      </StyledSection>

      <StyledSection>
        <StyledWrapBgSection className='section-c'>
          <SectionC />
        </StyledWrapBgSection>
      </StyledSection>

      <StyledSection style={{ zIndex: 1 }}>
        <StyledWrapBgSection className='section-d'>
          <SectionD />
        </StyledWrapBgSection>
      </StyledSection>

      <StyledSection>
        <StyledWrapBgSection className='section-e'>
          <SectionE />
        </StyledWrapBgSection>
      </StyledSection>

      <StyledSection>
        <StyledWrapBgSection className='section-f'>
          <SectionF />
        </StyledWrapBgSection>
      </StyledSection>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  max-width: 2560px;
  width: 100%;
  margin: 0 auto;
  margin-top: -64px;

  overflow: hidden;
`

const StyledSection = styled.div`
  margin: 0px auto;
  width: 100%;

  position: relative;
`;

const StyledWrapBgSection = styled.div`
  height: max-content;

  &.section-a {
    padding-top: 64px;
    transform: none;
    background: linear-gradient(20.04deg, #C9C9C9 -119.59%, #000000 61.49%);
  }

  &.section-meta {
    background: linear-gradient(208.02deg, #434343 4.55%, #000000 67.91%);
    box-shadow: 0px -50px 90px rgba(0, 0, 0, 0.65);

  }
  
  &.section-bank {
    background: linear-gradient(158.51deg, #434343 -0.33%, #000000 50.89%);
    box-shadow: 0px 50px 70px rgba(0, 0, 0, 0.7), 0px 0 0;
  }

  &.section-b {
    background: linear-gradient(160.3deg, #3D3D3D -2.38%, #000000 93.82%);
    box-shadow: 0px -60px 40px rgba(0, 0, 0, 0.60), 0px 60px 40px rgba(0, 0, 0, 0.55);
  }

  &.section-c {
    background: linear-gradient(196.97deg, #737373 -60.21%, #000000 72.34%);
  }

  &.section-d {
    background: linear-gradient(140.75deg, #333333 -35.86%, #0C0C0C 111.45%);
    box-shadow: 0px -65px 40px rgba(0, 0, 0, 0.6), 0px 75px 30px rgba(0, 0, 0, 0.5);

  }

  &.section-e {
    background: linear-gradient(14.96deg, #5A5A5A -25.62%, #000000 74.33%);
  }

  &.section-f {
    background: linear-gradient(199.68deg, #5A5A5A -6.91%, #000000 44.54%, #252525 104.1%);
    box-shadow: 0px -65px 80px rgba(0, 0, 0, 0.35);
  }


  
  @media(max-width: 420px){
    
  }
  
`
export default Home;