import React from 'react';
import two from "../../../images/NewsLetter/2.jpg";
const NewsLetter = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-left">
                    <img src={two} className='hidden rounded-xl md:block' alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                            <button className="btn btn-primary">Join Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;
