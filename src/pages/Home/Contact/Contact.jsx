import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div className="md:stats shadow w-full my-8 ">
            <div className="stat">
                <div className="stat-figure text-yellow-600">
                    <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="stat-title">Address</div>
                <div className=" text-yellow-600 font-bold text-lg">Dhaka,Bangladesh</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-yellow-600">
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="stat-title">Phone</div>
                <div className=" text-yellow-600 font-bold text-lg">(+880) 12345678910.</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-yellow-600">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="stat-title">Email Us</div>
                <div className=" text-yellow-600 font-bold text-lg">a@mail.com</div>
            </div>
        </div>
    );
}

export default Contact;
