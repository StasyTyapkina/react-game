import React from 'react';
import Footer from './components/footer/Footer'
import Square from './components/square/Square';


const App = ()=>{
  return (
    <div className = 'app'>
      <h1>Tic-Tac-Toe React Game</h1>
      <Square/>
      <Footer/>
    </div>
  );
}

export default App;
