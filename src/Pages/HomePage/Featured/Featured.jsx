import Common_section from "../../../Components/Common-section/Common_section";
import "./Featured.css"
import FeaturedImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
       <div className="pb-10">
         <div className="featuredBg bg-fixed">
           <div className="md:p-10 p-6">
           <Common_section
             heading={`${'FROM OUR MENU'}`}
             subHeading={"--- Check it out ---"}
            ></Common_section>

            <div className="md:flex gap-8 items-center ">
                <img className="w-[400px] md:ml-48" src={FeaturedImg} alt="" />
                <div className="space-y-2 text-white ">
                    <h1 className="text-xl">March 20, 2023</h1>
                    <h3 className="uppercase text-xl">Where can i get some?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corporis maiores ullam assumenda exercitationem impedit <br /> porro, ipsa cum tempora amet deserunt.</p>
                    <button className="py-2 border-b-2 px-2 rounded-xl border-0   bg-inherit border-t-none text-white ">Read More</button>
                </div>
               
            </div>
           </div>
        </div>
       </div>
    );
};

export default Featured;