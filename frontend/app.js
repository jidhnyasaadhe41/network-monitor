import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/logs")
      .then(res => res.json())
      .then(data => setLogs(data))
      .catch(err => console.error("Error fetching logs:", err));
  }, []);

  return (
    <div className="container">
      <h1>Network Monitor</h1>

      {logs.length === 0 ? (
        <p>Loading...</p>
      ) : (
        logs.map(item => (
          <div key={item.id} className="card">
            <p><strong>Status:</strong> {item.status}</p>
            <p><strong>Latency:</strong> {item.latency} ms</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;