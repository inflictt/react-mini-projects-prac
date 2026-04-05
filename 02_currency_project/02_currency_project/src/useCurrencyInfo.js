// let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
import { useEffect,useState } from "react";
export default function useCurrencyInfo(){
    let [data,setData] = useState({})
    useEffect((currency)=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json)
        .then((res)=>setData(res[currency]))
    },[currency]) 
    return data
}
