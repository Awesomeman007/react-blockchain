import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Fade,
  Modal,
  Typography,
  Backdrop,
  TextField,
  Link,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { client } from "../../../../../axiosConfig";
import { useAuthContext } from "../../../../contexts/authContext";
import { setCookie } from "../../../../contexts/cookieHandler";
import PrimaryButton from "../../../ui/PrimaryButton";

interface LoginModalProps {
  setType: (type: "login" | "signup") => void;
}

interface LoginPayloadInterface {
  email: string;
  password: string;
}

interface LoginResponseInterface {
  token: string;
}

const LoginModal: React.FC<LoginModalProps> = (props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<LoginPayloadInterface>();

  const { setToken } = useAuthContext();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigateToSignup = () => {
    props.setType("signup");
  };

  const onLogin: SubmitHandler<LoginPayloadInterface> = useCallback(
    async (payload) => {
      try {
        const res: AxiosResponse<LoginResponseInterface> = await client.post(
          `/user/login`,
          payload
        );
        const data = res.data;
        setCookie("token", data.token, 1);
        setToken(data.token)
        navigate("/main")
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  useEffect(() => {
    console.log(showPassword);
  }, [showPassword]);

  return (
    <>
      <Typography
        id="transition-modal-title"
        variant="h4"
        component="h2"
        align="left"
        marginY={2}
      >
        LOG IN
      </Typography>
      <form onSubmit={handleSubmit(onLogin)}>
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
        <PrimaryButton type="submit">Log in</PrimaryButton>
      </form>
      <Typography variant="body2">
        Haven't signed up?{" "}
        <Link variant="body2" component="button" onClick={navigateToSignup}>
          Sign up
        </Link>
      </Typography>
    </>
  );
};

export default LoginModal;
