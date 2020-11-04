import "./styles/App.css";
import Header from "./Header";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Cards from "./Cards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header back="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header back="/" />
            <Chats />
          </Route>

          <Route path="/profile"></Route>
          <Route path="/">
            <Header />
            <Cards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
