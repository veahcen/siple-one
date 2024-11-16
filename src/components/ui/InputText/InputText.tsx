import React, { FC } from 'react';

import './inputText.scss';

interface IInputText {
  text?: string
  idName?: string
  isDanger?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: FC<IInputText> = ({text, idName, isDanger, value, onChange}) => {

  return (
    <div className="input">
      <label className="input__label" htmlFor={idName} >
        <span className={isDanger ? "input__label-danger" : "input__label-danger-no"}>*</span>{text}
      </label>
      <input 
        value={value}
        onChange={onChange}
        className="input__text"
        type="text"
        id={idName}
         />
    </div>
  );
};

export default InputText;