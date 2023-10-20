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
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 gap-4  justify-center ">
                        <div class="p-4 md:w-1/4 sm:mb-0 mb-6 text-center bg-slate-200 rounded-lg">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src={ img1} />
                            </div>
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Caeser Salad</h2>
                            <p class="text-base leading-relaxed mt-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <a class="btn btn-outline text-black border-0 border-b-4 text-1xl">Add to cart </a>
                        </div>
                        <div class="p-4 md:w-1/4 sm:mb-0 mb-6 text-center bg-slate-200 rounded-lg ">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src={ img1} />
                            </div>
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Caeser Salad</h2>
                            <p class="text-base leading-relaxed mt-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <a class="btn btn-outline text-black border-0 border-b-4 text-1xl">Add to cart </a>
                        </div>
                        <div class="p-4 md:w-1/4 sm:mb-0 mb-6 text-center bg-slate-200 rounded-lg">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src={img1 }/>
                            </div>
                            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Caeser Salad</h2>
                            <p class="text-base leading-relaxed mt-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <a class="btn btn-outline text-black border-0 border-b-4 text-1xl">Add to cart </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChefRecommends;