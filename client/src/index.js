import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Report from "./components/Report";
import PieRechartComponent from "./components/Chart";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Report" component={Report} />
        <Route path="/Chart" component={PieRechartComponent} />
      </Switch>
      </BrowserRouter>,
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);