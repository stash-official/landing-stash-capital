import React from 'react';
import styled from 'styled-components';

import IconTelegram from '../../assets/images/telegram.svg';
import IconTwitter from '../../assets/images/twitter.svg';
import IconDiscord from '../../assets/images/discord.svg';
import IconMedium from '../../assets/images/medium.svg';
import IconReddit from '../../assets/images/reddit.svg';
import { urlRoute } from 'src/utils/urlRoute';


const arrLinkSocial = [
  {
    icon: IconTwitter,
    url: urlRoute.twitter,
  },
  {
    icon: IconDiscord,
    url: urlRoute.discord,
  },
  {
    icon: IconMedium,
    url: urlRoute.medium,
  },
  {
    icon: IconTelegram,
    url: urlRoute.telegram,
  },
  {
    icon: IconReddit,
    url: urlRoute.reddit,
  },

]

const Footer: React.FC = () => {


  return (
    <StyledWrapper>
      <StyledText className="big">
        Keep In Touch
      </StyledText>

      <StyledWrapLinkSocial>
        {arrLinkSocial.map(item => (
          <a href={item.url} target="_blank" key={item.url}>
            <StyedWrapIconSocial src={item.icon} alt={"icon" + item.url} />
          </a>
        ))}

      </StyledWrapLinkSocial>
      <StyledText className='small'>
        Copyright © 2022. All rights reserved.
      </StyledText>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 64px 0 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${props => props.theme.colors.black[100]};

  color: ${props => props.theme.colors.white};

  box-shadow: 0 -30px 40px  rgba(0,0,0,0.55);

  @media(max-width: 576px) {
    padding-bottom: 100px;
  }

`;

const StyledText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  
  /* or 140% */

  &.big {
    font-weight: 500;
    font-size: 45px;
    line-height: 63px;
  }

  &.small {
    font-size: 14px;
    line-height: 17px;
  }

  @media(max-width: 900px) {
    &.big {
      font-size: 40px;
      line-height: 50px;
    }
  }

  @media(max-width: 450px) {
    &.big {
      font-size: 40px;
      line-height: 50px;
    }
  }
`;

const StyledWrapLinkSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin: 4% 0 8%;

  a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  }

  @media(max-width: 1200px) {
    width: 60%;
  }

  @media(max-width: 767px) {
    margin: 40px 0 80px;
  }

  @media(max-width: 450px) {
    padding: 8px 0 40px;
    width: 70%;
  }
`;

const StyedWrapIconSocial = styled.img`
  max-width: 50px;

  @media(max-width: 900px) {
    max-width: 35px;
  }

  @media(max-width: 450px) {
    max-width: 30px;
  }
`;

export default Footer;