import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import image1 from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={image1} title={'Our Menu'} ></Cover>
            <PopularMenu/>
            <Cover img={image1} title={'Our Menu'} ></Cover>
            <PopularMenu/>
            <Cover img={image1} title={'Our Menu'} ></Cover>
            <PopularMenu/>
        </div>
    );
};

export default Menu;