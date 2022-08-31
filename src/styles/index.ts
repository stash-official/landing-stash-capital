import styled from "styled-components";

export const theme = {
  maxWidthContainer: "2560px",
  colors: {
    white: "#FFFFFF",
    grey: "rgba(255, 255, 255, 0.3);",
    red: "#EA1C1C",
    black: {
      100: "#121213",
    },
    shadowLeft: "#c71818",
    shadowRight: "#ff2020",
  },
};

export const StyledText = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 26px;
`;

export const StashButton = styled.button`
  padding: 8px 24px;
  border: 2px solid ${(props) => props.theme.colors.red};
  outline: none;
  color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  background: transparent;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  font-size: 20px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:not([class*="disable"]) {
    @media (min-width: 1200px) {
      &:hover {
        background: ${(props) => props.theme.colors.red};
      }

      &:active {
        filter: brightness(0.8);
        background: ${(props) => props.theme.colors.red};
      }
    }

    @media (max-width: 420px) {
      font-size: 16px;
    }
  }
`;

export const StyledBulletCircle = styled.div`
  border: 1px solid ${(props) => props.theme.colors.white};
  box-sizing: border-box;
  border-radius: 50%;

  min-width: 24px;
  min-height: 24px;
  position: relative;
  z-index: 1;
  &::after {
    content: " ";
    background: ${(props) => props.theme.colors.red};
    box-sizing: border-box;
    height: 12px;
    width: 12px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  @media (max-width: 420px) {
    min-width: 20px;
    min-height: 20px;
    &::after {
      height: 8px;
      width: 8px;
    }
  }
`;

export const StyledTagComing = styled.div`
  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;

  padding: 2px 12px;
  width: max-content;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 80%);
  border-radius: 99px;
`;

export const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 128px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 420px) {
    padding: 64px 0;
  }
`;

export const StyledWrapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1280px;

  @media (max-width: 576px) {
    width: calc(100% - 48px);
  }
`;

export const clientWithBreakDown = "1100px";

export const shadowFlatNeumorphism = `10px 10px 40px #c71818,-10px -10px 40px #ff2020`;

export const shadowFlatPressNeumorphism = ` -2px -2px 7px ${theme.colors.shadowLeft},
2px 2px 7px ${theme.colors.shadowRight}`;

export const shadowPressedNeumorphism = `inset -20px -20px 60px ${theme.colors.shadowLeft},
inset 5px 5px 60px ${theme.colors.shadowRight}`;
