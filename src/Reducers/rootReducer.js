import { combineReducers } from "redux";
import { playSongReducer } from "./PlaySong";

const rootReducer = combineReducers({
  playSongReducer,
});
export default rootReducer;
