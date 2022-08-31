import React from 'react';
// import VideoCapital from '../../assets/images/stash-city.mp4';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

import IconClose from '../../assets/images/close.svg';
import { Backdrop } from '@material-ui/core';

const ModalCapitalCity: React.FC<{ open: boolean, onDismiss: () => void }> = ({ open, onDismiss }) => {
  return (
    <Modal
      open={open}
      onClose={onDismiss}
      BackdropComponent={Backdrop}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <StyledWrapContent>
        <StyledWrapIconClose onClick={onDismiss} src={IconClose} alt="close" />
        <StyledVideoThumb
          src={"https://stash.capital/static/media/stash-city.19d3a7ebf68f90beaa47.mp4"}
          frameBorder={0}
          allowFullScreen={true}
        />
      </StyledWrapContent>
    </Modal>
  )
}

const StyledVideoThumb = styled.iframe`
  width: 70vw;
  height: 70vh;
  border: none;
  @media(max-width: 767px) {
    width: 90vw;
    height: 50vw;
  }
`;

const StyledWrapIconClose = styled.img`
  position: absolute;
  top: 16.5%;
  right: 16%;
  cursor: pointer;
  width: 30px;
  height: 30px;

  @media(max-width: 767px) {
    top: auto;
    right: 7%;
    margin-top: 10px;
  }
`
const StyledWrapContent = styled.div`
  width: max-content;
  border: 1px solid white;

`
export default ModalCapitalCity;