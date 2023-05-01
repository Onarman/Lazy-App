import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const LazyLoadPost = ({ title, img }) => {
  return (
    <div className="card">
      <div className="card-header">
        {!title ? <h2>Post title</h2> : <h2>{title}</h2>}
      </div>
      <div className="card-body d-flex">
        <LazyLoadImage
          src={img}
          alt="img"
          height={"fit-content"}
          width={200}
          effect="blur"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem velit accusamus similique nobis. Quasi sunt blanditiis
          enim esse nulla facere quo ducimus quas nostrum possimus!
        </p>
      </div>
    </div>
  );
};

export default LazyLoadPost;
