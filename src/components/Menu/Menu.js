import React from "react";
import "./Menu.scss";
import {
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
  InboxOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
const Menu = () => {
  return (
    <div className="Menu">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt=""
      />
      <div className="content">
        <HomeOutlined />
        <h4>Home</h4>
      </div>
      <div className="content">
        <SearchOutlined />
        <h4>Home</h4>
      </div>
      <div className="content">
        <InboxOutlined />
        <h4>Home</h4>
      </div>
      <div className="playList">
        <div className="content">
          <PlusCircleOutlined />
          <h4>Home</h4>
        </div>
        <div className="content">
          <HeartOutlined />
          <h4>Home</h4>
        </div>
      </div>
    </div>
  );
};

export default Menu;
