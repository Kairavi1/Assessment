import React from "react";
import { FaTrash, FaCopy, FaArrowUp, FaPlus } from "react-icons/fa";

const FloatingToolbar = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "-45px",
        left: "0",
        backgroundColor: "rgb(9, 144, 255)",
        color: "white",
        padding: "6px 12px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "14px",
        zIndex: 1000,
      }}
    >
      <span style={{ fontWeight: "bold" }}>Text</span>
      <FaPlus style={{ cursor: "pointer" }} title="Add" />
      <FaArrowUp style={{ cursor: "pointer" }} title="Move Up" />
      <FaTrash style={{ cursor: "pointer" }} title="Delete" />
      <FaCopy style={{ cursor: "pointer" }} title="Copy" />
    </div>
  );
};

export default FloatingToolbar;
