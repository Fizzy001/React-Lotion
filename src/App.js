import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import React from "react";
import Layout from "./Layout";
import Mainbar from "./Mainbar";
import Viewing from "./Viewing";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Navigate to = "/note"/>}></Route>
        <Route path="/note" element={<Layout />}>
            <Route path="/note/edit/:id" element={<Mainbar />}></Route>
            <Route path="/note/view/:id" element={<Viewing />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
