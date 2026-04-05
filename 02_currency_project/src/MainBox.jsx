import CurrencyBox1 from "./Components/CurrencyBox1"
import CurrencyBox2 from "./Components/CurrencyBox2"
import ConverBtn from "./Components/ConvertBtn"
export default function MainBox(){
    return(<>

    <div className="
    w-180
    rounded-3xl
    bg-amber-100
    p-21
    flex 
    flex-col
    items-center
    justify-center">
        <CurrencyBox1 />

        <div><button className="cursor-pointer bg-blue-400 hover:bg-blue-900 rounded-md h-11 w-44 ">Swap boxes</button></div>

        <CurrencyBox2 />
        <br /> <br />
        <ConverBtn />
    </div>
    </>)
}
// let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`