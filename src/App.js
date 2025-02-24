import Video from "./components/Video";
import "./App.css";
import videos from "./data/utils";

function App() {
  return (
    <div className="App">
      <div>Videos</div>
      {
        videos.map(video => <Video
        key={video.id}
        id = {video.id}
        title= {video.title}
        views = {video.views}
        time = {video.time}
        channel={video.channel}
        verified={video.verified} />
        )
      }
    </div>
  );
}

export default App;
