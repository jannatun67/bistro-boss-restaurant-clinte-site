import React from 'react';
import MenuItemCard from '../../Shared/MenuItemCard/MenuItemCard';

const MenuCategory = ({items}) => {
    return (
        <div className='w-11/12 mx-auto pb-10'>
             <div className="grid md:grid-cols-2 gap-3 space-y-4">
                {
                   items.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className="flex  justify-center mt-10">
                <button className="btn bg-white border-b-2 border-b-black">View Full  Menu</button>
            </div>
        </div>
    );
};

export default MenuCategory;