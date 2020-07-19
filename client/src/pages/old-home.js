import React, { useEffect, useState } from "react";
import { socket } from "../config/socket";
import ChatContext from "../context/chats/chatContext";
import { useContext } from "react";

const Home = () => {
  const [msg, setMsg] = useState("");
  // const chatContext = useContext(ChatContext);

  // const { msgs, getMsg } = chatContext;

  useEffect(() => {
    // getMsg();
  }, []);

  const onSubmit = () => {
    socket.emit("msg", msg);
    setMsg("");
  };

  return (
    <div className="main">
      <input type="text" onChange={(e) => setMsg(e.target.value)} value={msg} />
      <button onClick={onSubmit}>Send</button>

      <h3>Messages</h3>
      {/* {msgs ? msgs.map((chat) => <p>{chat.msg}</p>) : <p>No Messages</p>} */}
    </div>
  );
};

export default Home;
