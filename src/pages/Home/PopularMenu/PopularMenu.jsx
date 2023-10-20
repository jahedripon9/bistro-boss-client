import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { data } from "autoprefixer";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="my-12 md:mx-20">
            <SectionTitle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            />
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem className=""
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                
            </div>
            <div className="flex flex-col items-center my-10">
                <button className=" btn btn-outline text-white border-0 border-b-4 text-1xl">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;