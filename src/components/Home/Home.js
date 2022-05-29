import React from "react";
import Header from "../Header/Header";
import "./Home.scss";
import { PlayCircleOutlined } from "@ant-design/icons";

const Home = ({ choices }) => {
  return (
    <div className="Home">
      <Header />
      <div className="item">
        <div className="title">
          <h2>Spotify's Choices</h2>
          <a>VIEW ALL</a>
        </div>
        <ul>
          <li>
            {choices.map((val) => (
              <div key={val.id} className="inbox">
                <div className="image">
                  <img src={val.img} alt="" />
                  <PlayCircleOutlined />
                </div>
                <h4>{val.title}</h4>
                <p>{val.content}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <div className="item">
        <div className="title">
          <h2>Spotify's Choices</h2>
          <a>VIEW ALL</a>
        </div>
        <ul>
          <li>
            {choices.map((val) => (
              <div key={val.id} className="inbox">
                <div className="image">
                  <img src={val.img} alt="" />
                  <PlayCircleOutlined />
                </div>
                <h4>{val.title}</h4>
                <p>{val.content}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <div className="item">
        <div className="title">
          <h2>Spotify's Choices</h2>
          <a>VIEW ALL</a>
        </div>
        <ul>
          <li>
            {choices.map((val) => (
              <div key={val.id} className="inbox">
                <div className="image">
                  <img src={val.img} alt="" />
                  <PlayCircleOutlined />
                </div>
                <h4>{val.title}</h4>
                <p>{val.content}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <div className="item">
        <div className="title">
          <h2>Spotify's Choices</h2>
          <a>VIEW ALL</a>
        </div>
        <ul>
          <li>
            {choices.map((val) => (
              <div key={val.id} className="inbox">
                <div className="image">
                  <img src={val.img} alt="" />
                  <PlayCircleOutlined />
                </div>
                <h4>{val.title}</h4>
                <p>{val.content}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <div className="item">
        <div className="title">
          <h2>Spotify's Choices</h2>
          <a>VIEW ALL</a>
        </div>
        <ul>
          <li>
            {choices.map((val) => (
              <div key={val.id} className="inbox">
                <div className="image">
                  <img src={val.img} alt="" />
                  <PlayCircleOutlined />
                </div>
                <h4>{val.title}</h4>
                <p>{val.content}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <div className="item">
        <div className="title">
          <h2>Spotify's Choices</h2>
          <a>VIEW ALL</a>
        </div>
        <ul>
          <li>
            {choices.map((val) => (
              <div key={val.id} className="inbox">
                <div className="image">
                  <img src={val.img} alt="" />
                  <PlayCircleOutlined />
                </div>
                <h4>{val.title}</h4>
                <p>{val.content}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <div className="item">
        <div className="title">
          <h2>Spotify's Choices</h2>
          <a>VIEW ALL</a>
        </div>
        <ul>
          <li>
            {choices.map((val) => (
              <div key={val.id} className="inbox">
                <div className="image">
                  <img src={val.img} alt="" />
                  <PlayCircleOutlined />
                </div>
                <h4>{val.title}</h4>
                <p>{val.content}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
