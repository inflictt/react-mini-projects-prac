import React from "react";
import MainBox from "./MainBox";
import InputBox from "./Components/InputBox";

export default function App() {
  return (
    <main className="h-screen w-screen bg-cyan-950 flex flex-col justify-center items-center">
      <div>
        <h2 className="w-142 h-24 text-3xl flex justify-center items-center rounded-2xl bg-blue-300 mb-28">
          Convert Your Currency Now!
        </h2>
      </div>

      <div>
        <InputBox label="From:" />
        <br />
        <InputBox label="To:" />
      </div>
    </main>
  );
}