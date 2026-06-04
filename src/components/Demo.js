import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black" +
        (isDarkTheme ? " bg-black text-white" : " bg-white text-black")
      }
    >
      <div>
        <input
          className="p-1 border border-black text-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className={
            "font-bold p-2 mx-2 rounded-lg" +
            (isDarkTheme
              ? " bg-red-400  text-white"
              : " bg-red-500  text-white")
          }
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Color : {isDarkTheme ? "Dark" : "White"}
        </button>
      </div>
      <div>
        <h1>nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
