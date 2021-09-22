import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useRef, useState } from 'react';
interface Props {
  id: string;
  wrapperClassName: string;
  onChange?: (value: string) => void;
}
const DepositAndWithDraw = (props: Props) => {
  const {id, wrapperClassName = '', onChange = () => {} } = props;
  const[type, setType] = useState('deposit');
  const handleOnChange = (value:string) => {
    setType(value);
    onChange(value);
  };
  return (
    <Box textAlign="center" mb={3} mt={3}>
      <ButtonGroup disableElevation variant="contained">
        <Button
          name={`type-${id}`}
          variant={type === 'deposit' ? "contained" : "outlined"}
          onClick={() => handleOnChange("deposit")}
        >deposit</Button>
        <Button
          name={`type-${id}`}
          variant={type === 'withdraw' ? "contained" : "outlined"}
          onClick={() => handleOnChange("withdraw")}
        >withdraw</Button>
      </ButtonGroup>
    </Box>
  );
};

export default DepositAndWithDraw;
