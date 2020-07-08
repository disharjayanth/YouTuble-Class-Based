import React from "react";

const VideoDetail = ({ video }) => {
  //added loader in app
  console.log(video);

  const localTime = () => {
    return new Date(video.snippet.publishTime).toLocaleString();
  };

  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <h5>{localTime()}</h5>
        <p>{video.snippet.description} </p>
      </div>
    </div>
  );
};

export default VideoDetail;
