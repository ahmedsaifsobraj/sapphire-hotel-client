import { useEffect, useState } from 'react';
import roombanner from "../../images/RoomBanner/roombanner.jpg";
import FeatureRoom from '../Home/FeatureRoom/FeatureRoom';
const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch("https://sapphire-hotel-server.vercel.app/featuredrooms", {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${roombanner})`,
                    height:'300px',
                    
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md text-center">
                        <h3 className="mb-5 text-2xl md:text-4xl  text-white">
                            Sapphire Hotel
                        </h3>
                        <h1 className="mb-5 text-3xl md:text-5xl text-white font-bold">Rooms & Suites</h1>

                    </div>
                </div>
            </div>
            <div className="w-full my-8">
                {
                    rooms.map(room=><FeatureRoom key={room._id} room={room}></FeatureRoom>)
                }
            </div>
        </div>
    );
}

export default Rooms;
