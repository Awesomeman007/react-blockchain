import { Grid } from "@mui/material";
import React, { useState } from "react";
import withUserGuard from "../../../guards/user.guard";
import ContentSection from "./contentSection.tsx";
import CreateContractModal from "./createContractModal";
import InfoSection from "./infoSection.tsx";

const Main = () => {
  const [isCreateContractModalOpen, setIsCreateContractModalOpen] = useState<boolean>(false)

  return (
    <>
      <CreateContractModal isOpen={isCreateContractModalOpen} setIsOpen={setIsCreateContractModalOpen} />
      <Grid container>
        <InfoSection isCreateContractModal={isCreateContractModalOpen} setIsCreateContractModal={setIsCreateContractModalOpen} />
        <Grid item xs={4}></Grid>
        <Grid item xs={8}>
          <ContentSection />
        </Grid>
      </Grid>
    </>
  );
};

export default withUserGuard(Main);
