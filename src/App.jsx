import { useState, useEffect, useRef } from 'react'
import Home from './Home'
import Collection from './Collection'
import ViewAlbum from './ViewAlbum'
import {Routes, Route} from 'react-router-dom'
import useWindowDimensions from './windowDimensions'
import PlayerControl from './playerControl'


function App() {

  const { height, width } = useWindowDimensions()
  const [isToggled, setIsToggled] = useState(false);
      
  const [songs, setSongs] = useState([{audio: ''}])
  const [isPlaying, setisPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState('')

  useEffect(()=>{
      fetch('https://musica-api.up.railway.app/new')
          .then((res)=>res.json())
          .then((data)=>setSongs(data))
  },[])

  useEffect(()=>{
    setCurrentSong(songs[0])
  },[songs])

  function handleToggle(){
    setIsToggled(prevToggle=>!prevToggle)
  }

  return (
    <>
    <Routes>
      <Route path='/' element={<Home width={width} isToggled={isToggled} handleToggle={handleToggle}/>}/>
      <Route path='/collection' element={<Collection width={width} height={height} isToggled={isToggled} handleToggle={handleToggle}/>}/>
      <Route path='/viewalbum' element={<ViewAlbum width={width} height={height} isToggled={isToggled} handleToggle={handleToggle} setCurrentSong={setCurrentSong} setSongs={setSongs} setisPlaying={setisPlaying} isPlaying={isPlaying}/>}/>
    </Routes>
    <PlayerControl width={width} songs={songs} setisPlaying={setisPlaying} isPlaying={isPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
    </>
  )
}

export default App
