import { useRef } from 'react';
interface Props {
  id: string;
  wrapperClassName: string;
  value: string | number;
  checked?: boolean;
  label: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const RadioButton = (props: Props) => {
  const { value, checked, id, wrapperClassName = '', label = '', required = false, onChange, ...rest } = props;

  const inputRef = useRef<null | HTMLInputElement>(null);

  return (
    <div className={wrapperClassName}>
      <div className="flex flex-col justify-center items-center h-screen" x-data="{ selected: 'Nothing selected' }">
        <div className="flex justify-center -mx-2">
          <div className="mx-2">
            <input type="radio" id={id} name="gender" value={value} className="hidden" x-model="selected" />
            <label htmlFor={id} className="text-gray-500 border px-10 py-4 border-solid border-gray-500 rounded">
              {label}
            </label>
          </div>
        </div>
      </div>
      <div className={` transition duration-150 ease-in-out border`} onClick={() => inputRef.current!.focus()}>
        <label htmlFor={id} className="text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5">
          {label}
        </label>
        <input type="checkbox" className="appearance-none checked:bg-blue-600 checked:border-transparent" />
        sdsd
        {/* <input
          ref={inputRef}
          type="radio"
          className={`px-2 pb-1.5 text-primary outline-none text-base font-light border-b-2 invisible `}
          id={id}
          onChange={onChange}
          {...rest}
        /> */}
      </div>
    </div>
  );
};

export default RadioButton;
