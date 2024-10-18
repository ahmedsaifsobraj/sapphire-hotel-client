import React from 'react';
import one from '../../../images/Banner/1.jpg';
import two from '../../../images/Banner/2.jpg';
import three from '../../../images/Banner/3.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div style={{ height: "500px" }} id="slide1" className="carousel-item relative w-full">
                <img
                    src={one}
                    className="w-full" />
                <div className='absolute inset-0 flex items-center justify-center  bg-black bg-opacity-30 p-4 rounded'>
                    <div className="text-center">
                        <p className=' text-white font-extralight mb-4 '>RELAXATION AND COMFORT</p>
                        <h2 className='text-6xl text-white font-bold mb-4'>LUXURY HOTEL</h2>
                        <button className="btn btn-outline text-white">View Rooms</button>
                    </div>
                </div>

                <div className="absolute bottom-5 right-5 flex space-x-2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div style={{ height: "450px" }} id="slide2" className="carousel-item relative w-full">
                <img
                    src={two}
                    className="w-full" />
                <div className='absolute inset-0 flex items-center justify-center  bg-black bg-opacity-30 p-4 rounded'>
                    <div className="text-center">
                        <p className=' text-white font-extralight mb-4 '>RELAXATION AND COMFORT</p>
                        <h2 className='text-6xl text-white font-bold mb-4'>LUXURY ROOMS</h2>
                        <button className="btn btn-outline text-white">View Rooms</button>
                    </div>
                </div>
                <div className="absolute bottom-5 right-5 flex space-x-2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div style={{ height: "450px" }} id="slide3" className="carousel-item relative w-full">
                <img
                    src={three}
                    className="w-full" />
                <div className='absolute inset-0 flex items-center justify-center  bg-black bg-opacity-30 p-4 rounded'>
                    <div className="text-center">
                        <p className=' text-white font-extralight mb-4 '>RELAXATION AND COMFORT</p>
                        <h2 className='text-6xl text-white font-bold mb-4'>VIP ROOMS</h2>
                        <button className="btn btn-outline text-white">View Rooms</button>
                    </div>
                </div>
                <div className="absolute bottom-5 right-5 flex space-x-2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
