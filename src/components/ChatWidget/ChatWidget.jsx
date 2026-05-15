import React, { useState } from "react";

import "./ChatWidget.css";

const ChatWidget = () => {

  const [open, setOpen] = useState(false);

  return (

    <>

      <button
        className="chat-button"
        onClick={() => setOpen(!open)}
      >

        💬

      </button>

      {open && (

        <div className="chat-box">

          <h3>
            Live Chat
          </h3>

          <p>
            Chat support coming soon...
          </p>

        </div>

      )}

    </>

  );
};

export default ChatWidget;