import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


// Images 

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Catagory = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11:00AM to 10:00PM"}
                heading={"ORDER ONLINE"}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide >
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>
                </SwiperSlide>


            </Swiper>
        </section>
    );
};

export default Catagory;