import Home from "./home/Home"
import Pagina1 from "./pgteste/Pagina1"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default function Rotas() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/pagina1" element={<Pagina1 />}/>
          </Routes>
          
      </BrowserRouter>
    )
  }
  