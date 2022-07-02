import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const PrimaryButton = styled(Button)<{ height?: string }>`
  box-sizing: border-box;

  margin: 10px 0 !important;
  padding: 0 30px !important; 
  height: ${(props) => props.height ?? "40px"};

  background: linear-gradient(103.83deg, #000aff -4.16%, #ff007a 100.2%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) =>
    props.height
      ? Number(props.height.slice(0, -2)) / 2 + "px"
      : "20px"} !important;
  color: white !important;
`;

export default PrimaryButton;
