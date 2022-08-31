import React from 'react';
import { StyledWrapContainer, StyledWrapper } from 'src/styles';
import styled from 'styled-components';
import AvatarOliver from '../../assets/images/avatar/oliver.png';
import AvatarDarian from '../../assets/images/avatar/darian.png';
import AvatarKris from '../../assets/images/avatar/kris.png';
import AvatarMelinda from '../../assets/images/avatar/melinda.png';
import AvatarTamas from '../../assets/images/avatar/tamas.png';
import AvatarTyler from '../../assets/images/avatar/tyler.png';
import AvatarKyle from '../../assets/images/avatar/kyle.png';
import AvatarPatrick from '../../assets/images/avatar/patrick.png';
import avatarEnzo from '../../assets/images/avatar/enzo.png';




const Leaders = [
  {
    role: "CEO",
    name: "OLIVER maratos",
    description: "Oliver is an accredited business leader, he owns one of Asias largest sports memorabilia companies and has held the role of CSO and CEO in several crypto related companies. He was the CSO of a blockchain development company as far back as 2015, focused on digitising gold on the Bitcoin blockchain. Oliver has owned and operated his own gold mines in West Nusa Tengarra, Indonesia. He is also a charity fund raiser and auctioneer. He has a vast business network spanning many sectors and comes from a very prominent military and NATO family.",
    position: 'left',
    avatar: AvatarOliver
  },
  {
    role: "COO",
    name: "TAMAS pocze",
    description: "Mr. Tamas Pocze, Masters in Economics, leads the role of Chief Operations, an established fund manager, Head of European Operations at Innovative Securities (New Zealand) and led strategic operations for MBI International in Vienna and London, with past experiences in private and investment banking with GE Money and Concorde Securities.",
    position: 'right',
    avatar: AvatarTamas
  },
  {
    role: "chief branding officer",
    name: "MELINDA HEGEDUS",
    description: "Melinda is our chief branding officer with over 10 years of experience in digital marketing and design, having worked with companies like Papa John s and Eaton Hernis. Her skillset is very diverse, ranging from digital illustration and social media marketing to UI and web design. She is also the founder of the vegan brand, Veganiska, which utilizes digital art and social media platforms to raise awareness about environmental issues. Melinda brings with her a wealth of marketing experience and knowledge from several international educational institutions including CLTA, Toronto, Canada; Budapest University of Technology and Economics, Hungary; Arendal Voksenopplcering in Norway and the Vrije University in Amsterdam, the Netherlands.",
    position: 'left',
    avatar: AvatarMelinda
  },
  {
    role: "specialist marketing director",
    name: "KYLE BROADHEAD",
    description: "My Blockchain and Marketing expertise has been used to build a world class cryptocurrency marketing agency alongside my business partner. Our agency has worked with some of the industries biggest projects delivering proven results and return on investment every time. I am also an experienced sales and marketing professional with a solid track record within outbound business to business sales. I have developed a strong commercial acumen and have a proven track record in closing B2B and B2P deals for large acocunts and businesses. This experience has given me an in-depth understanding of the importance of customer service and recognizing the need to balance profitable growth with customer satisfaction.",
    position: 'right',
    avatar: AvatarKyle
  },
  {
    role: "specialist marketing director",
    name: "patrick woods",
    description: "Myself &. business Co founder Kyle combined our professional skills of marketing with of our shared passion of cryptocurrency &. blockchain technology &. we have built up a world leading agency. We have helped numerous projects reach multi million dollar market caps with our proven methods &. strategies this combined with our wealth of industry knowledge, experience &. huge contact database ranging from top influencers to exchange listing managers at top exchanges guaranteeing our clients the maximum returns on investment every time. I am a passionate digital marketer who loves to make plans to introduce products or services to the right people, whilst also I get great satisfaction when making clients happy and feel their excitement during the whole process. I'm able to evaluate campaign results and manage the creative team's work and schedules. A digital-savvy marketer that's able to create and manage the process of engaging audiences, and selling cryptocurrency products or services whilst growing the company's market cap.",
    position: 'left',
    avatar: AvatarPatrick
  },
  {
    role: "senior project lead",
    name: "TYLER",
    description: "Tyler is a senior project lead with vast experience in project management. He is an avid entrepreneur in the crypto space, successfully managed and delivered multiple DeFi platforms and games. He was previously a department head in a global bank spearheading digital banking. Tyler has excellent people management skills and acute knowledge in running an organisation. He will be working alongside with CEO Oli, as a Project Development Lead for Stash. With his experience, he will bring Stash to greater heights.",
    position: 'right',
    avatar: AvatarTyler
  },

  {
    role: "ui/ux designer",
    name: "DARIAN J",
    description: "Darian J is an experienced UI/UX designer. For the past several years, DJ has been designing digital products for industries like banking, hospitality, fashion, healthcare, automotive, and software. With the cryptocurrency space blooming, DJ has been actively involved in the blockchain space. DJ leads a team of like-minded designers to constantly enhance the usability for Stash application, making sure that all users will have an unforgettable experience in Stash.",
    position: 'left',
    avatar: AvatarDarian
  },

  {
    role: "senior full stack developer",
    name: "KRIS LEO",
    description: "Kris Leo is a senior blockchain and full stack developer with core expertise in Frontend, Smart Contract development, DEX, DAPP, NFT, setting up ICOs as well as developing wallet applications and trading bots. He has expertise in React, Vue, Web3.js, Ether.js, Solidity, Rust and Blockchain fundamentals. He is the head developer for Stash, leading a team of 13 senior and junior developers. His team has vast experience in setting up blockchain project, project’s token and writing smart contracts for token and swap development.",
    position: 'right',
    avatar: AvatarKris
  },

  {
    role: "senior 3d artist",
    name: "enzo",
    description: "Enzo is a senior 3D design artist who is talented in creating animated characters and figurines. He has been working with advertising and design firms on video and interactive artworks for over a decade. Enzo fell in love with the idea of NFT and how it is gaining popularity and making masterpieces into digital collectibles for art connoisseurs. Having strong experience in visual and interactive design, Enzo is helping Stash group to create exciting NFT art pieces for the upcoming P2E game and Metaverse StashCity. With his creativity and huge connection in the design space, Stash will definitely be heard globally.",
    position: 'left',
    avatar: avatarEnzo
  }
]

const SectionF: React.FC = () => {

  return (
    <StyledWrapper>
      <StyledWrapContainer style={{ flexDirection: 'column' }}>
        <StyledText className='title'>
          TEAM
        </StyledText>
        {
          Leaders.map(item => (
            <StyledWrapSection isReverse={item.position === 'right'} key={item.name}>
              <StyledWrapAvatarSection>
                <img alt="avatar-oliver" src={item.avatar} />
                <div className='line' />
              </StyledWrapAvatarSection>
              <StyledWrapSectionContent isReverse={item.position === 'right'}>
                <StyledTag className='tag'>
                  {item.role}
                </StyledTag>
                <StyledText className='title-section'>
                  <div className='text'>
                    {item.name}
                  </div>
                  <span className='line' />
                </StyledText>
                <StyledText className='description'>
                  {item.description}
                </StyledText>
              </StyledWrapSectionContent>
            </StyledWrapSection>

          ))
        }
      </StyledWrapContainer>
    </StyledWrapper >
  )
}


const StyledText = styled.div<{ className: "title" | "title-section" | "description" | "tag" }>`
  font-family: 'Bebas Neue';
  font-weight: 400;
  color: #FFFFFF;


  &.title {
    font-size: 325px;
    line-height: 332px;
    letter-spacing: 0.05em;
    text-align: center;
    text-transform: uppercase;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  &.title-section {
    font-size: 80px;
    line-height: 70px;
    text-transform: uppercase;


    position: relative;
    padding: 0 16px 16px;
    margin-bottom: 16px;
    transform: translateZ(0);
    backface-visibility: hidden;
    .text {
      position: relative;
      z-index: 1;
      text-align: center;
      transform: translateZ(0);
      backface-visibility: hidden;

    }
    .line {
      height: 60%;
      width: 100%;
      background: ${({ theme }) => theme.colors.red};
      position: absolute;
      left: 0%;
      bottom: 0;
      transform: translate(0%, -10%);
    }
  }

  &.tag {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 42px;
  }
  &.description {
    font-family: 'Poppins';
    font-weight: 500;

    font-size: 24px;
    line-height: 42px;
    color: rgba(255, 255, 255, 0.75);
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  @media(max-width: 1400px) {
    &.title {
      font-size: 235px;
      line-height: 282px;
    }
  }

  @media(max-width: 1000px) {
    &.title {
      font-size: 185px;
      line-height: 152px;
    }

    &.title-section {
      font-size: 60px;
      line-height: 50px;
      margin-bottom: 0;
      .line {
        height: 50%;
        transform: translate(0%, -30%);
      }
    }

    &.tag {
      font-size: 24px;
      line-height: 35px;
    }
    
    &.description {
      font-size: 20px;
      line-height: 30px;
    }
  }

  @media(max-width: 576px) {
    &.title {
      font-size: 165px;
      line-height: 142px;
    }
  }

  @media(max-width: 420px) {
    &.title {
      font-size: 120px;
      line-height: 102px;
      margin-bottom: -16px;
    }

    &.title-section {
      font-size: 40px;
      line-height: 40px;
      padding: 0 16px 8px;
      .line {
        height: 40%;
        transform: translate(0%, -40%);
      }
    }

    &.tag {
      font-size: 20px;
      line-height: 35px;
    }

    &.description {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;


const StyledTag = styled(StyledText)`
  background: #000000;
  padding: 8px 24px;
  margin-bottom: 16px;
  text-transform: uppercase;
`

const StyledWrapSection = styled.div<{ isReverse: boolean }>`
  display: flex;
  flex-direction: ${({ isReverse }) => isReverse ? 'row-reverse' : 'row'};
  margin: 128px 0;

  @media(max-width: 767px) {
    flex-direction: column;
  }

  @media(max-width: 420px) {
    margin: 64px 0;
  }
`

const StyledWrapSectionContent = styled.div<{ isReverse: boolean }>`
  display: flex;
  flex-direction: column;
  
  align-items: ${({ isReverse }) => isReverse ? 'flex-end' : 'flex-start'};
  text-align:  ${({ isReverse }) => isReverse ? 'right' : 'left'};

  padding: 0 50px;
  position: relative;
  flex: 1;

  @media(max-width: 767px) {
    padding: 0 0;
  }

`

const StyledWrapAvatarSection = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    z-index: 1;
    position: relative;
    max-width: 85%;
  }
  .line {
    width: 95%;
    height: 70px;
    transform: translateY(-70%);
    background: ${({ theme }) => theme.colors.red};
  }

  @media(max-width: 1000px) {
    width: 300px;
    height: 300px;
  }

  @media(max-width: 767px) {
    margin: 0 auto 32px;
  }

  @media(max-width: 576px) {
    width: 250px;
    height: 250px;
  }

  @media(max-width: 420px) {
    width: 200px;
    height: 200px;
  }
`

export default SectionF;
