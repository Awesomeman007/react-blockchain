import React, { FC } from "react";
import { Backdrop, Box, Fade, Modal } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // minHeight: 450,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

interface StyledModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children?: JSX.Element | JSX.Element[];
}

const StyledModal: FC<StyledModalProps> = (props) => {
  return (
    <Modal
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.isOpen}>
        <Box sx={style}>{props.children}</Box>
      </Fade>
    </Modal>
  );
};

export default StyledModal;
