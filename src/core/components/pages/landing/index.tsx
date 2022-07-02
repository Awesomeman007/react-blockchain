import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "../../ui/StyledButton";
import landingOne from "../../../assets/images/landing1.svg";
import landingTwo from "../../../assets/images/landing2.svg";
import landingThree from "../../../assets/images/landing3.svg";
import LoginModal from "./authModals/loginModal";
import AuthModals from "./authModals";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: #f9f1ff;
  overflow: hidden;
`;

const CircleOne = styled.div`
  position: absolute;
  width: 1002.59px;
  height: 1137.28px;
  left: 0;
  top: 0;

  background: rgba(0, 10, 255, 0.25);
  filter: blur(800px);
  transform: rotate(-61.89deg);
`;

const CircleTwo = styled.div`
  position: absolute;
  width: 1009.79px;
  height: 1065.93px;
  left: 1019px;
  top: 301.12px;

  background: rgba(255, 10, 122, 0.25);
  filter: blur(500px);
  transform: rotate(-31.6deg);
`;

const CircleThree = styled.div`
  position: absolute;
  width: 639.74px;
  height: 683.44px;
  left: 555px;
  top: 1156px;

  background: rgba(255, 10, 122, 0.25);
  filter: blur(800px);
  transform: rotate(-31.6deg);
`;

const InfoContainer = styled.div``;

const ImageContainer = styled.div``;

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"login" | "signup">();

  const handleLoginButton = () => {
    setIsModalOpen(true);
    setModalType("login");
  };

  const handleSignupButton = () => {
    setIsModalOpen(true);
    setModalType("signup");
  };

  return (
    <Background>
      <AuthModals
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        type={modalType}
        setType={setModalType}
      />
      <CircleOne />
      <CircleTwo />
      <CircleThree />
      <Grid container alignItems="center" height="100vh">
        <Grid item xs={7} padding={15}>
          <Typography textAlign="left">Majority Truth</Typography>
          <Typography textAlign="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero
            orci, porta id felis in, pulvinar ultrices arcu. Pellentesque ac
            mollis orci. Mauris dignissim mauris quis orci aliquet eleifend.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.{" "}
          </Typography>
          <StyledButton onClick={handleLoginButton}>Log in</StyledButton>
          <StyledButton onClick={handleSignupButton}>Sign up</StyledButton>
        </Grid>
        <Grid item xs={5} height="100%">
          <img style={{ right: 0, position: "absolute" }} src={landingOne} />
          <img
            style={{ right: 0, top: 200, position: "absolute" }}
            src={landingTwo}
          />
          <img
            style={{ right: 0, bottom: -50, position: "absolute" }}
            src={landingThree}
          />
        </Grid>
      </Grid>
      {/* <InfoContainer> */}
      {/* <Typography>Majority Truth</Typography>
        <StyledButton>Log in</StyledButton>
        <StyledButton>Sign up</StyledButton> */}
      {/* </InfoContainer> */}
      {/* <ImageContainer>

      </ImageContainer> */}
    </Background>
  );
};

export default Landing;
