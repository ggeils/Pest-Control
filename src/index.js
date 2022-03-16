import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../src/components/Login";
import SignUp from "../src/components/SignUp";
import Report from "../src/components/Report";
import Chart from "./components/Chart";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Report" component={Report} />
        <Route path="/Chart" component={Chart} />
      </Switch>
      </BrowserRouter>,
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);