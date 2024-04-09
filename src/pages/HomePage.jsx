import React, { Fragment } from "react";
import Narbar from "../components/narbar/Narbar";
import Header from "../components/header/Header";

const HomePage = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-10">
        <Narbar></Narbar>
        <Header></Header>
      </div>
    </Fragment>
  );
};

export default HomePage;
