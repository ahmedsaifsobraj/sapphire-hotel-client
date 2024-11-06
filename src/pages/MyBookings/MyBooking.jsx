import React from 'react';
import Swal from 'sweetalert2';
import Bookings from '../Bookings/Bookings';

const MyBooking = ({ myBooking, setBookedRooms }) => {
    const { _id, image, roomName, email, contact, date } = myBooking;
    console.log(myBooking);
    const handleupdate = e => {
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const contact = form.contact.value;
        const updatedBooking = { date, contact };
        console.log(updatedBooking);
        fetch(`https://sapphire-hotel-server.vercel.app/bookings/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookedRooms(prevBookings => 
                    prevBookings.map(book => 
                        book._id === _id ? { ...book, date, contact } : book
                    )
                );
                document.getElementById(`my_modal_${_id}`).close();
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfuly updated an item.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Opps!',
                    text: 'Something went wrong',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

    }
    const handleCancel = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sapphire-hotel-server.vercel.app/bookings/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                       if(data.deletedCount >0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        setBookedRooms(prevBookings => prevBookings.filter(book => book._id !== _id));
                       }
                    }
                    );
            }
        })
    }

        return (
            <div className="card bg-base-300 w-full shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {roomName}
                        <div className="badge bg-yellow-600 text-white">Sapphire Hotel</div>
                    </h2>
                    <p>Booking Date: {date}</p>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">Free Wifi</div>
                        <div className="badge badge-outline">Free Breakfast</div>
                    </div>
                    <div className="card-actions justify-end">
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-yellow-600 text-white text-lg" onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}>Update</button>
                        <dialog id={`my_modal_${_id}`} className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">You can change only date and contact.</h3>
                                <form onSubmit={handleupdate} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>

                                        <input type="date" defaultValue={date} name='date' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Contact</span>
                                        </label>
                                        <input type="text" defaultValue={contact} name='contact' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-yellow-600 text-white text-lg">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                        <button onClick={() => handleCancel(_id)} className="btn bg-yellow-600 text-white text-lg">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }


export default MyBooking;
