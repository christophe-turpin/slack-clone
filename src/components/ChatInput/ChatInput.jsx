import { Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "../../firebase";
import firebase from "firebase";
import { useStateValue } from "../../StateProvider";
import "./ChatInput.css";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input !== "") {
      sendMessage(e);
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          onKeyDown={(e) => handleKeyPress(e)}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
          type="text"
        />
        <Button type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
