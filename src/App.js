import React from "react";
//Router本体をインポート
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Page from "./components/Page";
import Contact from "./components/Contact";
import Todo from "./components/Todo";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}
