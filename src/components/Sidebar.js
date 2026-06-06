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
        <div className="flex-shrink-0 fixed top-30  h-[calc(100vh-5rem)] w-[15rem]  overflow-y-auto bg-white p-4 text-center shadow-lg">
          <h1 className="font-bold">🏠 Main Navigation</h1>
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
          <h1 className="font-bold pt-5">🔥 Explore</h1>
          <ul>
            <li>Music</li>
            <li>Trending</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
          <h1 className="font-bold pt-5">📺 Subscriptions</h1>
          <ul>
            <li>Google Developers</li>
            <li>MrBeast</li>
            <li>Traversy Media</li>
            <li>Tech With Tim</li>
          </ul>
          <h1 className="font-bold pt-5">⚙️ More from YouTube</h1>
          <ul>
            <li>Youtube Premium</li>
            <li>Youtube Studio</li>
            <li>Youtube Music</li>
            <li>Youtube Kids</li>
          </ul>
          <h1 className="font-bold pt-5">🛠 Settings</h1>
          <ul>
            <li>Settings</li>
            <li>Report History</li>
            <li>Help</li>
            <li>Send Feedback</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
