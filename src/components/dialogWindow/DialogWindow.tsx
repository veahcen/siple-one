import React, { FC, useEffect, useState } from 'react';

import './dialogWindow.scss';
import SaveAndExitButton from '../ui/SaveAndExitButton/SaveAndExitButton';
import SaveButton from '../ui/SaveButton/SaveButton';
import InputText from '../ui/InputText/InputText';
import FuledCards from '../ui/FuledCards/FuledCard';
import SearcInput from '../ui/SearchInput/SearchInput';
import CalendarInput from '../ui/CalendarInput/CalendarInput';

interface IDialogWindow {
  open: boolean
  onClick?: () => void;
}

const DialogWindow: FC<IDialogWindow> = ({open, onClick}) => {
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClick?.();
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, [open])

  useEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [open]);

  const [text, setText] = useState<string>('На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller');
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

  return (
    <div className={open ? "dialog dialog__open" : "dialog"} onClick={onClick}>
      <div className="dialog__info" onClick={(e) => e.stopPropagation()}>
        <div className="dialog__info__header">
          <h3 className="dialog__info__header-text">Подзадача</h3>

          <div className="dialog__info__buttons">
            <SaveButton text='Сохранить'/>
            <SaveAndExitButton text='Отменить' onClick={onClick}/>
          </div>
        </div>

        <div className="dialog__info__main">
          <h4 className="dialog__info__main-head">Новая запись</h4>
            <InputText 
              value={text}
              onChange={handleChangeMainText}
              text='Тема'
              idName='themew'
              isDanger={true}
              />
            <InputText text='Статус' idName='statusw' value={arrText[1].name} onChange={(e) => handleChangeText(e, 1)} />
            <InputText text='Описание' idName='descrw'/>
            <SearcInput labelText='Продукт' idName='productw' value={arrText[2].name} onChange={(e) => handleChangeText(e, 2)}/>
            <InputText text='Рабочие заметки' idName='workw' isDanger={true} value={arrText[0].name} onChange={(e) => handleChangeText(e, 0)} />
            <InputText text='Приоритет' idName='prioripyw' value={arrText[3].name} onChange={(e) => handleChangeText(e, 3)} />
            <FuledCards text='Ответственный' singlePersone='Константин Константинопольский' />
            <FuledCards text='Группа' singlePersone='Support Group' />
            <InputText text='Комментарии' idName='commentsw'  />
            <FuledCards text='Согласующие' people={tags} />
            <CalendarInput text='Когда открыто' idName='date1w' />
            <CalendarInput text='Когда создано' idName='date2w' value={arrText[4].name} onChange={(e) => handleChangeText(e, 4)} />
              <FuledCards text='Кем открыто' singlePersone='Андрей Пивоваров' />
            <FuledCards text='Кем создано' singlePersone='Андрей Пивоваров' />
        </div>
      </div>
    </div>
  );
};

export default DialogWindow;