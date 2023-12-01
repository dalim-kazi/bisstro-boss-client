import Cover from "../../../shared/cover/Cover";

 import img from '../../../assets/home/chef-special.jpg'
const BackgroundBanner = () => {
    return (
      <div className="mt-20">
        <Cover
          img={img}
          details={'Consectetur adipisicing elit. Sint obcaecati, accusantium id deserunt maxime consequuntur unde velit ullam ipsum voluptates labore error consectetur illo tempora repellat, animi veniam pariatur ipsa libero facilis numquam et. Velit natus deserunt alias suscipit nesciunt doloremque? Minus maiores, similique recusandae nemo doloremque sunt tenetur quasi'}
        ></Cover>
        
        </div>
    );
 };
 
 export default BackgroundBanner;