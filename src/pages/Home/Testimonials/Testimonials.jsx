import { useEffect, useState } from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import quotation from '../../../assets/home/quotation.png'
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('https://bistro-boss-server-lemon-theta.vercel.app/review')
            .then(res => res.json())
        .then(data=>setTestimonials(data))
    },[])
    return (
        <>
            <section>
                <SectionTittle
                
                    Heading={'What Our Client Say'}
                    subHeading={'testimonials'}
                ></SectionTittle>
            </section>  
            <section>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
                        testimonials?.map(testimonial => <SwiperSlide
                            key={testimonial._id}
                        >
                            <div className="flex flex-col items-center mx-20 my-20">
                            <Rating
                               style={{ maxWidth: 180 }}
                                     value={testimonial.rating}
                                        readOnly
                                />
                                <img className="w-44" src={quotation} alt="" />
                                <p className="italic">{testimonial.details}</p>
                                <p className="text-yellow-500 text-xl italic">{testimonial.name}</p>
                            </div>
                        </SwiperSlide>)           
         }
      </Swiper>
            </section>
        </>
    );
 };
 
 export default Testimonials;