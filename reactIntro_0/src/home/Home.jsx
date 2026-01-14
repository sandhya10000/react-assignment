import React from "react";

export default function Home() {
  return (
    <div className="bg-warning my-2 p-2">
      <p>count: {count}</p>

      <hr />
      <button className="btn btn-success">Decrease count</button>
    </div>
  );
}
