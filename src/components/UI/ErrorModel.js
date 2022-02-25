import React from "react";
import "./ErrorModal.css";

export default function ErrorModel(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <h3>{props.message}</h3>
        </div>
        <button className="actions" onClick={props.onConfirm}>
          Okay
        </button>
      </div>
    </div>
  );
}
