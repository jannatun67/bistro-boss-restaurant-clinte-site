import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="bg-[#1F2937] w-1/2">
          <div className="text-[#FFFFFF] w-full text-center py-10 space-y-2 ml-28">
            <h1 className="mb-3 font-bold">CONTACT US</h1>
            <div className="font-medium">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="bg-[#111827] w-1/2">
          <div className="w-full text-[#FFFFFF] text-center  py-10 space-y-3 ">
            <div className="mr-80">
              <h1 className="font-bold mb-3">Follow US</h1>
              <p className="font-medium">Join us on social media</p>
            </div>
            <div className="flex gap-4 ml-32 text-xl">
              <p>
                <FaFacebook />
              </p>
              <p>
                <FaInstagram />
              </p>
              <p className="text-white">
                <FaTwitter />
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-center bg-black text-white p-4">
        <aside>
          <p>
          Copyright © CulinaryCloud. All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
