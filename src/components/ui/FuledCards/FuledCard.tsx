import React, { FC } from 'react';

import './fuledCards.scss';
import Bage from '../Bage/Bage';

interface IFuledCards {
  text?: string
  agree?: boolean
  people?: string[]
  singlePersone?: string
}

const FuledCards: FC<IFuledCards> = ({text, agree, people, singlePersone}) => {

  return (
    <>
      <span className="header-card">{text}</span>
      <div className="box">
        
        <div className="card">
          {singlePersone ? <Bage text={singlePersone} /> : null}
          {people && people.map((item, index) => {
            return (
              <Bage key={index} text={item} cross={true} />
            )
          })}
          <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className="card__svg">
            <path d="M6.473 10.475a.672.672 0 0 1-.946 0 .672.672 0 0 1 0-.947l1.526-1.526-1.526-1.527a.672.672 0 0 1 0-.947c.26-.26.686-.26.946 0L8 7.055l1.527-1.527c.26-.26.686-.26.946 0 .26.26.26.687 0 .947L8.947 8.002l1.526 1.526c.26.26.26.687 0 .947a.672.672 0 0 1-.946 0L8 8.948l-1.527 1.527Z" fill="#ABB1BA"/><path fillRule="evenodd" clipRule="evenodd" d="M15.333 8.002A7.33 7.33 0 0 1 8 15.335 7.33 7.33 0 0 1 .667 8.002 7.33 7.33 0 0 1 8 .668a7.33 7.33 0 0 1 7.333 7.334Zm-1.333 0a6 6 0 1 0-12.001 0 6 6 0 0 0 12.001 0Z" fill="#ABB1BA"/>
          </svg>

        </div>

          <button className="plus-card">
            <svg  width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 14 14">
              <path  d="M7.833 1.167a.833.833 0 1 0-1.666 0v5h-5a.833.833 0 1 0 0 1.666h5v5a.833.833 0 1 0 1.666 0v-5h5a.833.833 0 1 0 0-1.666h-5v-5Z" fill="#2E3238" />
            </svg>
          </button>

          <button className="search-card">
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path fillRule="evenodd" clipRule="evenodd" d="M12.848 14.027a7.5 7.5 0 1 1 1.178-1.178l3.063 3.062a.833.833 0 1 1-1.178 1.178l-3.063-3.062ZM2.333 8.166a5.833 5.833 0 1 1 10.035 4.046.845.845 0 0 0-.155.155 5.833 5.833 0 0 1-9.88-4.201Z" fill="#2E3238"/>
            </svg>
          </button>
      </div>
    </>
  );
};

export default FuledCards;