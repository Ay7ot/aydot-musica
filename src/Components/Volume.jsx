import { useState } from "react";

function VolumeSlider() {

    const [value, setValue] = useState(0.5)

    function getBackgroundSize(){
        return { backgroundSize: `${value * 100 / 1}% 100%`}
    }
    
    return (  
        <input 
            type='range'
            min='0'
            max='1'
            step="0.01"
            className="appearance-none bg-gray rounded-lg bg bg-gradient-to-r from-yellow to-yellow h-1 cursor-pointer slider-thumb bg-no-repeat"
            value={value}
            onChange={(e)=>setValue(e.target.valueAsNumber)}
            style={getBackgroundSize()}
        />
    );
}

export default VolumeSlider;