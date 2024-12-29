

import Banner from './Banner';
import BistroBoss from './BistroBoss/BistroBoss';
import Category from './Category';
import PopularMenu from './PopularMenu';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
           
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default HomePage;