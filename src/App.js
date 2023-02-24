//#region App.js

/*

This is the root component of the application. 
It renders the Navbar component and defines the routes using 
the react-router-dom library. 
The "/" route renders the Login component, 
"/translations" renders the Translations component, 
and "/profile" renders the Profile component.

*/

//#endregion

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Translations from "./views/Translations/Translations";
import Profile from "./views/Profile/Profile";
import Navbar from "./components/navbar/Navbar";

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
