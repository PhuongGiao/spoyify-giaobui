import React, { useEffect, useRef, useState } from "react";
import "./Bar.scss";
import {
  HeartOutlined,
  DoubleLeftOutlined,
  PauseOutlined,
  DoubleRightOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

const Bar = ({ choices }) => {
  const song = {
    title: "1904",
    artist: "The Tallest Man on Earth",
    year: "2012",
    web_url: "http://www.songnotes.cc/songs/78-the-tallest-man-on-earth-1904",
    img_url: "https://picsum.photos/130",
  };
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const ref = useRef();
  const progressBar = useRef();
  const animation = useRef();

  useEffect(() => {
    console.log(ref.current.currentTime);
    const seconds = Math.floor(ref.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [ref?.current?.loadedmetadata, ref?.current?.readyState]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      ref.current.play();
      animation.current = requestAnimationFrame(whilePlaying);
    } else {
      ref.current.pause();
      cancelAnimationFrame(animation.current);
    }
  };
  const calculateTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const returnMins = mins < 10 ? `0${mins}` : `${mins}`;
    const second = Math.floor(secs % 60);
    const returnSeconds = second < 10 ? `0${second}` : `${second}`;
    return `${returnMins}:${returnSeconds}`;
  };

  const changeRange = () => {
    ref.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };
  const whilePlaying = () => {
    progressBar.current.value = ref.current.currentTime;
    changeCurrentTime();
    animation.current = requestAnimationFrame(whilePlaying);
  };
  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };
  const skip = (time) => {
    const audio = ref.current;

    if (time === "back") {
      // changes
      audio.currentTime = audio.currentTime - 15;
    } else if (time === "fwd") {
      // changes
      audio.currentTime = audio.currentTime + 15;
    }
  };
  return (
    <div className="Bar">
      <div className="botBox">
        <div className="inforSong">
          <div>
            <img src={song.img_url} alt="" />
          </div>
          <div className="name">
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
          <HeartOutlined />
        </div>
        <div className="audioPlayer">
          <div className="music">
            <button onClick={() => skip("back")}>
              <DoubleLeftOutlined />
            </button>
            <button onClick={handleClick}>
              {isPlaying ? <CaretRightOutlined /> : <PauseOutlined />}
            </button>
            <button onClick={() => skip("fwd")}>
              <DoubleRightOutlined />
            </button>
            <audio
              ref={ref}
              src="https://f9-stream.nixcdn.com/NhacCuaTui1026/YeuEmHonMoiNgay-Andiez-7136374.mp3?st=tYsaFm82EuLPtQE1AGFLyw&e=1653805345&t=1653720851964"
              preload="metadata"
            ></audio>
            <div style={{ display: "flex" }}>
              <p>{calculateTime(currentTime)}</p>
              <input
                className="progressBar"
                type="range"
                ref={progressBar}
                onChange={changeRange}
                defaultValue="0"
              />
              <p>{duration && !isNaN(duration) && calculateTime(duration)}</p>
            </div>
          </div>
        </div>
        <div className="vol">
          <img
            className="image"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Bar;
