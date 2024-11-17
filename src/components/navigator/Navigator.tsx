import React, { FC } from 'react';

import './navigator.scss';
import ListAndFilter from '../listAndFilter/ListAndFilter';

interface INavigator {
  open: boolean
  onClick: () => void;

}

const Navigator: FC<INavigator> = ({open, onClick}) => {
  

  return (
    <>
      <nav className="nav"> 
        <div className="nav__panel">
          <svg 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={open ? "nav__panel-open active-btn" : "nav__panel-open"}
            onClick={onClick}
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M3 20a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3ZM2 3a1 1 0 0 1 1-1h3v16H3a1 1 0 0 1-1-1V3Zm6 15V2h9a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8Z" />
            </svg>

            <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="nav__panel-star">
              <path fillRule="evenodd" clipRule="evenodd" d="M11 0a1 1 0 0 1 .897.557l2.857 5.79 6.39.934a1 1 0 0 1 .554 1.705l-4.623 4.503 1.09 6.362a1 1 0 0 1-1.45 1.054L11 17.9l-5.715 3.005a1 1 0 0 1-1.45-1.054l1.09-6.362L.302 8.986a1 1 0 0 1 .553-1.705l6.39-.935L10.104.557A1 1 0 0 1 11 0Zm0 3.26L8.807 7.702a1 1 0 0 1-.752.546l-4.907.718 3.55 3.457a1 1 0 0 1 .288.885l-.838 4.883 4.386-2.307a1 1 0 0 1 .931 0l4.387 2.307-.838-4.883a1 1 0 0 1 .288-.885l3.55-3.457-4.907-.718a1 1 0 0 1-.752-.546L11 3.259Z" fill="#2E3238"/>
            </svg>
        </div>
        <ListAndFilter open={open}/>
      </nav>
    </>
  );
  
};

export default Navigator;