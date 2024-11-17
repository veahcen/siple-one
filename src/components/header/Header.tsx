import React, { FC } from 'react';

import logo from '../../resources/logo.svg';
import persone from '../../resources/persona.jpg';
import settings from '../../resources/settings.svg';
import './header.scss';
import MyInputSearch from '../ui/MyInputSearch/MyInputSearch';

interface IHeader {
  open: boolean
  onClick: () => void;

}

const Header: FC<IHeader> = ({open, onClick}) => {
  return (
    <header className="header">
      <svg 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={open ? "nav__panel-open active-btn visible" : "nav__panel-open visible"}
      onClick={onClick}
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M3 20a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3ZM2 3a1 1 0 0 1 1-1h3v16H3a1 1 0 0 1-1-1V3Zm6 15V2h9a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8Z" />
      </svg>
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