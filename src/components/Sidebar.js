import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // this is knowm as early return
  // if (!isMenuOpen) return null;
  // or return !isMenuOpen ? null : ( <div>Hello</div> )

  return (
    <>
      {isMenuOpen && (
        <div className="p-4 text-center shadow-lg h-[48rem] w-[10rem]">
          <h1 className="font-bold">Subscriptions</h1>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/demo"}>Demo</Link>
            </li>
            <li>Videos</li>
            <li>Live</li>
          </ul>
          <h1 className="font-bold pt-5">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
          <h1 className="font-bold pt-5">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
          <h1 className="font-bold pt-5">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
          <h1 className="font-bold pt-5">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
