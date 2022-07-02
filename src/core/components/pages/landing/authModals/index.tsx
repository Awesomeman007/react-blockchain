import React from "react";
import LoginModal from "./loginModal";
import SignupModal from "./signupModal";
import StyledModal from "../../../ui/StyledModal";

interface AuthModalsProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  type?: "signup" | "login";
  setType: (type: "signup" | "login") => void;
}

const AuthModals: React.FC<AuthModalsProps> = (props) => {
  return (
    <StyledModal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      {props.type === "login" ? (
        <LoginModal setType={props.setType} />
      ) : (
        <SignupModal setType={props.setType} />
      )}
    </StyledModal>
  );
};

export default AuthModals;
