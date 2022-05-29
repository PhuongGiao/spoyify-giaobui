import React, { useContext, useEffect, useRef, useState } from "react";
import "./Bar.scss";
import {
  HeartOutlined,
  DoubleLeftOutlined,
  PauseOutlined,
  DoubleRightOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { PLAY_SONG } from "../../Reducers/Types/PlaySong";

const Bar = ({ song }) => {
  const dispatch = useDispatch();
  // const { song } = useSelector((state) => state.playSongReducer);

  // const song = {
  //   title: "1904",
  //   artist: "The Tallest Man on Earth",
  //   year: "2012",
  //   web_url: "http://www.songnotes.cc/songs/78-the-tallest-man-on-earth-1904",
  //   img_url: "https://picsum.photos/130",
  // };
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const ref = useRef();
  const progressBar = useRef();
  const animation = useRef();

  // useEffect(() => {
  //   const seconds = Math.floor(ref.current.duration);
  //   setDuration(seconds);
  //   progressBar.current.max = seconds;
  // }, [ref?.current?.loadedmetadata, ref?.current?.readyState]);

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
            <img src={song?.links?.images[0].url} alt="" />
          </div>
          <div className="name">
            <h4>{song?.name}</h4>
            <p>{song?.author}</p>
          </div>
          <HeartOutlined />
        </div>
        <AudioPlayer
          className="audioPlayer"
          src={song.url}
          layout="stacked-reverse"
          showSkipControls={true}
          showJumpControls={false}
          onClickNext={() => dispatch({ type: PLAY_SONG, id: song.id + 1 })}
          onClickPrevious={() => dispatch({ type: PLAY_SONG, id: song.id - 1 })}
        />
        {/* <div className="audioPlayer">
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
            <audio ref={ref} src={song?.url} preload="metadata"></audio>
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
            src={song?.links?.images[0].url}
            alt={song?.name}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Bar;
