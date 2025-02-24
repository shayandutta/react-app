import Video from "./components/Video";
import "./App.css";

function App() {
  let Obj = [
    {
      title: "Node JS",
      views: "12.5k",
      time: "1 month ago",
      channel: "Shayan codes",
      verified: false
    },
    {
      title: "React JS",
      views: "100.5k",
      time: "1 year ago",
      channel: "Joshuwa Bardwell",
      verified: true
    },
    {
      title: "VUE JS",
      views: "19.5k",
      time: "6 month ago",
      channel: "Coder gyaan",
      verified: false
    },
    {
      title: "Express JS",
      views: "67k",
      time: "3 month ago",
      channel: "BB ki vines",
      verified: true
    },
  ];

  return (
    <div className="App">
      <div>Videos</div>
      <Video {...Obj[0]} />
      <Video {...Obj[1]} />
      <Video {...Obj[2]} />
      <Video {...Obj[3]} />
    </div>
  );
}

export default App;
