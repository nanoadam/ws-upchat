import React, { useReducer } from "react";
import ChatContext from "./chatContext";
import chatReducer from "./chatReducer";
import { socket } from "../../config/socket";
import { GET_MSG } from "../types";

const ChatState = (props) => {
  const initialState = {
    msgs: [],
  };
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const getMsg = () => {
    socket.on("new-msg", (newMsg) => {
      dispatch({ type: GET_MSG, payload: newMsg });
      console.log(newMsg);
    });
  };

  return (
    <ChatContext.Provider value={{ getMsg, msgs: state.msgs }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
