import { useParams } from "react-router-dom"
export default function User(){
    const {userid} = useParams()
    return(
        <>
        <h4>USer hu mai with id :{userid}</h4>
        </>
    )
}