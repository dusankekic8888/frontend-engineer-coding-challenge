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
const Input = (props: Props) => {
  const {
    id,
    wrapperClassName = '',
    placeholder = '',
    label = '',
    type = 'text',
    error = false,
    errorText = '',
    required = false,
    onChange,
    ...rest
  } = props;

  const inputRef = useRef<null | HTMLInputElement>(null);

  return (
    <div className={wrapperClassName}>
      <div className={` transition duration-150 ease-in-out`} onClick={() => inputRef.current!.focus()}>
        <label htmlFor={id} className="w-1/3 text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5">
          {label} {required && <span className="text-red-500">*</span>} :
        </label>
        <input
          ref={inputRef}
          type={type}
          className={`w-2/3 px-2 pb-1.5 text-primary outline-none text-base font-light border-b-2 ${
            error ? `border-red-500` : `border-black`
          }`}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
      </div>
      {error && <p className="text-xs pl-2 text-red-500 mb-4">{errorText}</p>}
    </div>
  );
};

export default Input;
