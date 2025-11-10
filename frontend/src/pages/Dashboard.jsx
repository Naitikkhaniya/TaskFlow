import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        setError(err.response?.data?.detail || "Unauthorized");
      }
    };
    loadUser();
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "80px auto", fontFamily: "sans-serif" }}>
      <h2>Dashboard</h2>
      {user ? (
        <pre style={{ background: "#f5f5f5", padding: 16 }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      ) : (
        <p>{error || "Loading..."}</p>
      )}
    </div>
  );
}
