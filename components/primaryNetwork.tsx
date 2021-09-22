import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
                    
import Input from './common/input';
import Button from './common/button';
import RadioButton from './common/radioButton';

interface Props {
  id: string;
  title: string;
  type?: string;
  dayToProgress?:number;
  currentAPY?:number;
  onConfirm?: (type: string, amount: number) => void;
}

const PrimaryNetwork = (props: Props) => {
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
  useEffect(() => {
    if(type === 'deposit' && dayToProgress > 0 && currentAPY > 0){
      let ern = amount*(dayToProgress/365)*currentAPY/100;
      setInterest(ern);
    }else{
      setInterest(0);
    }
  }, [amount, type, dayToProgress]);

  
  return (
    <div className="card">
      <div className="card-header">
        {title}
      </div>
      <div className="card-body">
        <p>Current API: {currentAPY}%</p>
        <p>Amount Deposited: {type === 'deposit' ? amount : 0}</p>
        <p>Amount Interest: {interest}</p>
        
        <RadioButton 
          wrapperClassName="block"
          id = {`type-${id}`}
          onChange={(value) => handlerChangeType(value)}
        />
        <Input 
          label="Amount"
          id={`amount-${id}`}
          wrapperClassName="form-group"
          placeholder="Amount"
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <Button 
          text="Confirm"
          buttonStyle = 'outline'
          type='button'
          handleClick={() => onConfirm(type, amount + interest)}
        />
      </div>
    </div>
    );
};

PrimaryNetwork.propTypes = {};

export default PrimaryNetwork;
