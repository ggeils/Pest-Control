import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Report from "./components/Report";
import PieRechartComponent from "./components/Chart";
import CurrentBugs from "./components/CurrentBugs";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Report" component={Report} />
        <Route path="/Chart" component={PieRechartComponent} />
        <Route path="/Current" component={CurrentBugs} />
      </Switch>
      </BrowserRouter>,
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);