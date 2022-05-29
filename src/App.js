import "./App.scss";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Bar from "./components/Bar/Bar";
import songs from "./songs.json";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListDetail } from "./components/ListDetail";
import { LayoutDefault } from "./components/Layouts";
function App() {
  console.log(songs);
  const { song } = useSelector((state) => state.playSongReducer);
  console.log("app", song);
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />

        <Routes>
          <Route
            path="/"
            element={
              <div className="main">
                <Home choices={songs} />
              </div>
            }
          />
          <Route
            path="/list-detail"
            element={
              <div className="main">
                <ListDetail />
              </div>
            }
          />
        </Routes>
        {song && <Bar song={song} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
