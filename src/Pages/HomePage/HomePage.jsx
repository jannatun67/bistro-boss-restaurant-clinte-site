

import Chef_Recommends from '../Chef_Recommends';
import Banner from './Banner';
import BistroBoss from './BistroBoss/BistroBoss';
import CallUs from './CallUs';
import Category from './Category';
import PopularMenu from './PopularMenu';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
           
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Chef_Recommends></Chef_Recommends>
        </div>
    );
};

export default HomePage;