import React from 'react'
import Footer from './components/footer/Footer'
import Board from './components/board/Board'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'


const App = ()=>{
  const handle = useFullScreenHandle();

  return (
    <div className = 'app'>

      <button 
        className = 'fullScreen_bttn'
        onClick={handle.enter}
        title = 'Нажмите, чтобы развернуть игру на весь экран'>
          <i className = 'fas fa-expand-arrows-alt fullScreen_icon'/>
      </button>

      <h1>Tic-Tac-Toe React Game</h1>

      <FullScreen handle={handle}>
        <Board/>
      </FullScreen>

      <Footer/>
      
    </div>
  )
}

export default App
