import React, { FC, useState } from 'react';

import './mainPage.scss';
import SaveAndExitButton from '../ui/SaveAndExitButton/SaveAndExitButton';
import SaveButton from '../ui/SaveButton/SaveButton';
import InputText from '../ui/InputText/InputText';
import FuledCards from '../ui/FuledCards/FuledCard';
import CalendarInput from '../ui/CalendarInput/CalendarInput';
import SearcInput from '../ui/SearchInput/SearchInput';
import DialogWindow from '../dialogWindow/DialogWindow';

const MainPage: FC = () => {
  const [text, setText] = useState<string>('STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller');
  const [arrText, setArrText] = useState<{ id: number; name: string }[]>([
    { id: 0, name: "Проверить ACL id=172830402014193655" },
    { id: 1, name: "Новая" },
    { id: 2, name: "Paltform" },
    { id: 3, name: "Средний" },
    {id: 4, name: "22.10.2024"}
  ]);
  const tags: string[] = [
    'Андрей Пивоваров',
    'Максим Галактионов',
    'Алла Лин',
    'Константин Константинопольский',
    'Игорь Иванченко',
    'Юлия Зайнаровна',
    'Артем Подгригайко-Саппортов',
    'Илья Вазнес',
    'Михаил Вортечов',
    'Наталья Нашевна',
    'Евгения Итмовна',
    'Алиса Кирилчук'
  ];
  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleChangeMainText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setArrText((prevArr) =>
      prevArr.map((item) =>
        index === item.id ? { ...item, name: e.target.value } : item
      )
    );
  }

  const toggleWindow = () => {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <>
      <div className="content">
        <div className="content__header">
          <div className="content__header__task">
            <span className="content__header__task-text">Подзадача</span>
            <button className="content__header__task-btn" onClick={toggleWindow}>Создать</button>
          </div>
          <div className="content__header__save">
            <SaveButton text='Сохранить'/>
            <SaveAndExitButton text='Сохранить и выйти'/>
          </div>
        </div>

        <div className="content__main">
          <h1 className="content__main__header">
            {text}
          </h1>

          <div className="content__main-left">
            <InputText 
              value={text}
              onChange={handleChangeMainText}
              text='Тема'
              idName='theme'
              isDanger={true}
              />  
          </div>
          <div className="content__main-right">
            <InputText text='Статус' idName='status' value={arrText[1].name} onChange={(e) => handleChangeText(e, 1)} />
          </div>
          <div className="content__main-left">
            <InputText text='Описание' idName='descr'/>
          </div>
          <div className="content__main-right">
            <SearcInput labelText='Продукт' idName='product' value={arrText[2].name} onChange={(e) => handleChangeText(e, 2)}/>
          </div>
          <div className="content__main-left">
            <InputText text='Рабочие заметки' idName='work' isDanger={true} value={arrText[0].name} onChange={(e) => handleChangeText(e, 0)} />
          </div>
          <div className="content__main-right">
            <InputText text='Приоритет' idName='prioripy' value={arrText[3].name} onChange={(e) => handleChangeText(e, 3)} />
          </div>
          <div className="content__main-left">
            <FuledCards text='Ответственный' singlePersone='Константин Константинопольский' />
          </div>
          <div className="content__main-right">
            <FuledCards text='Группа' singlePersone='Support Group' />
          </div>
          <InputText text='Комментарии' idName='comments'  />
          <FuledCards text='Согласующие' people={tags} />
          <div className="content__main-left">
            <CalendarInput text='Когда открыто' idName='date1' />
          </div>
          <div className="content__main-right">
            <CalendarInput text='Когда создано' idName='date2' value={arrText[4].name} onChange={(e) => handleChangeText(e, 4)} />
          </div>
          <div className="content__main-left">
            <FuledCards text='Кем открыто' singlePersone='Андрей Пивоваров' />
          </div>
          <div className="content__main-right">
            <FuledCards text='Кем создано' singlePersone='Андрей Пивоваров' />
          </div>
        </div>
      </div>
    
      <DialogWindow open={isOpen} onClick={toggleWindow} />
    </>
  );
};

export default MainPage;