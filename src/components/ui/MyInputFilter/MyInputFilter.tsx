import React, { FC } from 'react';

import funnel from '../../../resources/funnel.svg';
import noPin from '../../../resources/no-pin.svg';
import './myInputFilter.scss';

const MyInputFilter: FC = () => {
  return (
    <div className="filter">
      <div className="filter__box">
        <input type="text" placeholder="Поиск по меню" className="filter__box-search"/>
        <img src={funnel} alt="funnel" className="filter__box-img" />
      </div>
      <img src={noPin} alt="noPin" className="filter-pin" />
    </div>
  );
};

export default MyInputFilter;