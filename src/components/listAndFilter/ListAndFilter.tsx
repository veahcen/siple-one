import React, { FC } from 'react';
import MyInputFilter from '../ui/MyInputFilter/MyInputFilter';

import arrow from '../../resources/arrow.svg';
import './listAndFilter.scss';

interface IListAndFilter {
  open: boolean
}

const ListAndFilter: FC<IListAndFilter> = ({open}) => {
  const list: string[] = ['Моя работа', 'Структура портала', 'Личное расписание', 'Отсутствие на рабочем месте', 'Портфель услуг', 'Дашборды', 'Доски задач', 'Обращения', 'События', 'Инциденты', 'Проблемы', 'Настройка каталогов', 'Запросы на обслуживание', 'Запросы на изменение', 'Управление конфигурациями', 'Управление уровнем услуг', 'Настройка соответствий'];

  return (
    <div className={open ? "list-search active" : "list-search"}>
      <MyInputFilter/>
      <ul className="list">
        {list.map((item, index) => {
          return (
            <li className="list__item" key={index}>
              <img src={arrow} alt="arrow" className="list__item-arrow"/>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ListAndFilter;