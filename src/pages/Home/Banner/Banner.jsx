import React from 'react';
import one from '../../../images/Banner/1.jpg';
import two from '../../../images/Banner/2.jpg';
import three from '../../../images/Banner/3.jpg';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const nav = useNavigate();
    return (
        <div className="carousel w-full ">
            <div style={{ height: "500px" }} id="slide1" className="carousel-item relative w-full sm:h-[300px] md:h-[500px]">
                <img
                    src={one}
                    className="w-full" />
                <div className='absolute inset-0 flex items-center justify-center  bg-black bg-opacity-30 p-4 rounded'>
                    <div className="text-center">
                        <p className=' text-white font-extralight mb-4 '>RELAXATION AND COMFORT</p>
                        <h2 className='text-2xl md:text-6xl text-white font-bold mb-8 '>LUXURY HOTEL</h2>
                        <button onClick={()=>{nav('/rooms')}} className="btn btn-outline text-white bg-black bg-opacity-20 ">View Rooms</button>
                    </div>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between p-4">
                    <a href="#slide4" className="btn btn-circle btn-outline text-white  bg-black bg-opacity-20">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-outline text-white  bg-black bg-opacity-20">❯</a>
                </div>
            </div>
            <div style={{ height: "500px" }} id="slide2" className="carousel-item relative w-full">
                <img
                    src={two}
                    className="w-full" />
                <div className='absolute inset-0 flex items-center justify-center  bg-black bg-opacity-30 p-4 rounded'>
                    <div className="text-center">
                        <p className=' text-white font-extralight mb-4 '>RELAXATION AND COMFORT</p>
                        <h2 className='text-2xl md:text-6xl text-white font-bold mb-8'>LUXURY ROOMS</h2>
                        <button onClick={()=>{nav('/rooms')}} className="btn btn-outline text-white  bg-black bg-opacity-20 ">View Rooms</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between p-4">
                    <a href="#slide1" className="btn btn-circle btn-outline text-white  bg-black bg-opacity-20">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-outline text-white  bg-black bg-opacity-20">❯</a>
                </div>
            </div>
            <div style={{ height: "500px" }} id="slide3" className="carousel-item relative w-full">
                <img
                    src={three}
                    className="w-full" />
                <div className='absolute inset-0 flex items-center justify-center  bg-black bg-opacity-30 p-4 rounded'>
                    <div className="text-center">
                        <p className=' text-white font-extralight mb-4 '>RELAXATION AND COMFORT</p>
                        <h2 className='text-2xl md:text-6xl text-white font-bold mb-8'>VIP ROOMS</h2>
                        <button onClick={()=>{nav('/rooms')}} className="btn btn-outline text-white  bg-black bg-opacity-20">View Rooms</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between p-4">
                    <a href="#slide2" className="btn btn-circle btn-outline text-white  bg-black bg-opacity-20">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-outline text-white  bg-black bg-opacity-20">❯</a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
