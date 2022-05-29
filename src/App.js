import "./App.scss";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Bar from "./components/Bar/Bar";

function App() {
  const choices = [
    {
      id: "1",
      title: "EQUAL Vietnam",
      content: "asfas",
      img: "https://picsum.photos/130",
    },
    {
      id: "2",
      title: "EQUAL Vietnam",
      content: "asfasfsasssssssssssssssssss",
      img: "https://picsum.photos/130",
    },
    {
      id: "3",
      title: "EQUAL Vietnam",
      content: "asfasfsasssssssssssssssssss",
      img: "https://picsum.photos/130",
    },
    {
      id: "4",
      title: "EQUAL Vietnam",
      content: "asfasfsasssssssssssssssssss",
      img: "https://picsum.photos/130",
    },
    {
      id: "5",
      title: "EQUAL Vietnam",
      content: "asfasfsasssssssssssssssssss",
      img: "https://picsum.photos/130",
    },
  ];
  return (
    <div className="App">
      <Menu />
      <div className="main">
        <Home choices={choices} />
      </div>
      <Bar choices={choices} />
    </div>
  );
}

export default App;
