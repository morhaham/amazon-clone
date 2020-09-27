import React from "react";
import Product from "./Product";
import { v4 as uuidv4 } from "uuid";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/Skala/Israel/Fuji_Hero_SkalaFinal5_2X_en_US._CB452377449_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
          <Product
            id={2}
            title="HP 63 | 2 Ink Cartridges | Black, Tri-color | F6U61AN, F6U62AN"
            price={45.89}
            image="https://m.media-amazon.com/images/I/817+lSVKGCL._AC_UL640_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Roku Express HD Streaming Media Player 2019"
            price={29.0}
            image="https://m.media-amazon.com/images/I/81T70LF0wWL._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id={4}
            title="AmazonBasics 9 Volt Everyday Alkaline Batteries - Pack of 8"
            price={10.99}
            image="https://m.media-amazon.com/images/I/711MfFWIoGL._AC_UL640_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id={5}
            title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
            price={294.99}
            image="https://m.media-amazon.com/images/I/717Di3DGIbL._AC_UL640_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Sceptre E248W-19203R 24' Ultra Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Metallic Black 2018"
            price={294.99}
            image="https://m.media-amazon.com/images/I/51BkTPYbz6L._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
