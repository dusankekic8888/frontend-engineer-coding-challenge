import { useRef, useState } from 'react';
interface Props {
  id: string;
  wrapperClassName: string;
  onChange?: (value: string) => void;
}
const RadioButton = (props: Props) => {
  const {id, wrapperClassName = '', onChange = () => {} } = props;
  const[type, setType] = useState('deposit');
  const handleOnChange = (value:string) => {
    setType(value);
    onChange(value);
  };
  return (
    <div className={wrapperClassName}>
        <label className="inline-flex items-center">
          <input 
            type="radio"
            className="form-radio"
            name={`type-${id}`}
            value='deposit'
            checked={type === 'deposit'}
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <span className="ml-2">Deposit</span>
        </label>
        <label className="inline-flex items-center">
          <input 
            type="radio"
            className="form-radio"
            name={`type-${id}`}
            value='withdraw'
            checked={type === 'withdraw'}
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <span className="ml-2">Withdraw</span>
        </label>
    </div>
  );
};

export default RadioButton;
