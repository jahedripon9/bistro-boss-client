import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Call from "../Call/Call";
import Catagory from "../Catagory/Catagory";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PhotoPoster from "../PhotoPoster/PhotoPoster";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Catagory />
            <PhotoPoster />
            <PopularMenu />
            <Call />
            <ChefRecommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;