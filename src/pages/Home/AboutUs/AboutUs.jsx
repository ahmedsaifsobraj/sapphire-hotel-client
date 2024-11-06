import React from 'react';

const AboutUs = () => {
    return (
        <div className='my-8'>
            <h1 className="text-2xl md:text-5xl my-8 text-yellow-600 text-center">Welcome to Sapphire Hotel</h1>
            <div className="hero bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full md:w-1/2'>
                        <img
                            src="https://i.ibb.co.com/342mGp9/nick-fewings-OU-j8-IVmkj4-unsplash.jpg"
                            className="w-full rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-full md:w-1/2 p-4'>
                        <p className="py-6 text-lg text-justify">
                            Experience luxury and comfort in the heart of Dhaka. Our stylish rooms offer modern amenities and stunning views. Enjoy a fitness center, pool, spa services, and exquisite dining featuring local ingredients.
                        </p>
                        <p className='text-lg text-justify'>Perfect for both leisure and business, our versatile event spaces and attentive staff ensure a memorable stay.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
