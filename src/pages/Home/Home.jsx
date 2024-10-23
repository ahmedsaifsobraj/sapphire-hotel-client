import Banner from './Banner/Banner';
import FeaturedRooms from './FeaturedRooms/FeaturedRooms';
import HotelMap from './HotelMap/HotelMap';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <NewsLetter></NewsLetter>
        </div>
    );
}

export default Home;
