import React from 'react';
import two from "../../../images/NewsLetter/2.jpg";
const NewsLetter = () => {
    return (
        <> <h1 className="hidden md:block text-2xl text-center md:text-5xl my-8 text-yellow-600">Join Us to Know More</h1>
            <div className="hero bg-base-100 md:min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-left">
                        <img src={two} className='hidden rounded-xl md:block' alt="" />
                    </div>
                    <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">

                        <form className="card-body">
                            <h1 className="text-xl font-bold text-center">For Exclusive Updates & Offers!
                            </h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-yellow-600 text-white text-lg">Join Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div></>

    );
}

export default NewsLetter;
