import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

import { useRef } from "react";
interface Props {
  id: string;
  placeholder: string;
  label: string;
  type?: string;
  isError?: boolean;
  errorText?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputAmount = (props: Props) => {
  const {
    id,
    placeholder = "",
    type = "number",
    isError = false,
    errorText = "",
    required = false,
    onChange,
    ...rest
  } = props;
  
  return (
    <Box>
      <TextField
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        {...rest}
        className="amountClass"
        variant="standard"
      />
    </Box>
  );
};

export default InputAmount;
