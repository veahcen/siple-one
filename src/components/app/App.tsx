import React, { FC, useState } from 'react';
import './app.scss';
import Header from '../header/Header';
import Navigator from '../navigator/Navigator';
import MainPage from '../mainPage/MainPage';

const App: FC  = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openOrClosePanel = () => {
    setOpen(open => !open);
  }

  return (
    <div className="app">
      <Header open={open} onClick={openOrClosePanel}/>
      <main className="app-box">
        <Navigator open={open} onClick={openOrClosePanel}/>
        <MainPage/>
      </main>
    </div>
  );
}

export default App;
