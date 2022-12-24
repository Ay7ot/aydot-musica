import NavMobile from "./Components/NavMobile";
import NavToggled from "./Components/NavToggled";
import Navbar from "./Components/Navbar";
import AlbumComponent from "./Components/AlbumComponent";
import { useLocation } from 'react-router-dom';

function ViewAlbum({ isToggled, handleToggle, width, currentSong, setCurrentSong, setSongs, isPlaying, setisPlaying, token, spotifyApi }) {

    const location = useLocation()
    
    return (  
        <>
        <div className={isToggled ? "h-screen bg-background font-serif" : "hidden"}>
            <NavToggled isToggled={isToggled} handleToggle={handleToggle}/>
        </div>
        <div className={isToggled ? 'hidden' : ''}>
            <div className={isToggled ? "hidden" : "bg-background font-serif w-screen relative pt-[1.5rem] px-[1rem] overflow-x-hidden h-full min-h-screen scroll-smooth"}>
                {width < 1024 ? <NavMobile isToggled={isToggled} handleToggle={handleToggle}/> : <Navbar />}
                <div className={width >= 1024 ? "absolute top-[115px] left-[10%] xl:left-[8%] lg:pb-[120px]" : 'mt-10'}>
                    <div className="lg:w-[85vw]">
                        <AlbumComponent playlist={location.state} width={width} currentSong={currentSong} setCurrentSong={setCurrentSong} setSongs={setSongs} isPlaying={isPlaying} setisPlaying={setisPlaying} token={token} spotifyApi={spotifyApi} />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default ViewAlbum;