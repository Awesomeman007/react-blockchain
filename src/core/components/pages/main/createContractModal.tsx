import { AccountCircleRounded } from "@mui/icons-material";
import {
  Box,
  Chip,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import request, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { client } from "../../../../axiosConfig";
import PrimaryButton from "../../ui/PrimaryButton";
import StyledModal from "../../ui/StyledModal";

interface ContractInterface {
  content: string;
  categories: string[];
  expiryDateTime: string;
  contractValue: number;
  contractCurrency: string;
}

interface ContractProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateContractModal: React.FC<ContractProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    register,
    formState: { errors, isValid },
  } = useForm<ContractInterface>({ mode: "onChange" });

  const onSubmit = async (payload: ContractInterface) => {
    payload.contractCurrency = "ETH";
    payload.contractValue = isNaN(parseInt(`${payload.contractValue}`))
      ? 0
      : parseInt(`${payload.contractValue}`);
    console.log(typeof payload.contractValue);
    console.log(payload);
    try {
      const res = await client.post("/contract", payload);
      console.log("done");
    } catch (error) {
        if (request.isAxiosError(error) && error.response)
        console.log(error.response.data);
    }
  };

  return (
    <>
      <StyledModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Typography align="center">Create Contract</Typography>
        <Grid container alignItems="center">
          <Grid item>
            <AccountCircleRounded sx={{ fontSize: "50px" }} color="disabled" />
          </Grid>
          <Grid item>
            <Typography align="center">Somchai Chokdee</Typography>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={({ field: { name, value, onChange } }) => (
              <TextField
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                variant="standard"
                fullWidth
                multiline
                placeholder="What do you want to validate?"
                error={Boolean(errors["content"])}
                helperText={errors["content"] ? errors["content"].message : " "}
                InputProps={{ disableUnderline: true }}
              />
            )}
            control={control}
            name="content"
            defaultValue=""
            rules={{ required: { value: true, message: "Invalid input" } }}
          />
          <Controller
            render={({ field: { name, value, onChange } }) => (
              <Select
                name={name}
                disableUnderline={true}
                multiple
                fullWidth
                displayEmpty
                value={value}
                error={Boolean(errors["categories"])}
                renderValue={(selected: string[]) => {
                  if (selected.length === 0) {
                    return (
                      <Typography color="tertiary.main" align="left">
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
                onChange={onChange}
              >
                <MenuItem disabled value="">
                  <em>Select Categories</em>
                </MenuItem>
                <MenuItem value="sport">Sport</MenuItem>
              </Select>
            )}
            control={control}
            name="categories"
            defaultValue={[]}
            rules={{ required: { value: true, message: "Invalid input" } }}
          />
          <Grid container spacing={2} marginY={1}>
            <Grid item>
              <Controller
                render={({ field: { name, value, onChange } }) => (
                  <TextField
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    variant="filled"
                    fullWidth
                    placeholder="End date"
                    error={Boolean(errors["expiryDateTime"])}
                    helperText={
                      errors["expiryDateTime"]
                        ? errors["expiryDateTime"].message
                        : " "
                    }
                    InputProps={{ disableUnderline: true }}
                  />
                )}
                control={control}
                name="expiryDateTime"
                defaultValue=""
                rules={{ required: { value: true, message: "Invalid input" } }}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field: { name, value, onChange } }) => (
                  <TextField
                    id={name}
                    name={name}
                    value={value}
                    // onChange={e => onChange(parseInt(e.target.value))}
                    onChange={onChange}
                    type="number"
                    variant="filled"
                    fullWidth
                    placeholder="Price"
                    error={Boolean(errors["contractValue"])}
                    helperText={
                      errors["contractValue"]
                        ? errors["contractValue"].message
                        : " "
                    }
                    InputProps={{
                      disableUnderline: true,
                      inputMode: "numeric",
                    }}
                  />
                )}
                control={control}
                name="contractValue"
                defaultValue={0}
                rules={{
                  required: { value: true, message: "Invalid input" },
                  validate: {
                    value: (value) =>
                      parseInt(`${value}`) > 0 ||
                      "Value must be greater than 0",
                  },
                }}
              />
            </Grid>
          </Grid>
          <PrimaryButton type="submit" disabled={!isValid}>
            Create
          </PrimaryButton>
        </form>
      </StyledModal>
    </>
  );
};

export default CreateContractModal;
