const MenuItem = ({ menu }) => {
     const {image,price,recipe,name}=menu
    return (
        <div className="flex gap-5 p-5 md:p-0">
            <div>
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-44" src={image} alt="" />
           </div>
            <div>
            <div className="flex font-medium justify-between">
                <p className="uppercase italic">{name}------------------</p>
            <p className="text-yellow-400 text-lg italic">{price}$</p>
            </div>
            <p className="italic">{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;