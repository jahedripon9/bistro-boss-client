import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import img1 from '../../../assets/menu/salad-bg.jpg'
const ChefRecommends = () => {
    return (
        <div className='md:mx-20'>
            <div>
                <SectionTitle
                    heading="CHEF RECOMMENDS"
                    subHeading="Should Try"
                >

                </SectionTitle>
            </div>
            <div className='flex gap-2 my-10 '>
                <div className=" card w-4/12 bg-base-300 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline text-white border-0 border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className=" card w-4/12 bg-base-300 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline text-white border-0 border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="flex card w-4/12 bg-base-300 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline text-white border-0 border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;