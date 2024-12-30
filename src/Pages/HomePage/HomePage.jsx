

import { Helmet } from 'react-helmet-async';
import Chef_Recommends from '../Chef_Recommends';
import Banner from './Banner';
import BistroBoss from './BistroBoss/BistroBoss';
import CallUs from './CallUs';
import Category from './Category';
import Featured from './Featured/Featured';

import PopularMenu from './PopularMenu';
import Testimonials from './Testimonials';

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss/Home</title>
            </Helmet>
            <Banner></Banner>
           
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Chef_Recommends></Chef_Recommends>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;