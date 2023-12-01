import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import BackgroundBanner from "../backgroundBanner/BackgroundBanner";
import PopularMenu from "../popularMenu/PopularMenu";

const Home = () => {
    return (
        <div className="mb-10">
            <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
            <Banner></Banner> 
            <Category></Category>
            <BackgroundBanner></BackgroundBanner>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Card></Card>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;