import { Button, Grid, Typography, SvgIcon } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { AccountCircleRounded } from "@mui/icons-material";
import COLORS from "../../../../../constants/colors";
import Card from "../../../../ui/Card";
import { ContractInterface } from "../../../../dto/contract.dto";
// import { PROFILE } from "../../../../constants/icons";
// import profile from "../../../../assets/icons/profile.svg";

const primaryActions = [
  {
    icon: "",
    value: "vote",
    display: "VOTE",
  },
  {
    icon: "",
    value: "challenge",
    display: "CHALLENGE",
  },
];

const secondaryActions = [
  {
    icon: "",
    value: "comment",
    display: "COMMENT",
  },
  {
    icon: "",
    value: "share",
    display: "SHARE",
  },
];

const FeedCard: React.FC<ContractInterface> = (props) => {
  return (
    <Card pb="10px">
      <Grid container spacing={2}>
        <Grid item>
          <AccountCircleRounded sx={{ fontSize: "50px" }} color="disabled" />
        </Grid>
        <Grid item>
          <Typography align="left">{props.creatorId.displayName}</Typography>
          <Typography align="left">{`${props.expiryDateTime}`}</Typography>
        </Grid>
      </Grid>

      <Typography align="left">
        {props.content}
      </Typography>
      <Typography align="left">Contract Status: {props.contractStatus} - {props.contractValue} {props.contractCurrency}</Typography>
      <hr />
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid container direction="row">
            {primaryActions.map((action) => {
              return (
                <Grid item key={action.value}>
                  <Button color="subtext" sx={{px: 3}}>
                    {action.display}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            {secondaryActions.map((action) => {
              return (
                <Grid item key={action.value}>
                  <Button color="subtext" sx={{px: 3}}>
                    {action.display}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FeedCard;
