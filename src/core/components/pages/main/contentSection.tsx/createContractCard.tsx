import React, { useState } from "react";
import styled from "styled-components";
import { AccountCircleRounded } from "@mui/icons-material";
import {
  Grid,
  Input,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  Chip,
} from "@mui/material";
import PrimaryButton from "../../../ui/PrimaryButton";
import Card from "../../../ui/Card";

const StyledInput = styled(TextField)`
  border-radius: 30px !important;
`;

const CreateContractCard = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const handleCategoriesChange = (
    event: SelectChangeEvent<typeof categories>
  ) => {
    const {
      target: { value },
    } = event;
    setCategories(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <AccountCircleRounded sx={{ fontSize: "50px" }} color="disabled" />
        </Grid>
        <Grid item xs={11}>
          {/* <StyledInput
            placeholder="What do you want to validate?"
            fullWidth
            variant="filled"
            sx={{ borderRadius: 30 }}
          /> */}
          <Input
            placeholder="What do you want to validate?"
            fullWidth
            disableUnderline={true}
            multiline={true}
            sx={{
              borderRadius: "20px",
              bgcolor: "lightgray",
              border: "none",
              px: 2,
              my: "5px",
              height: "40px",
            }}
          />
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ ml: 2, width: 180 }}
              >
                <Select
                  disableUnderline={true}
                  multiple
                  displayEmpty
                  value={categories}
                  renderValue={(selected: string[]) => {
                    if (selected.length === 0) {
                      return (
                        <Typography color="tertiary.main">
                          Select Categories
                        </Typography>
                      );
                    }
                    return (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    );
                  }}
                  // MenuProps={MenuProps}
                  onChange={handleCategoriesChange}
                >
                  <MenuItem disabled value="">
                    <em>Select Categories</em>
                  </MenuItem>
                  <MenuItem value="aa">Ten</MenuItem>
                  <MenuItem value="bb">Twenty</MenuItem>
                  <MenuItem value="cc">Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <PrimaryButton>CreateContact</PrimaryButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CreateContractCard;
