import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../../firebase";
import Message from "../Message/Message";
import ChatInput from "../ChatInput/ChatInput";
import "./Chat.css";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomDetails);
  console.log(roomMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages?.map(({ message, createdAt, user, userImage }) => (
          <Message
            message={message}
            createdAt={createdAt}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
