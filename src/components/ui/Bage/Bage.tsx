import React, { FC } from 'react';

import './bage.scss';

interface IBage {
  id?: number
  text?: string
  cross?: boolean
  onClick?: (id?: number) => void;
}

const Bage: FC<IBage> = ({id, text, cross, onClick}) => {
  return (
    <div key={id} className="bage">
      <span className="bage__text">{text}</span>
      <button className={cross ? "bage__button" : "bage__button-no"} onClick={() => onClick?.(id)}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.471 1.471A.667.667 0 1 0 8.53.53L5 4.057 1.471.53a.667.667 0 1 0-.942.942L4.057 5 .53 8.529a.667.667 0 0 0 .942.942L5 5.943 8.529 9.47a.667.667 0 0 0 .942-.942L5.943 5 9.47 1.471Z" fill="#2E3238"/>
        </svg>
      </button>
    </div>
  );
};

export default Bage;