import React from 'react';

const Common_section = ({heading,subHeading}) => {
    return (
        <div>
              <div className="w-3/12 mx-auto py-10 text-center space-y-3">
                <p className="text-[#D99904] text-xl ">{subHeading}</p>
                <hr />
                <h4 className="text-3xl">{heading}</h4>
                <hr />
            </div>
        </div>
    );
};

export default Common_section;