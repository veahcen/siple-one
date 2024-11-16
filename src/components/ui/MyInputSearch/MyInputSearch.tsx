import React, { FC, useState } from 'react';

import search from '../../../resources/search.svg';
import './myInpunSearch.scss';

const MyInputSearch: FC = () => {
  const [value, setValue] = useState<string>('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className="input-header">
      <input value={value} onChange={onChangeHandler} type="text" placeholder='Поиск' className="input__search" />
      <img src={search} alt="search" className="input__img" />
    </div>
  );
};

export default MyInputSearch;