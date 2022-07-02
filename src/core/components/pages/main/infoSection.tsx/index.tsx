import { Button, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import COLORS from "../../../../constants/colors";
// import StyledButton from "../../../ui/StyledButton";

const Container = styled.div`
  height: 100vh;
  width: 30%;
  background-color: ${COLORS.backgroundSecondary};
  position: fixed;
  left: 0;
  padding: 50px;
`;

const StyledButton = styled(Button)`
  box-sizing: border-box !important;

  background: #ffffff !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  border-radius: 30px !important;

  border: solid 3px transparent !important;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #000aff, #ff007a) !important;
  background-origin: border-box !important;
  background-clip: content-box, border-box !important;
  box-shadow: 3px 1000px 1px #fff inset !important;
  height: 50px !important;

  &:hover,
  &:focus {
    box-shadow: none !important;
    color: white;
  }
`;

const StyledSection = styled.div`
  height: 65%;
`;

interface InfoSectionProps {
  isCreateContractModal: boolean;
  setIsCreateContractModal: (isCreateContractModal: boolean) => void;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  isCreateContractModal,
  setIsCreateContractModal,
}) => {
  return (
    <Container>
      <StyledSection>
        <Typography align="left">What's on the trend</Typography>
        <Button color="subtext" fullWidth sx={{p: 2, display: "block"}}>
          <Typography textAlign="left">HK 9988 over USD 120?</Typography>
        </Button>
        <Button color="subtext" fullWidth sx={{p: 2, display: "block"}}>
          <Typography textAlign="left">HK 9988 over USD 120?</Typography>
        </Button>
        <Button color="subtext" fullWidth sx={{p: 2, display: "block"}}>
          <Typography textAlign="left">HK 9988 over USD 120?</Typography>
        </Button>
        <Button color="subtext" fullWidth sx={{p: 2, display: "block"}}>
          <Typography textAlign="left">HK 9988 over USD 120?</Typography>
        </Button>
      </StyledSection>
      <StyledButton
        fullWidth
        color="secondary"
        onClick={() => setIsCreateContractModal(!isCreateContractModal)}
      >
        Create Contract
      </StyledButton>
      <Typography align="left">CONTACT US</Typography>
      <Typography align="left">creator@majoritytruth.com</Typography>
    </Container>
  );
};

export default InfoSection;
