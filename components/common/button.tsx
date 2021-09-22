import React from 'react';

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

const Button = ({ buttonStyle, type, text = 'Submit', handleClick }: Props) => {
  return (
    <div className="p-1">
      <button
        className={
          buttonStyle === 'rounded'
            ? roundedButtonClassNames
            : buttonStyle === 'outline'
            ? outlineButtonClassNames
            : buttonStyle === 'disabled'
            ? disabledButtonClassNames
            : undefined
        }
        onClick={handleClick}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
