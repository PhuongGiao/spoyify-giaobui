import { PLAY_SONG } from "./Types/PlaySong";
import songs from "../songs.json";

const initialState = {
  song: [],
  songs,
};

export const playSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      console.log("song", action);
      return {
        ...state,
        song: state.songs.filter((val) => val.id === action.id)[0],
      };

    default:
      return state;
  }
};
