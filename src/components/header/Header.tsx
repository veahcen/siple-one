import React, { FC } from 'react';

import logo from '../../resources/logo.svg';
import persone from '../../resources/persona.jpg';
import settings from '../../resources/settings.svg';
import './header.scss';
import MyInputSearch from '../ui/MyInputSearch/MyInputSearch';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="header__panel">
        <MyInputSearch/>

        <div className="header__panel__info">
          <img src={persone} alt="persone" className="header__panel__info-img" />
          <span className="header__panel__info-text">
            Максим Галактионов
          </span>
        </div>

        <div className="header__panel__settings">
          <img src={settings} alt="settings" className="header__panel__settings-img" />
        </div>
      </div>

    </header>
  );
};

export default Header;