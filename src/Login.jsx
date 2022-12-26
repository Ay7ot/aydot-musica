import React from 'react'
import { useEffect, useState } from 'react'
import Home from './Home'
import PlayerControl from './playerControl'

export default function Login({width, logout, isToggled, handleToggle, CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, token, spotifyApi, audioElem, songs, nextTrack, prevTrack, setisPlaying, isPlaying, currentSong, setCurrentSong, onPlaying, playPause }) {

    
    return (
        
        <>
            {!token ?
                <div className='bg-background min-h-screen flex flex-col items-center justify-center'>
                    <h1 className='font-bold'>AYDOT MUSICA</h1> 
                    <a className='text-white text-lg bg-green px-5 py-3 rounded-lg mt-5' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login With Spotify</a>
                </div>
                :
                <>
                    <Home  width={width} isToggled={isToggled} handleToggle={handleToggle} token={token} spotifyApi={spotifyApi} logout={logout}/>
                    {!isToggled &&  <PlayerControl width={width} songs={songs} setisPlaying={setisPlaying} isPlaying={isPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong} audioElem={audioElem} onPlaying={onPlaying} nextTrack={nextTrack} prevTrack={prevTrack} playPause={playPause}/>}
                </>
            }
        </>
        
    )
}
