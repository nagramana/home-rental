import React, {

  useEffect,
  useState

} from "react";

import io from "socket.io-client";

const socket = io(
  "http://localhost:5000"
);

const Chat = () => {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    socket.on(
      "receiveMessage",
      (data) => {

        setMessages((prev) => [

          ...prev,

          data

        ]);

      }
    );

  }, []);

  const sendMessage = () => {

    socket.emit(
      "sendMessage",
      message
    );

    setMessage("");

  };

  return (

    <div style={{ padding:"50px" }}>

      <h1>
        Live Chat
      </h1>

      <div
        style={{
          height:"300px",
          overflowY:"auto",
          border:"1px solid #ddd",
          padding:"20px",
          marginBottom:"20px"
        }}
      >

        {messages.map((msg, index) => (

          <p key={index}>
            {msg}
          </p>

        ))}

      </div>

      <input
        type="text"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Type message"
      />

      <button onClick={sendMessage}>

        Send

      </button>

    </div>

  );
};

export default Chat;