import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface Props {
  buttonStyle: 'rounded' | 'outline' | 'disabled';
  type: any;
  text: string;
  handleClick: () => void;
}
const roundedButtonClassNames = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full';

const outlineButtonClassNames =
  'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded';

const disabledButtonClassNames = 'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed';

const ConfirmButton = ({ buttonStyle, type, text = 'Submit', handleClick }: Props) => {
  return (
    <Box textAlign="center" mb={3} mt={3} >
      <Button 
        variant="contained" 
        color="warning"
        onClick={handleClick}
        type={type}
      >
        {text}
      </Button>
    </Box>
  );
};

export default ConfirmButton;
