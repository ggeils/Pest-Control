import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


import Login from "./components/Login";
import CurrentBugs from "./components/CurrentBugs";
import SignUp from "./components/SignUp";
import Report from "./components/Report";
import PieRechartComponent from "./components/Chart";

const httpLink = createHttpLink({
  uri: "/graphql",
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Report" component={Report} />
          <Route path="/Chart" component={PieRechartComponent} />
          <Route path="/Current" component={CurrentBugs} />
        </Switch>
      </ApolloProvider>
      </BrowserRouter>,
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);