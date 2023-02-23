import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Translations from "./views/Translations/Translations";
import Profile from "./views/Profile/Profile";
import Navbar from "./components/navbar/Navbar";

//npm i react-router-dom
//npm i react-hook-form

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translations" element={<Translations />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
