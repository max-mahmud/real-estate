import React from "react";
import { sliderSetting } from "../SliderSetting/SliderSetting";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./SLider.css";
import "swiper/css";
import data from "../../utils/slider.json";

const Slider = () => {
  return (
    <section>
      <div className="container-fluid my-slider paddings px-sm-5">
        <div className="slider-text">
          <h3 className="orangeText">Best Choices</h3>
          <h2 className="primaryText mb-5">Popular Residencies</h2>
        </div>
        <Swiper {...sliderSetting}>
            <SliderButton />
            {
                data.map((card, i)=>(
                    <SwiperSlide key={i}>
                        <div className=" r-card">
                            <img src={card.image} alt="img" />
                            <h4 className="secondaryText"><span className="orangeText">$</span>{card.price}</h4>
                            <h3 className="primaryText">{card.name}</h3>
                            <p className="secondaryText">{card.detail}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        
      </div>
    </section>
  );
};

export default Slider;

 const SliderButton=()=>{
    const swiper = useSwiper();
    return(
        <div className="r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>

        </div>
    )
}
