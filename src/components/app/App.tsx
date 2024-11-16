import React, { FC } from 'react';
import './app.scss';
import Header from '../header/Header';
import Navigator from '../navigator/Navigator';
import MainPage from '../mainPage/MainPage';

const App: FC  = () => {
  return (
    <div className="app">
      <Header/>
      <main className="app-box">
        <Navigator/>
        <MainPage/>
      </main>
    </div>
  );
}

export default App;
