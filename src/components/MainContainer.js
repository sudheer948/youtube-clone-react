import { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { openMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
    <div>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
