import React from "react";
import Header from "../Header/Header";
import "./Home.scss";
import { PlayCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { PLAY_SONG } from "../../Reducers/Types/PlaySong";
import { Link } from "react-router-dom";

const Home = ({ choices }) => {
  const dispatch = useDispatch();
  return (
    <div className="Home">
      <Header />

      <div className="item">
        <div className="title">
          <h2>Spotify's Choices</h2>
          <Link to={"/list-detail"}>VIEW ALL</Link>
        </div>
        <ul>
          <li>
            {choices.slice(0, 5).map((val) => (
              <div key={val.name} className="inbox">
                <div className="image">
                  <img src={val.links.images[0].url} alt={val.name} />
                  <PlayCircleOutlined
                    onClick={() => {
                      dispatch({ type: PLAY_SONG, id: val.id });
                    }}
                  />
                </div>
                <h4>{val.name}</h4>
                <p>{val.author}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
      {/* <div className="item">
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
      </div> */}
    </div>
  );
};

export default Home;
