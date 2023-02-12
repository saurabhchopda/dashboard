import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import HomePage from "./Components/Home";
import AboutPage from "./Components/AboutPage";
import Header from "./Components/Header";
import FooterComponent from "./Components/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <HomePage />
    <AboutPage />
    <FooterComponent />
  </ChakraProvider>
);
