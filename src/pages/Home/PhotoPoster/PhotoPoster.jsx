import photo from '../../../assets/home/chef-service.jpg'
const PhotoPoster = () => {
    return (
        <>
            <div className="hero max-w-screen-xl mx-auto bg-fixed" >
                <img  src={photo} alt="" />
                <div className="hero-overlay bg-opacity-60 mx-auto"></div>
                <div className="hero-content text-center text-neutral-content bg-white md:py-24 md:px-44 rounded-lg opacity-90">
                    <div className="max-w-md  ">
                        <h1 className="mb-5 md:text-5xl font-bold text-black uppercase">Bistro Boss</h1>
                        <p className="mb-5 md:text-sm text-base text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotoPoster;