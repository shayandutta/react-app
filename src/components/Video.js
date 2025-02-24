import "./Video.css";

function Video({ id, title, channel = "shayan codes", views, time, verified, children }) {
  //passing the default value inside the channel prop, so incase we forget to pass channel while calling the Video component, it will automatically filled by this default value. When we pass the prop with other value, the default value gets overwritten

  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/200/300`}
            alt="Katherine Johnson"
            width={300}
          />
        </div>
        <div className="title">{title}</div>

        {/* {verified? <div className="channel">{channel} ✅</div> : <div className="channel">{channel} </div>};    ternary operator */}
        <div className="channel">
          {/* {channel} {verified ? "✅" : null} */}
          {channel} {verified && "✅"}
        </div>

        <div className="views">
          {views} <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
