import { FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { RiFileList3Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex ">
            <div className="w-64 min-h-screen bg-[#D1A054] p-4">
                <h2 className="mb-7"><span className="font-extrabold text-2xl">BISTRO BOSS</span> <br /><span className="font-semibold text-2xl">Restaurant</span></h2>
                <ul className="menu gap-3">
                    <li>
                        <NavLink to="/dashboard/cart"> <FaShoppingCart /> My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/userHome"> <IoMdHome /> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"> <FaCalendarAlt /> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory"> <GiWallet />Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addReview"> <MdOutlineRateReview />Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myBooking"> <RiFileList3Fill />My Booking</NavLink>
                    </li>
                   
                   <div className="divider bg-white h-[1px]"></div>
                   <li>
                        <NavLink to="/"> <IoMdHome /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"> <IoMenu />Menu</NavLink>
                    </li>
                    
                
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;