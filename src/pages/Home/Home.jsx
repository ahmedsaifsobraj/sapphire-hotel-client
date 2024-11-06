import SpecialOffers from '../Special Offers/SpecialOffers';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import FeaturedRooms from './FeaturedRooms/FeaturedRooms';
import HotelMap from './HotelMap/HotelMap';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Contact></Contact>
            <FeaturedRooms></FeaturedRooms>
            <SpecialOffers></SpecialOffers>
            <NewsLetter></NewsLetter>
        </div>
    );
}

export default Home;
