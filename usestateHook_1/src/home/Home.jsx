import React from "react";

export default function Home({ appCount, setCount }) {
  let count = 0;
  return (
    <div className="bg-warning">
      <p>Count: {appCount}</p>
      {appCount > 0 && (
        <button
          className="btn btn-success mx-1"
          onClick={() => setCount(appCount - 1)}
        >
          Decrease Count
        </button>
      )}
    </div>
  );
}
