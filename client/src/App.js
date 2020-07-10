import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatState from "./context/chats/ChatState";

const App = () => {
  return (
    <ChatState>
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </ChatState>
  );
};

export default App;
