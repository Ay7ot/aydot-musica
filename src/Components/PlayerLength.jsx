import { useEffect } from "react";
import { useState } from "react";

function PlayerLength({currentSong }) {
    const [playerValue, setPlayerValue] = useState(0)

    console.log(currentSong.progress, playerValue)

    useEffect(()=>{
        if(currentSong.progress){
            setPlayerValue(currentSong.progress)
        }
    },[currentSong.progress])
    
    function getBackgroundSize(){
        return { backgroundSize: `${playerValue * 100 / 100}% 100%`}
    }

    return (  
        <input 
            type='range'
            min='0'
            max='100'
            step='0.5'
            value={playerValue}
            onChange={(e)=>setPlayerValue(e.target.valueAsNumber)}
            style={getBackgroundSize()}
            className="appearance-none bg-gray rounded-lg bg bg-gradient-to-r w-[500px] xl:w-[600px] from-yellow to-yellow h-1 cursor-pointer slide-thumb-player bg-no-repeat"
        />
    );
}

export default PlayerLength;