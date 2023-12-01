import { Helmet } from "react-helmet";
import Cover from "../../../shared/cover/Cover";
import img from '../../../assets/menu/menu-bg.jpg'
import MenuCategory from "./MenuCategory/MenuCategory";
import UseMenu from "../../../components/hook/useMenu/UseMenu";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
const Menu = () => {
    const details =' pariatur eligendi mollitia sequi quaerat a blanditiis dolor fuga possimus, beatae natus at harum consequuntur.pariatur eligendi mollitia sequi quaerat a blanditiis dolor fuga possimus, beatae natus at harum consequuntur.'
    const [menus] = UseMenu()
    const soups = menus.filter(item => item.category === 'soup')
    const salads = menus.filter(item => item.category === 'salad')
    const pizzas = menus.filter(item => item.category === 'pizza')
    const desserts = menus.filter(item => item.category === 'dessert')
    const offered = menus.filter(item => item.category === 'offered')
    return (
        <div className="mb-10">
        <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
            <Cover
                img={img}
                name={'our menu'}
                details={'Consectetur adipisicing elit. Sint obcaecati, accusantium id deserunt maxime consequuntur.Consectetur adipisicing elit. Sint obcaecati, accusantium id deserunt maxime consequuntur.Consectetur adipisicing elit. Sint obcaecati, accusantium id deserunt maxime consequuntur.Consectetur adipisicing elit. Sint obcaecati, accusantium id deserunt maxime consequuntur'}
            ></Cover>
            <SectionTittle
                Heading={"Don't  Miss"}
                subHeading={"Today's  offer"}
            ></SectionTittle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory tittle={'Dessert'} img={dessertImg} items={desserts} details={details}></MenuCategory>
            <MenuCategory items={pizzas} tittle={'Pizza'} img={pizzaImg} details={details}> </MenuCategory>
            <MenuCategory items={salads} tittle={'Salad'} img={saladImg} details={details}></MenuCategory>
            <MenuCategory items={soups} tittle={'Soup'} img={soupImg} details={details}></MenuCategory>
        </div>
    );
};

export default Menu;