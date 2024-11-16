import React, { FC } from 'react';

import './calendarInput.scss';

interface ICalendarInput {
  text?: string
  idName?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CalendarInput: FC<ICalendarInput> = ({text, idName, value, onChange}) => {


  return (
    <div className="date-box">
      <label htmlFor={idName} className="date-label">{text}</label>
      <div className="date-picker">
        <input className="date-input" type="text" id={idName} maxLength={10} onChange={onChange} value={value} />
        <button className="date-button">
          <svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.167 19.169h11.666c1.384 0 2.5-1.117 2.5-2.5V5.002c0-1.383-1.116-2.5-2.5-2.5h-1.666v-.833a.836.836 0 0 0-.834-.834.836.836 0 0 0-.833.834v.833h-5v-.833a.836.836 0 0 0-.833-.834.836.836 0 0 0-.834.834v.833H3.167a2.497 2.497 0 0 0-2.5 2.5v11.667c0 1.383 1.116 2.5 2.5 2.5Zm11.666-1.667H3.167a.836.836 0 0 1-.834-.833v-7.5h13.334v7.5a.836.836 0 0 1-.834.833ZM3.167 4.169h1.666v.833c0 .458.375.833.834.833a.836.836 0 0 0 .833-.833v-.833h5v.833c0 .458.375.833.833.833a.836.836 0 0 0 .834-.833v-.833h1.666c.459 0 .834.375.834.833v2.5H2.333v-2.5c0-.458.375-.833.834-.833Z" fill="#2E3238"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CalendarInput;