const SectionTittle = ({Heading,subHeading}) => {
     
    return (
        <div className='mx-auto w-4/12 text-center mb-5 md:mt-12 md:mb-10'>
            <p className="text-lg text-yellow-500">{Heading}</p>
            <p className="text-xl uppercase border-y-2 p-2 text-bold">{subHeading}</p>
        </div>
    );
};

export default SectionTittle;