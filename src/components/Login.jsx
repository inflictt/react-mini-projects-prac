import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <div className="flex flex-col items-center mt-10 gap-4">

            <h2 className="text-3xl font-bold">
                Login!
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-72">

                <input
                    type="text"
                    placeholder="Name"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                />

                <input
                    type="password"
                    placeholder="Set-Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                />

                <button
                    className="bg-teal-700 text-white p-2 rounded"
                >
                    Login Now
                </button>

            </form>
        </div>
    );
}