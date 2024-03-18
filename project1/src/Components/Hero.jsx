import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h2>YOUR FEET DESERVE THE BEST</h2>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="top-btn">Shop Now</button>
          <button className="bottom-btn">Category</button>
        </div>

        <div className="brand-icons">
          <p>Available also on</p>
          <div className="icons">
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="amazon" />
          </div>
        </div>
      </div>

      <div className="shoe">
        <img src="/images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};

export default Hero;
