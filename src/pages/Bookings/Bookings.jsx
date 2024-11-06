import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Bookings = () => {
  const {user}=useContext(AuthContext);
  const { id } = useParams();
  console.log(id)
  const [room, setRoom] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    fetch(`https://sapphire-hotel-server.vercel.app/featuredrooms/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => { setRoom(data); console.log(data); })
      .catch(error => { console.log(error.message) })

  }, [id])
  const handleBooking = e =>{
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const contact = form.contact.value;
    const date =form.date.value;
    const roomName=room.name;
    const image = room.image;
    const bookingsData = {
      image,
      roomName,
      email,
      contact,
      date
    };
    fetch('https://sapphire-hotel-server.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingsData),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to book the room');
        }
        return res.json();
      })
      .then(data => {
        console.log('Booking successful:', data);
        // Optionally, reset the form or show a success message
        form.reset(); // Reset the form fields
        nav('/mybookings');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
  };
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-8">{room.name}</h1>
      <div className="hero bg-base-200 min-h-screen my-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleBooking} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="a@mail.com" value={user?.email} name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact</span>
                </label>
                <input type="text" placeholder="01........." name='contact' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" placeholder="01........." name='date' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" value={room.price} className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-yellow-600 text-white">Book Now</button>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left">
            <img className='rounded-xl' style={{ height: '480px' }} src={room.image} alt="room.image" />
          </div>

        </div>
      </div>
    </div>

  );
}

export default Bookings;
