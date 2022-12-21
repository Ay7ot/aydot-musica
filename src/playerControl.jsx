import VolumeSlider from "./Components/Volume";
import PlayerLength from "./Components/PlayerLength";
import {FaPause, FaPlay, FaForward, FaBackward} from 'react-icons/fa'
import { useEffect, useRef } from "react";

function PlayerControl({width, songs, setisPlaying, isPlaying, currentSong, setCurrentSong }) {

    const audioElem = useRef()
    
    useEffect(()=>{
        if(isPlaying){
            audioElem.current.play()
        }else{
            audioElem.current.pause()
        }
    },[isPlaying, currentSong])

    function playPause(){
        setisPlaying(!isPlaying)
    }

    function onPlaying(){
        const duration = audioElem.current.duration
        const ct = audioElem.current.currentTime

        setCurrentSong({...currentSong, progress: ct / duration * 100})
    }

    function nextTrack(){
        const index = songs.findIndex(x=>x.title === currentSong.title)
        if (index===songs.length-1){
            setCurrentSong(songs[0])
        }else{
            setCurrentSong(songs[index+1])
        }
    }

    function prevTrack(){
        const index = songs.findIndex(x=>x.title === currentSong.title)
        if (index===0){
            setCurrentSong(songs[songs.length-1])
        }else{
            setCurrentSong(songs[index-1])
        }
        audioElem.current.currentTime = 0
    }

    function songEnded(){
        nextTrack()
    } 

    return (  
        <div className="fixed bottom-0 w-[100vw] backdrop-blur-md h-20 md:h-[7rem] lg:h-24">
            <audio src={songs.length > 1 ? currentSong.audio : ''} ref={audioElem} onEnded={songEnded} onTimeUpdate={onPlaying}/>
           {
            width >= 768 ?
            <div className="md:px-6 lg:px-12 xl:pl-24 xl:pr-10 2xl:pr-[6%] flex justify-between items-center mt-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={currentSong.cover} className='w-[3.5rem] rounded-lg'/>
                        <div className="ml-2">
                            <p className="text-white font-bold">{currentSong.title}</p>
                            <p className="text-gray-dark">{currentSong.artist}</p>
                        </div>
                    </div> 
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center w-[50%] justify-between mb-4">
                        <img src="shuffle.png"/>
                        <i className="text-white text-2xl" onClick={prevTrack}><FaBackward/></i>
                        <div onClick={playPause} className='text-gray-dark p-2 bg-yellow rounded-full mr-3 lg:mr-0 mb-'>
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </div>
                        <i className="text-white text-2xl" onClick={nextTrack}><FaForward /></i>
                        <img src="repeate-one.png"/>
                    </div>
                    <PlayerLength currentSong={currentSong} isPlaying={isPlaying} onPlaying={onPlaying}/>
                </div>
                <div className="flex items-center">
                    <img src="volume-high.png" className="mr-4"/>
                    <VolumeSlider />
                </div>
            </div> :
            <div className="flex justify-between mt-2 w-full">
                <div className="flex items-center">
                    <img src={currentSong.cover} className='w-[3.5rem] rounded-lg ml-3'/>
                    <div className="ml-2">
                        <p className="text-white font-bold">{currentSong.title}</p>
                        <p className="text-gray-dark">{currentSong.artist}</p>
                    </div>
                </div>
                <div className="flex items-center mr-2">
                    <i className="text-white text-2xl" onClick={prevTrack}><FaBackward/></i>
                    <div onClick={playPause} className='text-gray-dark p-2 bg-yellow rounded-full ml-3 mr-3'>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </div>
                    <i className="text-white text-2xl" onClick={nextTrack}><FaForward /></i>
                </div>
            </div>
           }
        </div>
    );
}

export default PlayerControl;