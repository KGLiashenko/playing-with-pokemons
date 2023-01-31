import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center position-absolute translate-middle top-50 start-50">
      <h1 className="card-title">Welcome Pokémons fans</h1>
      <p className="card-subtitle p-3">
        Do you want to play with some pokémons?
      </p>
      <Link className="btn btn-primary" href={"collection"}>
        Go!
      </Link>
    </div>
  );
};

export default Welcome;
