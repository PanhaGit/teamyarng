import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import HomePage from "./page/HomePage";
import NotFoundPage from "./page/error/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MasterLayout />}>
            <Route element={<HomePage />} path="/" />
          </Route>
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
