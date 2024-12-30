import Common_section from "../../Components/Common-section/Common_section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div>
      <Common_section
        heading={`${"TESTIMONIALS"}`}
        subHeading={"--- What Our Clients Say ---"}
      ></Common_section>
      <div className="w-11/12 mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className="m-24">
               <div className="flex justify-center">
               <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
               </div>
               <div className="flex justify-center text-7xl my-8">
               <FaQuoteLeft />
               </div>
                <p className="p-3">{review?.details}</p>
                <h2 className="text-2xl font-semibold text-[#CD9003] text-center">
                  {review?.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
