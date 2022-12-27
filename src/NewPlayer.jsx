import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function NewPlayer({token, trackuri}) {
    if(!token) return null
    return (
      <div className="fixed bottom-0 w-[100vw] backdrop-blur-md">
        <SpotifyPlayer 
          token={token}
          showSaveIcon
          uris={trackuri ? [trackuri] : []}
        />
    </div>
  )
}
