import React from 'react';
import { useNavigate } from 'react-router-dom';

const SpecialOffers = () => {
    const nav = useNavigate();
    return (
        <div className='mx-auto'>
            <h1 className="text-2xl md:text-5xl text-yellow-600 text-center my-8">Special Offers</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:p-6'>
                <div className="card bg-base-300 md:w-96 shadow-xl md:p-5">
                    <div className="card-body">
                        <h2 className="card-title text-lg md:text-3xl font-bold my-4">Exclusive 20% Off</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li className='mb-4'>Use code: FIRST20 at checkout.</li>
                            <li className='mb-4'>Valid for first-time customers only.</li>
                            <li className='mb-4'>Applicable on all rooms</li>
                            <li className='mb-4'>Limited time offer—hurry!</li>
                            <li className='mb-4'>Sign up for our newsletter for future deals.</li>
                        </ul>
                        <div className="card-actions justify-start">
                            <button onClick={() => { nav('/rooms') }} className="btn bg-yellow-600 text-white font-bold w-full">Book Now</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-300 md:w-96 shadow-xl md:p-5">
                    <div className="card-body">
                        <h2 className="card-title text-lg md:text-3xl font-bold my-4">Exclusive 40% Off</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li className='mb-4'>Use code: REG30 at checkout.</li>
                            <li className='mb-4'>Valid for our regular customers only.</li>
                            <li className='mb-4'>Applicable on all rooms</li>
                            <li className='mb-4'>Limited time offer—hurry!</li>
                            <li className='mb-4'>Sign up for our newsletter for future deals.</li>
                        </ul>
                        <div className="card-actions justify-start">
                            <button onClick={() => { nav('/rooms') }} className="btn bg-yellow-600 text-white font-bold w-full">Book Now</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-300 md:w-96 shadow-xl md:p-5">
                    <div className="card-body">
                        <h2 className="card-title text-lg md:text-3xl font-bold my-4">Exclusive 30% Off</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li className='mb-4'>Use code: O30 at checkout.</li>
                            <li className='mb-4'>Valid for newly wed only.</li>
                            <li className='mb-4'>Applicable on all rooms</li>
                            <li className='mb-4'>Limited time offer—hurry!</li>
                            <li className='mb-4'>Sign up for our newsletter for future deals.</li>
                        </ul>
                        <div className="card-actions justify-start">
                            <button onClick={() => { nav('/rooms') }} className="btn bg-yellow-600 text-white font-bold w-full">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default SpecialOffers;
