import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [kiboData, setKiboData] = useState(null);

  // Use environment variable for API URL, fallback to relative path for production or localhost for development
  const API_URL = process.env.REACT_APP_API_URL || 
    (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000');

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/ping/login`, {
        username,
        password,
      });
      setMessage(res.data.message);
      setIsLoggedIn(true);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  const handleLogout = async () => {
    await axios.post(`${API_URL}/api/ping/logout`);
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setMessage("✅ Logged out successfully");
    setKiboData(null);
  };

  const fetchKiboData = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/kibo/data`);
      setKiboData(res.data);
    } catch (err) {
      setKiboData({ message: "Failed to fetch Kibo data" });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Kibo + Ping Integration</h2>
      {!isLoggedIn ? (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: "10px", padding: "8px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: "10px", padding: "8px" }}
          />
          <br />
          <button
            onClick={handleLogin}
            style={{
              marginTop: "10px",
              padding: "8px 15px",
              background: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      ) : (
        <div>
          <h3>{message}</h3>
          <button
            onClick={handleLogout}
            style={{
              marginTop: "10px",
              padding: "8px 15px",
              background: "#dc3545",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
          <br />
          <button
            onClick={fetchKiboData}
            style={{
              marginTop: "20px",
              padding: "8px 15px",
              background: "#28a745",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Fetch Kibo Data
          </button>
          {kiboData && (
            <pre style={{ textAlign: "left", margin: "20px auto", width: "50%" }}>
              {JSON.stringify(kiboData, null, 2)}
            </pre>
          )}
        </div>
      )}
      <p style={{ marginTop: "20px", color: "gray" }}>{message}</p>
    </div>
  );
}

export default App;
