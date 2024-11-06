import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const nav = useNavigate();
    const location = useLocation();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    console.log('User successfully logged in');
                    Swal.fire({
                        title: "Success",
                        text: "You have successfully logged in",
                        icon: "success",
                    });
                    nav(location?.state ? location?.state : '/');
                }
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    }
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                console.log("User successfully signed in via Firebase/Auth provider");
                const user = { email };
                console.log(user);
                // Once Firebase sign-in is successful, call the backend to generate JWT
                fetch("https://sapphire-hotel-server.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                })
                .then(res => res.json())  // Parse the response as JSON
                .then(data => {
                  console.log(data);
                        if (data.success === true) {
                            console.log("JWT token generated successfully");
                            form.reset();
                            Swal.fire({
                                title: "Success",
                                text: "You have successfully logged in.",
                                icon: "success",
                            });
                            nav(location?.state ? location.state : "/");
                        } else {
                            Swal.fire({
                                title: "Error",
                                text: "Something went wrong while generating JWT.",
                                icon: "error",
                            });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        Swal.fire({
                            title: "Oops...",
                            text: "Error generating JWT token.",
                            icon: "error",
                        });
                    });
            })
            .catch((error) => {
                console.error("SignIn error:", error);
                Swal.fire({
                    title: "Error",
                    text: "Invalid email or password",
                    icon: "error",
                });
            });
    }
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-300 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center font-bold mt-8">Sign in</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn bg-yellow-600 text-white text-lg' type="submit" value="Sign in" />
                        </div>
                        <div className="divider">Or sign in with</div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSignIn} className='btn bg-yellow-600 text-white'><FontAwesomeIcon icon={faGoogle} /> Google</button>
                        </div>
                        <p className='text-center text-sm mt-6'>Not a user? <Link className='text-yellow-600' to='/signup'>Register Here</Link></p>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <img className='hidden md:block rounded-lg' src="https://i.ibb.co.com/s6dWb4y/sunset-pool.jpg" alt="" />
                </div>


            </div>
        </div>
    );
}

export default SignIn;
