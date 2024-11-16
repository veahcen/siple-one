import React, { FC } from 'react';

import './saveButton.scss';

interface ISaveButton {
  text: string
}

const SaveButton: FC<ISaveButton> = ({text}) => {
  return (
    <button className="save">
      {text}
    </button>
  );
};

export default SaveButton;