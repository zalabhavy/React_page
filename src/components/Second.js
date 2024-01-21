import React from 'react';

const Second = () => {
  return (
    <div className="second-container">
      <div className="shoes-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="shoes-btn">
          <button className="primary-btn">Shop Now!</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-ico">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="shoes-img">
        <img src="/images/shoe_image.png" alt="shoes" />
      </div>
    </div>
  );
};

export default Second;
