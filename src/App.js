import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Single from "./Single";
import Error from "./Error";
import { AppProvider } from "./context";
import "./App.css";

const App = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Single />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
};

export default App;
