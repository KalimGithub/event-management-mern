import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div className="w-full h-full fixed top-[50%] left-[50%] z-[500]">
      {/* <p>Loading..........</p> */}
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loader;
