import React from "react";
import styled from "styled-components";

const Card = styled.div<{ pb?: string }>`
  background: #ffffff;
  box-shadow: 0px 5px 11px 1px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  width: 84%;
  margin-left: 8%;
  margin-right: 8%;
  min-height: 100px;
  margin-top: 30px;
  padding: 30px;
  padding-bottom: ${(props) => props.pb ?? undefined};
`;

export default Card;
