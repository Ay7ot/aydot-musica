import { nanoid } from "nanoid";
import { useState } from "react";

function MyCollections() {

    const  [collectionItems, setCollectionItems] = useState([
        {
            artist: 'John Watts',
            albumName: 'Limits',
            likes: '2.3m likes',
            albumCover: 'collection1.png',
            id: nanoid()
        },
        {
            artist: 'John Watts',
            albumName: 'Limits',
            likes: '2.3m likes',
            albumCover: 'collection2.png',
            id: nanoid()
        },
        {
            artist: 'John Watts',
            albumName: 'Limits',
            likes: '2.3m likes',
            albumCover: 'Lead-image.png',
            id: nanoid()
        }
    ]);



    return (  
        <div className="w-full mt-10 sm:px-[10%] md:px-0 mb-[25%] sm:mb-[15%] lg:mb-[35%] md:grid md:grid-cols-2 gap-10 lg:grid-cols-4 xl:grid-cols-5">
            {collectionItems.map(item=>{
                    const collectionStyle = {
                        backgroundImage: `url(${item.albumCover})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }
                return (
                    <div className="w-full h-[240px] mb-[10%] md:mb-0 rounded-[1rem]" style={collectionStyle} key={item.id}>
                        <div className="px-5 text-gray pt-24 lg:pt-40">
                            <p className="text-[1.3rem] tracking-wider">{item.albumName}</p>
                            <p className="text-[0.7rem]">{item.artist}</p>
                        </div>
                        <div className="flex items-center justify-between px-5 pt-6 lg:hidden">
                            <p className="text-white text-[0.9rem] tracking-wide">{item.likes}</p>
                            <img src="Play.png"/>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default MyCollections;