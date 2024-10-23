import { faBed, faHouse, faPersonSwimming, faUsers, faUtensils, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FeatureRoom = ({ room }) => {
    const { id,name, price, description, size, capacity, bedType, featureOne, featureTwo, featureThree, image } = room;
    return (
        <div id={id} className="carousel-item w-full block md:flex md:relative">
            <div className="card bg-base-300 w-full md:w-1/2 shadow-xl md:absolute md:left-1/3 md:top-1/4 md:transform md:-translate-y-1/4">
                <div className="card-body">
                    <h2 className="card-title">
                        <span className="text-yellow-600 text-2xl">{price} BDT</span> <small>/ Night</small>
                    </h2>
                    <h1 className="text-xl md:text-3xl text-bold">{name}</h1>
                    <p>{description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div><FontAwesomeIcon icon={faUsers} />{capacity}</div>
                        <div><FontAwesomeIcon icon={faBed} /> {bedType}</div>
                        <div><FontAwesomeIcon icon={faHouse} />{size}</div>
                        <div><FontAwesomeIcon icon={faWifi} />{featureOne}</div>
                        <div><FontAwesomeIcon icon={faUtensils} />{featureTwo}</div>
                        <div><FontAwesomeIcon icon={faPersonSwimming} />{featureThree}</div>
                    </div>
                    <div className="card-actions justify-end my-2">
                        <button className="btn bg-yellow-600 text-white">Book Now</button>
                    </div>
                </div>
            </div>
            <img
                src={image}
                className="w-full md:w-1/2 rounded"
            />
        </div>
        
    );
}

export default FeatureRoom;
