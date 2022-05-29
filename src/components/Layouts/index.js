import React from "react";
import Header from "../Header/Header";

export const LayoutDefault = ({ childrent }) => {
  return (
    <div className="main">
      <Header />
      {childrent}

      {/* <Home choices={songs} /> */}
    </div>
  );
};
