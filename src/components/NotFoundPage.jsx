import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      style={{
        fontSize: "30px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}>
      404 Not Found
      <Link to="/">Home</Link>
    </div>
  );
}
