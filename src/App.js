import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Navigate to = "/note"/>}></Route>
        <Route path="/note" element={<Navbar />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
