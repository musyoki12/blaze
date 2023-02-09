import React from "react";
import { Button } from "react-bootstrap";

const LoginButton = (props) => {
  return (
    <Button
      variant={props.variant}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      Login
    </Button>
  );
};

export default LoginButton;
