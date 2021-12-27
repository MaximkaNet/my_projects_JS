import React from 'react';
import './App.css';
import Game from './components/Game/Game';
import gameBuilder from './gameBuilder';
const Pexeso1 = new gameBuilder('n1', 30 ,'fruits');
Pexeso1.setCards();
Pexeso1.setRandomCards();

const App = () => {
  return (
    <div className='App'>
      <Game cards={Pexeso1.cards} backImg={`/images/back.png`}/>
    </div>
  );
}
export default App;
