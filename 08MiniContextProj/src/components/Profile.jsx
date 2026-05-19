import { useContext } from "react"
import UserContext from "../context/UserContext"
export default function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return <div className="text-red-600 text-4xl">Please Login</div>

    return (
        <>
            <div >
                <h3 className="text-green-950 text-4xl">Welcomes - {user.username}</h3>

            </div>
        </>
    )
}