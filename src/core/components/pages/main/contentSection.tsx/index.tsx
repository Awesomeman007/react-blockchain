import React from "react";
import FeedCard from "./feedCardContainer/feedCard";
import styled from "styled-components";
import CreateContractCard from "./createContractCard";
import FeedCardContainer from "./feedCardContainer";

const Container = styled.div`
  padding: 20px;
`;

const ContentSection = () => {
  return (
    <Container>
      <CreateContractCard />
      <FeedCardContainer />
    </Container>
  );
};

export default ContentSection;
