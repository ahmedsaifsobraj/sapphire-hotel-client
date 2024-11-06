import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyBooking from './MyBooking';

const MyBookings = () => {
    const [rating, setRating] = useState(0);
    const { user } = useContext(AuthContext);
    const [bookedRooms, setBookedRooms] = useState([]);
    const handleRatingChange = e => {
        setRating(Number(e.target.value));
    }
    const handleSubmit = () => {
        console.log("Rating submitted:", rating);
        fetch('https://sapphire-hotel-server.vercel.app/ratings', {
            method: 'POST',
            body: JSON.stringify({ rating }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log("Response from server:", data);
                // Optionally reset the rating or close the modal here
                setRating(0); // Reset rating after submission
                document.getElementById('my_modal_1').close(); // Close the modal
            })
            .catch(error => {
                console.error("Error submitting rating:", error);
            });
    };
    useEffect(() => {
        if (user?.email) {
            fetch(`https://sapphire-hotel-server.vercel.app/bookings/${user.email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => setBookedRooms(data))
                .catch(err => console.error('Error fetching bookings:', err));
        }
    }, [user?.email]);

    return (
        <div>
            <h2 className='text-5xl text-center my-8 text-yellow-600'>My Bookings</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-8'>
                {bookedRooms.length > 0 ? (
                    bookedRooms.map(myBooking => (
                        <MyBooking key={myBooking._id} myBooking={myBooking} setBookedRooms={setBookedRooms} />
                    ))
                ) : (
                    <p>No bookings found.</p>
                )}
            </div>
        </div>
    );
};

export default MyBookings;
