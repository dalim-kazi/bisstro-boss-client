import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import img6 from '../../../assets/home/slide6.jpg'
import img7 from '../../../assets/home/slide7.jpg'
import img8 from '../../../assets/home/slide8.jpg'
import img9 from '../../../assets/home/slide9.jpeg'
import SectionTittle from '../../../components/SectionTittle/SectionTittle';


 const Category = () => {
    return (
      <>
        <section>
          <SectionTittle
            Heading={'----From 11am to 10pm----'}
            subHeading={'order online'}
          >
          </SectionTittle>
        </section>
        <section>
        <Swiper 
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
            <img className='w-1/2 md:w-full mx-auto' src={img1} alt="" />
          <p className='text-3xl uppercase text-center text-white -mt-10'>Salads</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-1/2 md:w-full mx-auto' src={img2} alt="" />
          <p className='text-3xl uppercase text-center text-white -mt-10'>pizza</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-1/2 md:w-full mx-auto' src={img3} alt="" />
            <p  className='text-3xl uppercase text-center text-white -mt-10'>soup</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-1/2 md:w-full mx-auto' src={img4} alt="" />
          <p className='text-3xl uppercase text-center text-white -mt-10'>cake</p>
          </SwiperSlide>
        <SwiperSlide><img className='w-1/2 md:w-full mx-auto' src={img5} alt="w-10" /></SwiperSlide>
        <SwiperSlide><img className='w-1/2 md:w-full mx-auto' src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-1/2 md:w-full mx-auto' src={img7} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-1/2 md:w-full mx-auto' src={img8} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-1/2 md:w-full mx-auto' src={img9} alt="" />
          </SwiperSlide>
         
        <SwiperSlide><img className='w-1/2 md:w-full mx-auto' src={img7} alt="" /></SwiperSlide>
      </Swiper>
       </section>
        </>
    );
 };
 
 export default Category;