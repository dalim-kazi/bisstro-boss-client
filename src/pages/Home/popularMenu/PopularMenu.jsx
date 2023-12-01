
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import UseMenu from "../../../components/hook/useMenu/UseMenu";


const PopularMenu = () => {
    const [menus] = UseMenu()
    const popular =menus.filter(item=>item.category==='popular')
    // const [menus,setMenus]=useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const menuItem = data.filter(items=>items.category==='popular')
    //             setMenus(menuItem)
    //     })
    // }, [])
    return (
        <div>
            <section>
            <SectionTittle
                Heading={'Popular Menu'}
                subHeading={'from our menu'}
                ></SectionTittle>
                <div className="grid md:grid-cols-2 gap-5 mx-auto">
                    {
                        popular.map(menu => <MenuItem
                            key={menu._id}
                        menu={menu}
                        ></MenuItem>)
                    }
                </div>
           </section>
        </div>
    );
 };
 
 export default PopularMenu;