import "./App.css";
// import { Row, Col } from "antd";
import Login from "./components/Login/index";
import ChatRoom from "./components/Chatroom/index";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={ChatRoom} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
