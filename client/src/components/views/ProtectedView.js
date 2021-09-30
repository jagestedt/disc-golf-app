import { useState, useEffect } from "react";
import axios from "axios";

const ProtectedScreen = ({ history }) => {
    const [error, setError] = useState("");
    const [protectedData, setProtectedData] = useState("");

    useEffect(() => {
        const fetchProtectedData = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios.get("/api/protected", config);
                setProtectedData(data.data);
            } catch (error) {
                localStorage.removeItem("authToken");
                setError("You are not authorized please login");
            }
        };

        fetchProtectedData();
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('authToken');
        history.push('/login');
    };

    return error ? (
        <span className="error-message">{error}</span>
    ) : (
        <div>
            <div>{protectedData}</div>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    );
};

export default ProtectedScreen;