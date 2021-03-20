import React from "react";
import { useParams } from "react-router";
import "./Chat.css";

function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h2>You are in the {roomId} room</h2>
    </div>
  );
}

export default Chat;
