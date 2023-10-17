
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-6">
            <p className="text-yellow-500 italic">--- {subHeading} ---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4 my-5">{heading}</h3>
        </div>
    );
};

export default SectionTitle;