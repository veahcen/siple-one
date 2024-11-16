import React, { FC } from 'react';

import './searchInput.scss';

interface IInputText {
  labelText?: string
  idName?: string
  isDanger?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearcInput: FC<IInputText> = ({labelText, isDanger, idName, value, onChange}) => {


  return (
    <div className="input-search">
      <label className="input-search__label" htmlFor={idName} >
        {labelText}
      </label>
      <div className="box-search">
        <input 
          value={value}
          onChange={onChange}
          className="input-search__text"
          type="text"
          id={idName}
          />

          <button className="search-card">
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path fillRule="evenodd" clipRule="evenodd" d="M12.848 14.027a7.5 7.5 0 1 1 1.178-1.178l3.063 3.062a.833.833 0 1 1-1.178 1.178l-3.063-3.062ZM2.333 8.166a5.833 5.833 0 1 1 10.035 4.046.845.845 0 0 0-.155.155 5.833 5.833 0 0 1-9.88-4.201Z" fill="#2E3238"/>
            </svg>
          </button>
      </div>
    </div>
  );
};

export default SearcInput;