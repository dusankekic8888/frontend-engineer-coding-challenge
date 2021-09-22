import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
                    
// Components
import InputAmount from '../InputAmount';
import ConfirmButton from '../ConfirmButton';
import DepositAndWithDraw from '../DepositAndWithDraw';
import roundAmountHooks from '../Hooks';
interface Props {
  id: string;
  title: string;
  type?: string;
  dayToProgress?:number;
  currentAPY?:number;
  onConfirm?: (type: string, amount: number) => void;
}

const Calculate = (props: Props) => {
  const {
    id,
    title = '',
    dayToProgress = 0,
    currentAPY = 0,
    onConfirm = () => {},
    ...rest
  } = props;
  const[amount, setAmount] = useState(0);
  const[type, setType] = useState('deposit');
  const[interest, setInterest] = useState(0);

  const handlerChangeType = (value:string) =>{
    setType(value);
  };
  const onChange = (value:string)=>{
    setAmount(roundAmountHooks(parseFloat(value)));
  }
  useEffect(() => {
    if(type === 'deposit' && dayToProgress > 0 && currentAPY > 0){
      let ern = amount*(dayToProgress/365)*currentAPY/100;
      setInterest(roundAmountHooks(ern));
    }else{
      setInterest(0);
    }
  }, [amount, type, dayToProgress]);

  
  return (

    <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Box mb={3} mt={3}>
              <Typography gutterBottom variant="h5" align="center" component="div">
                {title}
              </Typography>  
            </Box>
            
            <Box>
              <Typography variant="body2" width="70%" display="inline-block" align="left" component="div">
                  Current APY: 
              </Typography>
              <Typography variant="body2" width="30%" display="inline-block" align="right" component="div">
                  {currentAPY}%
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" width="70%" display="inline-block" align="left" component="div">
                  Amount Deposited: 
              </Typography>
              <Typography variant="body2" width="30%" display="inline-block" align="right" component="div">
                  {type === 'deposit' ? amount : 0} USDC
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" width="70%" display="inline-block" align="left" component="div">
                  Amount Interest: 
              </Typography>
              <Typography variant="body2" width="30%" display="inline-block" align="right" component="div">
                  {interest} USDC
              </Typography>
            </Box>
            
            <Box>
              <DepositAndWithDraw 
                wrapperClassName="block"
                id = {`type-${id}`}
                onChange={(value) => handlerChangeType(value)}
              />
            </Box>

            <Box width="60%" m="0 auto">
              <Typography variant="body2" lineHeight="35px" height="35px" width="40%" display="inline-block" align="left" component="div">
                Amount: 
              </Typography>
              <Typography variant="body2" lineHeight="35px" height="35px" width="60%" display="inline-block" align="right" component="div">
                <InputAmount 
                  label=""
                  id={`amount-${id}`}
                  wrapperClassName="form-group"
                  placeholder="Amount"
                  onChange={(e) => onChange(e.target.value)}
                />
              </Typography>
            </Box>
            <ConfirmButton 
              text="Confirm"
              buttonStyle = 'outline'
              type='button'
              handleClick={() => onConfirm(type, (amount + interest))}
            />
          </CardContent>
        </Card>
    );
};

export default Calculate;
