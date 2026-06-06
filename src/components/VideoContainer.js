import { useEffect, useRef, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [fetching, setFetching] = useState(false);
  // Prevent Multiple API Calls
  const loadingRef = useRef(false);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    setFetching(false);
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    if (json) setFetching(true);

    setVideos(json.items);
    setNextPageToken(json.nextPageToken);
  };

  const loadMoreVideos = async () => {
    if (!nextPageToken) return;
    if (loadingRef.current) return;

    console.log("Loading API Call");
    console.log(nextPageToken);

    loadingRef.current = true;

    try {
      setFetching(false);
      const data = await fetch(
        YOUTUBE_VIDEOS_API + "&pageToken=" + nextPageToken,
      );

      const json = await data.json();
      if (json) setFetching(true);
      //console.log(json);

      setVideos((prev) => [...prev, ...json.items]);
      setNextPageToken(json.nextPageToken);
    } finally {
      loadingRef.current = false;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextPageToken]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 100
    ) {
      loadMoreVideos();
    }
  };

  return !fetching ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-wrap">
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
      <div>
        {loadingRef.current && (
          <h1 className="text-center font-bold text-2xl">
            Loading more videos...
          </h1>
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
