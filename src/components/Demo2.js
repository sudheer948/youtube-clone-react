import { useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  const ref = useRef(0);

  console.log("rendering...");

  let x = 10;
  console.log(x);

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96">
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <h1 className="font-bold text-xl">{x}</h1>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <h1 className="font-bold text-xl">{y}</h1>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Ref
        </button>
        <h1 className="font-bold text-xl">Ref = {ref.current}</h1>
      </div>
    </div>
  );
};

export default Demo2;
