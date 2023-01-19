import React from "react";

export default function Product_RFC({ movie }) {
  // let { movie } = props;
  // let movie = props.movie;
  return (
    <div className="card text-center my-2">
      <img
        style={{ height: "400px", objectFit: "cover" }}
        className="card-img-top"
        src={movie.hinhAnh}
        alt
      />
      <div className="card-body">
        <h4 className="card-title">{movie.tenPhim}</h4>
        {/* <p className="card-text">Body</p> */}
      </div>
    </div>
  );
}
