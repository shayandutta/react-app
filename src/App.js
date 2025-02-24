import Video from "./components/Video";
import "./App.css";
import videos from "./data/utils";
import PlayButton from "./components/playButton";

function App() {
  return (
    <div className="App" onClick={()=> console.log("play")}>
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        >
          <PlayButton
            onPlay={() => console.log("video played", video.title)} 
            onPause={() => console.log("video paused", video.title)}
          >
            {video.title}
          </PlayButton>{" "}
          
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        {/* <PlayButton message="play message" onPlay={()=>console.log("video played")} onPause={()=>console.log("video paused")}>play</PlayButton> onSmash is a custom event here which is passed as a prop */}

        {/* <PlayButton message="pause message" onSmash={()=>alert("pause")}>pause</PlayButton> */}
      </div>
    </div>
  );
}

export default App;
