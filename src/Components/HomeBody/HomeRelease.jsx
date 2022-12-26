import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeReleases({token, spotifyApi }) {

    spotifyApi.setAccessToken(token);

    const [forYou, setForYou] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        spotifyApi.getFeaturedPlaylists({
            country: 'NG',
            limit: 10,
            offset: 0
          })
        .then(response => {
            // console.log(response)
            setForYou(response);
            setLoading(false);
        }).catch(error => {
            setError(error);
            setLoading(false);
        });
        
    }, []);

    
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    
    return (  
        <section className="box-content">
                <h2 className='text-gray-dark font-bold text-[1.2rem] mt-10 lg:text-[1.5rem]'>Editor's Picks</h2>
                <div className="overflow-x-scroll no-scrollbar grid grid-cols-10 gap-[170px] sm:gap-[180px] md:gap-[200px] lg:gap-[220px] xl:gap-[250px] 2xl:gap-[10%] mt-4 box-content">
                    {forYou.playlists.items.map(release=>{
                        return (
                            <Link to='/viewAlbum' state={release}>
                                <div className="w-[150px] lg:w-[200px]" key={release.id}>
                                    <img src={release.images[0].url} className='rounded-xl w-full'/>
                                    <p className="text-white font-bold mt-2 tracking-wide">{release.name}</p>
                                    <p className="text-gray-dark text-sm">{release.owner.display_name}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
        </section>
    );
}

export default HomeReleases;