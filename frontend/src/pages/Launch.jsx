import { useEffect, useState } from "react";
import "../styles/launch.css";

export default function Launch({ children }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2800);
    return () => clearTimeout(t);
  }, []);

  if (!done) {
    return (
      <div className="launch-screen">
        <h1 className="launch-text">TaskFlow</h1>
        <div className="glow-ring"></div>
      </div>
    );
  }

  return children;
}
