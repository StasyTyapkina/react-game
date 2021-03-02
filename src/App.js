import React from 'react'
import Footer from './components/footer/Footer'
import Board from './components/board/Board'


const App = ()=>{
  return (
    <div className = 'app'>
      <h1>Tic-Tac-Toe React Game</h1>
      <Board/>
      <Footer/>
    </div>
  );
}

export default App;
