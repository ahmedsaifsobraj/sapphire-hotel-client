
import { useEffect, useState } from "react";
import FeatureRoom from "../FeatureRoom/FeatureRoom";
const FeaturedRooms = () => {
    const [rooms, setRooms]=useState([]);
    useEffect(()=>{
        fetch("https://sapphire-hotel-server.vercel.app/featuredrooms",{
            method:'GET',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>setRooms(data))
    },[])
    return (
        <div>
            <h1 className="text-2xl md:text-5xl my-8 text-yellow-600 text-center">Rooms & Suites</h1>
          
            <div className="carousel w-full">
                {
                    rooms.map(room=><FeatureRoom key={room._id} room={room}></FeatureRoom>)
                }
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs rounded-2xl">1</a>
                <a href="#item2" className="btn btn-xs rounded-2xl">2</a>
                <a href="#item3" className="btn btn-xs rounded-2xl">3</a>
            </div>
        </div>
    );
}

export default FeaturedRooms;
