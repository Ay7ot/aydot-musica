import React from 'react'
import { useEffect, useState } from 'react'
import Home from './Home'
import PlayerControl from './playerControl'

export default function Login({width, isToggled, handleToggle, CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, token, spotifyApi }) {


    
    return (
        
        <>
            {!token ?
                <div className='bg-background min-h-screen flex flex-col items-center justify-center'>
                    <h1 className='font-bold'>AYDOT MUSICA</h1> 
                    <a className='text-yellow text-sm' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login To spotify</a>
                </div>
                :
                    <Home  width={width} isToggled={isToggled} handleToggle={handleToggle} token={token} spotifyApi={spotifyApi}/>
            }
        </>
        
    )
}
