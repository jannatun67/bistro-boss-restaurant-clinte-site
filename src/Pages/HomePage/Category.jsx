import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import Common_section from '../../Components/Common-section/Common_section';

const Category = () => {
    return (
       <div className='py-8 w-11/12 mx-auto'>
        <Common_section
          heading={"ORDER ONLINE"}
          subHeading={"--- From 11:00am to 10:00pm ---"}
        >  
        </Common_section>
         <Swiper 
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide><img src={slide1}alt="" /><p className='text-4xl uppercase text-center -mt-20 text-white'>Salads</p></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /><p className='text-4xl uppercase text-center -mt-20 text-white'>pizzas</p></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /><p className='text-4xl uppercase text-center -mt-20 text-white'>Soups</p></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /><p className='text-4xl uppercase text-center -mt-20 text-white'>desserts</p></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /><p className='text-4xl uppercase text-center -mt-20 text-white'>Salads</p></SwiperSlide>
      </Swiper>
       </div>
    );
};

export default Category;