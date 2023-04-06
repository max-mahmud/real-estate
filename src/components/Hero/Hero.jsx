import React from "react";
import "./Hero.css";
import hero from "../../../public/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero_section">
        <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="hero_left">
            <motion.h1
            initial={{y:"2rem", opacity:0}}
            animate={{y:"0", opacity:1}}
            transition={{
              duration:3,
              type:"spring"
            }}
            >
              Discover <br /> Most Suitable <br /> Property
              <span></span>
            </motion.h1>
            <p>
              Find a variety of properties that suit you very easilty <br /> Forget all
              difficulties in finding a residence for you
            </p>
            <div className="search-bar">
                    <span><HiLocationMarker /></span>
                    <input type="search"  />
                <button className="button">Search</button>
            </div>
            <div className="counter mt-4">
                <div className="counter-flex">
                <h3><CountUp start={8800} end={9000} duration={4} />
                <span className="ms-2 text-warning">+</span> <br /></h3>
                <span>Premium Products</span>
                </div>
                <div className="counter-flex">
                <h3><CountUp start={1950} end={2000} duration={4} />
                <span className="ms-2 text-warning">+</span> <br /></h3>
                <span>Happy Clients</span>
                </div>
                <div className="counter-flex">
                <h3><CountUp start={130} end={150} duration={4} />
                <span className="ms-2 text-warning">+</span> <br /></h3>
                <span>Award Winning</span>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 img-con">
            <motion.div
                            initial={{x:"4rem", opacity:0}}
                            animate={{x:"0", opacity:1}}
                            transition={{
                              duration:3,
                              type:"spring"
                            }}
            className="image-container">
                <img
                src={hero} alt="image" />
            </motion.div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
