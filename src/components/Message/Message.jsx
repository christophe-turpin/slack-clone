import React from "react";
import "./Message.css";

function Message({ message, createdAt, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt={`${user}'s avatar`} />
      <div className="message__info">
        <h4>
          {user}{" "}
          <span className="message__timestamp">
            {new Date(createdAt?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
