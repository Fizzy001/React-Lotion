import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route path="/note" element={<Navbar />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
