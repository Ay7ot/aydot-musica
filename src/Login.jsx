import React from 'react'
import { useEffect, useState } from 'react'
import Home from './Home'
import PlayerControl from './playerControl'

export default function Login({width, isToggled, handleToggle}) {

    const CLIENT_ID = '2a702725bcae4235a6d7e3e6dd3005a2'
    const REDIRECT_URI = 'http://localhost:5173'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState('')

    useEffect(()=>{
        const hash = window.location.hash
        let token = window.localStorage.getItem('token')

        if(!token && hash){
            token = hash.substring(1).split('&').find(elem=>elem.startsWith('access_token')).split('=')[1]
            window.location.hash = ''
            window.localStorage.setItem('token', token)
        }
        setToken(token)
    },[])
    return (
        
        <>
            {!token ?
                <div className='bg-background min-h-screen flex flex-col items-center justify-center'>
                    <h1 className='font-bold'>AYDOT MUSICA</h1> 
                    <a className='text-yellow text-sm' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login To spotify</a>
                </div>
                :
                <Home width={width} isToggled={isToggled} handleToggle={handleToggle}/>
            }
        </>
        
    )
}
