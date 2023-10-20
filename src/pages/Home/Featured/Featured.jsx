import image from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Featured = () => {
    return (
        <div>
            <div className=''>
                <SectionTitle
                    className="z-40"
                    subHeading='FROM OUR MENU'
                    heading='Check it out'
                ></SectionTitle>
            </div>
            <div className="hero min-h-screen bg-fixed	" style={{ backgroundImage: 'url(https://i.ibb.co/zf6nSZ2/featured.jpg)' }}>
                <div className="hero-overlay bg-opacity-60  "></div>
                <div className="hero-content text-left text-neutral-content flex flex-wrap "><div>
                    <img style={{ width: "450px" }} className='rounded-xl' src={image} alt="" />
                </div>
                    <div className="max-w-md text-white">
                        <p className="mb-5 md:text-xl text-base">March 20, 2023</p>
                        <h1 className="mb-5 md:text-2xl text-xl">WHERE CAN I GET SOME?</h1>
                        <p className="mb-5 md:text-base text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-outline text-white border-0 border-b-4 md:text-xl text-sm">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;