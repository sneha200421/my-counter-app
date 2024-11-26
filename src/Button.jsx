import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        margin: "10px",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        background: "#007bff",
        color: "#fff",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
