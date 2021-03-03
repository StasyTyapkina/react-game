import React from 'react'
import Footer from './components/footer/Footer'
import Board from './components/board/Board'
import Button from './components/button/Button'
import Music from './components/music/Music'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'


const App = ()=>{
  const handle = useFullScreenHandle();

  return (
    <div className = 'app'>
<Music/>
      <Button 
        class = 'bttn bttn_small'
        name = {<i className = 'fas fa-expand-arrows-alt'/>} 
        title = 'Click for full screen'
        onClick = {handle.enter} 
      />

      <h1>Tic-Tac-Toe React Game</h1>

      <FullScreen handle={handle}>
        <Board/>
      </FullScreen>

      <Footer/>

    </div>
  )
}

export default App
