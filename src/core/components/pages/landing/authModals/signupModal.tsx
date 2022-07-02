import {
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import React, { useState, useCallback } from "react";
import PrimaryButton from "../../../ui/PrimaryButton";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { AxiosResponse } from "axios";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../contexts/authContext";
import { setCookie } from "../../../../contexts/cookieHandler";
import { client } from "../../../../../axiosConfig";

interface SignupModalProps {
  setType: (type: "signup" | "login") => void;
}

interface SignupPayloadInterface {
  displayName: string;
  email: string;
  password: string;
  repassword: string;
}

interface SignupResponseInterface {
  token: string;
}

const SignupModal: React.FC<SignupModalProps> = (props) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignupPayloadInterface>();

  const password = watch("password");
  const navigate = useNavigate();
  const { setToken } = useAuthContext();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepassword, setShowRepassword] = useState<boolean>(false);

  const navigateToLogin = () => {
    props.setType("login");
  };

  const onSignup: SubmitHandler<SignupPayloadInterface> = useCallback(
    async (payload) => {
      try {
        console.log(payload);
        const res: AxiosResponse<SignupResponseInterface> = await client.post(
          "/user/signup",
          payload
        );
        const data = res.data;
        setCookie("token", data.token, 1);
        setToken(data.token);
        navigate("/main");
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return (
    <>
      <Typography
        id="transition-modal-title"
        variant="h4"
        component="h2"
        align="left"
        marginY={2}
      >
        SIGN UP
      </Typography>
      <form onSubmit={handleSubmit(onSignup)}>
        <Controller
          render={({ field: { name, value, onChange } }) => (
            <TextField
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              label="Display Name"
              variant="standard"
              fullWidth
              error={Boolean(errors["displayName"])}
              helperText={
                errors["displayName"] ? errors["displayName"].message : " "
              }
            />
          )}
          control={control}
          name="displayName"
          defaultValue=""
          rules={{ required: { value: true, message: "Invalid input" } }}
        />
        <Controller
          render={({ field: { name, value, onChange } }) => (
            <TextField
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              label="Email"
              variant="standard"
              fullWidth
              error={Boolean(errors["email"])}
              helperText={errors["email"] ? errors["email"].message : " "}
            />
          )}
          control={control}
          name="email"
          defaultValue=""
          rules={{ required: { value: true, message: "Invalid input" } }}
        />
        <Controller
          render={({ field: { name, value, onChange } }) => (
            <TextField
              id="password"
              name={name}
              value={value}
              onChange={onChange}
              label="Password"
              variant="standard"
              fullWidth
              type={showPassword ? "text" : "password"}
              error={Boolean(errors["password"])}
              helperText={errors["password"] ? errors["password"].message : " "}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
          control={control}
          name="password"
          defaultValue=""
          rules={{ required: { value: true, message: "Invalid input" } }}
        />
        <Controller
          render={({ field: { name, value, onChange } }) => (
            <TextField
              id="repassword"
              name={name}
              value={value}
              onChange={onChange}
              label="Repassword"
              variant="standard"
              fullWidth
              type={showRepassword ? "text" : "password"}
              error={Boolean(errors["repassword"])}
              helperText={
                errors["repassword"] ? errors["repassword"].message : " "
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowRepassword(!showRepassword)}
                      onMouseDown={() => setShowRepassword(!showRepassword)}
                      edge="end"
                    >
                      {showRepassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
          control={control}
          name="repassword"
          defaultValue=""
          rules={{
            required: { value: true, message: "Invalid input" },
            validate: (value) =>
              value === password || "The passwords do not match",
          }}
        />
        <PrimaryButton type="submit">Sign up</PrimaryButton>
      </form>
      {/* <FormControl variant="standard" fullWidth margin="dense" required>
        <InputLabel>Display Name</InputLabel>
        <Input
          id="display name"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
          aria-describedby="component-helper-text"
        />
      </FormControl>
      <FormControl variant="standard" fullWidth margin="dense" required>
        <InputLabel>Email</InputLabel>
        <Input
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-describedby="component-helper-text"
        />
      </FormControl> */}
      {/* <FormControl variant="standard" fullWidth margin="dense" required>
        <InputLabel>Password</InputLabel>
        <Input
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          aria-describedby="component-helper-text"
          type="password"
        />
      </FormControl>
      <FormControl
        variant="standard"
        fullWidth
        margin="dense"
        required
        error={password !== repassword}
      >
        <InputLabel>Repassword</InputLabel>
        <Input
          id="repassword"
          value={repassword}
          onChange={(event) => setRepassword(event.target.value)}
          aria-describedby="component-helper-text"
          type="password"
        />
      </FormControl> */}
      {/* <PrimaryButton onClick={onSignup}>Sign up</PrimaryButton> */}
      <Typography variant="body2">
        Already have an account?{" "}
        <Link variant="body2" component="button" onClick={navigateToLogin}>
          Log in
        </Link>
      </Typography>
    </>
  );
};

export default SignupModal;
