import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);