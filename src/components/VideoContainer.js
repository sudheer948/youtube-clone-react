import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.nextPageToken);
    setNextPageToken(json.nextPageToken);
  };

  // Infinite scrolling

  const loadMoreVideos = async () => {
    const data = await fetch(
      YOUTUBE_VIDEOS_API + "&pageToken=" + nextPageToken,
    );

    const json = await data.json();
    //console.log(json);

    setVideos((prev) => [...prev, ...json.items]);
    setNextPageToken(json.nextPageToken);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 100
    ) {
      loadMoreVideos();
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
