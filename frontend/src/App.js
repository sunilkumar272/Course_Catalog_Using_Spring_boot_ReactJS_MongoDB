import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Create, Login } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
         <Route path="/course" > 
          <Route path="/course/create" element={<Create />}/>
          </Route>
          <Route path="/course/feed" element={<Feed />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;