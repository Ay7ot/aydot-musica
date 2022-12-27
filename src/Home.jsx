import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar"
import NavMobile from './Components/NavMobile'
import NavToggled from './Components/NavToggled'
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import HomeRelease from "./Components/HomeBody/HomeRelease";
import HomeCategories from "./Components/HomeBody/HomeCategories";

function Home({ isToggled, handleToggle, width, token, spotifyApi, logout }) {

    return (  
        <>
            <div className={isToggled ? "h-screen bg-background font-serif" : "hidden"}>
                <NavToggled isToggled={isToggled} handleToggle={handleToggle} logout={logout}/>
            </div>
            <div className={isToggled ? 'hidden' : ''}>
                <div className={isToggled ? "hidden" : "bg-background font-serif w-screen relative pt-[1.5rem] px-[1rem] min-h-screen scroll-smooth"}>
                    {width < 1024 ? <NavMobile isToggled={isToggled} handleToggle={handleToggle}/> : <Navbar logout={logout}/>}
                    <HomeHeader width={width} token={token} spotifyApi={spotifyApi}/>
                    <div className="lg:pl-24 xl:pr-10 2xl:pr-[6%] pb-[20%] md:pb-[15%] lg:pb-[10%] 2xl:pb-[5%]">
                        <HomeRelease token={token} spotifyApi={spotifyApi}/>
                        <HomeCategories token={token} spotifyApi={spotifyApi} />
                    </div>
                </div>               
            </div>
        </>
    );
}

export default Home;
