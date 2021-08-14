import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import {
    EMPHASIS_FONT_COLOR,
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_FONT_COLOR,
  PRIMARY_SELECTION_COLOR,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_FONT_COLOR,
  SECONDARY_SELECTION_COLOR,
} from '../constants/colors';

const PopUpWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopUpWindow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 35%;
  height: 40%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background-color: #fff;
  opacity: 1;

  @media screen and (max-width: 768px) {
    width: 60%;
    height: 50%;
  }

  @media screen and (max-width: 420px) {
    width: 80%;
    height: 40%;
  }
`;

const Message = styled.div`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  margin-top: 2em;

  @media screen and (max-width: 768px) {
    margin-top: 10em;
  }

  @media screen and (max-width: 420px) {
    margin-top: 3em;
  }
`;

const CloseIcon = styled.span`
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0.5em;
  margin-right: 0.5em;
  color: ${PRIMARY_BACKGROUND_COLOR};

  &:hover {
    color: ${SECONDARY_BACKGROUND_COLOR};
    border-bottom: 3px solid ${EMPHASIS_FONT_COLOR};
    transition: border-bottom 0.2s ease-in-out;
    padding-bottom: 5px;
  }
`;

const EnterSiteButton = styled.button`
  color: ${PRIMARY_BACKGROUND_COLOR};
  background-color: ${EMPHASIS_FONT_COLOR};
  margin-bottom: 10%;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  width: 20%;

  &:hover {
    color: ${SECONDARY_BACKGROUND_COLOR};
    background-color: ${SECONDARY_SELECTION_COLOR};
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0.5px 5px ${SECONDARY_BACKGROUND_COLOR};
  }
`;

export const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const closePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return showPopUp ? (
    <PopUpWrapper>
      <PopUpWindow>
        <CloseIcon onClick={closePopUp}>&times;</CloseIcon>
        <Message>
          <h1>Welcome!</h1>
          <br />
          <br />
          <p>Thanks for visiting my site.</p>
          <p>
            I have developed this site using React w/ hooks, Emotion for styled
            components and Nx build framework to support a monorepo of all
            future projects I take on.
          </p>
        </Message>
        <EnterSiteButton onClick={closePopUp}>Enter Site!</EnterSiteButton>
      </PopUpWindow>
    </PopUpWrapper>
  ) : (
    <></>
  );
};
