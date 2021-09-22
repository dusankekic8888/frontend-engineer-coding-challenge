import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useRef } from 'react';
interface Props {
  id: string;
  wrapperClassName: string;
  placeholder: string;
  label: string;
  type?: string;
  error?: boolean;
  errorText?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputAmount = (props: Props) => {
  const {
    id,
    wrapperClassName = '',
    placeholder = '',
    type = 'text',
    error = false,
    errorText = '',
    required = false,
    onChange,
    ...rest
  } = props;

  const inputRef = useRef<null | HTMLInputElement>(null);

  return (
    <Box>
      <TextField 
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
        className="amountClass"
        variant="standard" />
    </Box>
  );
};

export default InputAmount;
