import React from "react";
import Header from "../Header/Header";
import "./ListDetail.scss";

export const ListDetail = () => {
  return (
    <>
      <Header />
      <div className="listDetail">
        <div className="top">
          <div className="left">
            <div className="image">
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </div>
          <div className="right">
            <h2>ALBUM</h2>
            <div className="title">SEVENTEEN 4th Album 'Face the Sun</div>
            <div>ALBUM</div>
          </div>
        </div>
        <div className="bottom">
          <h3># TIÊU ĐỀ</h3>
          <div className="list-songs">
            <div className="item-song">
              <span>1</span>
              <div className="info">
                <h3>Ten Bai Hat</h3>
                <p>Ca si</p>
              </div>
              <div className="like"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
