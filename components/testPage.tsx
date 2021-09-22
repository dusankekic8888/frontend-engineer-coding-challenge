import React, { useState } from 'react';
import PropTypes from 'prop-types';
                    
import Input from './common/input';
import PrimaryNetwork from './primaryNetwork';

TestPage.propTypes = {};

function TestPage() {
  const [dayToProgress, setDayToProgress] = useState(0);
  const [balance, setBalance] = useState(1000);
  const handleConfirmPrimaryNetwork = (type: string, amount: number) => {
    if(type ==='deposit'){
      setBalance(balance + amount);
    }else{
      setBalance(balance - amount);
    }
  };
  return <div className="grid grid-rows-2 grid-cols-6 gap-4">
                <div className="col-span-3 ">
                    USDC Balance {balance}
                </div>
                
                <div className="col-span-3 ">
                    <Input
                      onChange={(e) => setDayToProgress(parseInt(e.target.value))}
                      id="day-to-progress"
                      label="Day to Progress"
                      type="text"
                      placeholder="Day to Progress"
                      wrapperClassName="mt-4"
                      required={true}
                    />
                </div>
                <div className="col-span-2 ">
                  <PrimaryNetwork 
                    title="Compound" 
                    id="compound" 
                    currentAPY={5}
                    dayToProgress = {dayToProgress}
                    onConfirm = {(type, amount) => handleConfirmPrimaryNetwork(type, amount)}
                  />
                </div>
                <div className="col-span-2 ">
                  <PrimaryNetwork 
                    title="Aave" 
                    id="aave" 
                    currentAPY={3}
                    dayToProgress = {dayToProgress}
                    onConfirm = {(type, amount) => handleConfirmPrimaryNetwork(type, amount)}
                  />
                </div>
                <div className="col-span-2 ">
                  <PrimaryNetwork 
                    title="Curve" 
                    id="curve" 
                    currentAPY={2.5}
                    dayToProgress = {dayToProgress}
                    onConfirm = {(type, amount) => handleConfirmPrimaryNetwork(type, amount)}
                  />
            </div>
          </div>;
}

export default TestPage;
