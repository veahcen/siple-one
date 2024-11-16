import React, { FC } from 'react';

import './saveAndExitButton.scss';

interface ISaveAndExitButton {
  text: string
  onClick?: () => void; 
}

const SaveAndExitButton: FC<ISaveAndExitButton> = ({text, onClick}) => {
  return (
    <button className="save-exit" onClick={onClick}>
      {text}
    </button>
  );
};

export default SaveAndExitButton;