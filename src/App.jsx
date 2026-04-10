import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [setcount, setsetcount] = useState(0);

  function handleincre() {
    setCount((pre) => pre + 1);
  }

  function handledre() {
    setCount((pre) => (pre > 0 ? pre - 1 : 0));
  }
  function handlereset() {
    setCount(0);
  }
  function handleset() {
    setCount(setcount);
  }
  return (
    <>
      <p className="text-center text-2xl font-bold p-5">Counter:{count}</p>
      <div className="p-50 flex justify-center items-center">
        <button
          className="m-2 bg-blue-500 text-white border-2 border-blue-500 rounded"
          onClick={handleincre}
        >
          increase
        </button>
        <button
          className="m-2 bg-red-500 text-white border-2 border-red-500 rounded"
          onClick={handledre}
        >
          decrement
        </button>
        <input
          className="m-20 border-2 border-red-500 rounded "
          placeholder="input"
          onChange={(e) => {
            setsetcount(e.target.value);
          }}
          value={setcount}
        />
        <button
          className="bg-blue-500 text-white border-2 border-blue-500 rounded"
          onClick={handleset}
        >
          Set to: {setcount}{" "}
        </button>
        <button
          className="m-2  bg-gray-500 text-white border-2 border-gray-500 rounded"
          onClick={handlereset}
        >
          reset
        </button>
      </div>
    </>
  );
}

export default App;
