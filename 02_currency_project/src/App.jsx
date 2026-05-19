import React, { useState } from "react";
import MainBox from "./MainBox";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

export default function App() {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);

const options = currencyInfo ? Object.keys(currencyInfo) : [];
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (

    <div
      className=" flex flex-col w-full h-screen  justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    > 
      <h1 className=" p-1.5 m-4 h-12 w-92 rounded-2xl  text-center text-2xl  font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 px-6 shadow-lg inline-block">Currency Converter</h1>
      <div className="w-full px-4">
        <div className="w-full max-w-md mx-auto border border-white/20 rounded-2xl p-6 backdrop-blur-md bg-white/20 shadow-xl">
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>
            <div className="w-full mb-3">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
            </div>

            <div className="relative w-full h-0.5 mb-3">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/30 rounded-lg bg-blue-600 text-white px-4 py-1 shadow-md hover:bg-blue-700 transition-all duration-200"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-3 mb-4">
              <InputBox  label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectCurrency={to}
              amountDisable

              />
              
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg transition-all duration-200"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}