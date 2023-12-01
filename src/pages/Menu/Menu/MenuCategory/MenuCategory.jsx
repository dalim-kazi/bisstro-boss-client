import MenuItem from "../../../../shared/MenuItem/MenuItem";
import Cover from "../../../../shared/cover/Cover";

 
const MenuCategory = ({items,tittle,img, details}) => {
    return (
        <div>
            <div>
            {
                tittle && <Cover name={tittle} img={img} details={details}></Cover>
             }
            </div>
            <div className="grid md:grid-cols-2 gap-5 mx-auto mt-10 mb-10">
                    {
                        items.map(menu => <MenuItem
                            key={menu._id}
                        menu={menu}
                        ></MenuItem>)
                    }
                </div>
        </div>
    );
};

export default MenuCategory;