import Banner from "../Banner/Banner";
import Call from "../Call/Call";
import Catagory from "../Catagory/Catagory";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PhotoPoster from "../PhotoPoster/PhotoPoster";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner />
            <Catagory />
            <PhotoPoster />
            <PopularMenu />
            <Call />
            <ChefRecommends />
            <Featured />
        </div>
    );
};

export default Home;