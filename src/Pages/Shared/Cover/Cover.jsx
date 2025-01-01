import { Parallax } from 'react-parallax';

const Cover = ({img,title,paragraph}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
       <div className="hero h-[400px] object-cover md:h-[700px]">
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="  mx-auto bg-black opacity-50 md:py-20 md:px-80 ">
            <h1 className="mb-5 md:text-5xl text-2xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
             {paragraph}
            </p>
           
          </div>
        </div>
      </div>
    </Parallax>
        
    );
};

export default Cover;