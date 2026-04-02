import React, { useCallback, useEffect, useRef, useState } from "react";
export default function App() {
  // making passlength first using the use state
  let [passLen, setPassLen] = useState(8); // by def as 8
  let [numAllowed, setNumAllowed] = useState(false); // by def as false
  let [charAllowed, setCharAllowed] = useState(false); // by def as false
  let copyPass = useRef(null)
  let [password, setPassword] = useState(""); // by def as nothing

  // now using usecallback to store and gen pass
  // let genPass = useCallback(fn, dependency)
  let genPass = useCallback(() => {
    // strings to create nd store it
    let password = "";
    let passBuilder = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums = "0123456789";
    let specChars = "!@#$%^&*()_";
    if (numAllowed) {
      passBuilder += nums;
    }

    if (charAllowed) {
      passBuilder += specChars;
    }

    let idx;

    // using loop to gen pass
    for (let i = 0; i < passLen; i++) {
      idx = Math.floor(Math.random() * passBuilder.length); // this creates a random index
      password += passBuilder[idx];
    }

    setPassword(password);
  }, [passLen, numAllowed, charAllowed, setPassword]);
  useEffect(()=>{
    genPass()
  },[passLen, numAllowed, charAllowed, setPassword,genPass])

  let copyPassToClp = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className="w-screen h-screen bg-gray-900 p-8">
      <div className="flex justify-center bg-gray-100 text-2xl p-4">
        <h1>Welcome to password generator app - React</h1>
      </div>

      <main className="h-50 bg-[#002966]">
        <div className="p-5">
          <form className="flex flex-row justify-center items-center space-x-3">
            <input
            ref={copyPass}
              type="text"
              className="h-8 text-left rounded-md bg-gray-400 pl-3 w-2/3"
              value={password}
              readOnly
              placeholder="Password"
            />

            <button 
            onClick={copyPassToClp}
            className="bg-black hover:bg-blue-300 text-white h-10 w-14 rounded-sm cursor-pointer">
              Copy
            </button>
          </form>
        </div>

        <br />

        <div className="flex flex-row justify-center items-center">
          <form className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <label>Length:{passLen}</label>
              <input
              className="cursor-pointer"
                type="range"
                min="8"
                max="36"
                value={passLen}
                onChange={(e) => setPassLen(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <label 
              htmlFor="numberInput">Number Allowed</label>
              <input 
              type="checkbox" 
              defaultChecked={numAllowed} 
              onChange={()=>setNumAllowed((prev)=>!prev)}
              value={numAllowed} className="cursor-pointer" />
            </div>

            <div className=" flex items-center gap-2">
              <label 
              htmlFor="characterInput">Character Allowed</label>

               <input
              type="checkbox"
              className="cursor-pointer"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />

            </div>
          </form>
        </div>
      </main>
    </div>
  );
}