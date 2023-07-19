// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Textform from "./Textform";
import { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  
  
  const [Darkmode, setDarkmode] = useState("light"); //wheather dark mode is enable or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const tooglemode = () => {
    if (Darkmode === "dark") {
      setDarkmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } else {
      setDarkmode("dark");
      document.body.style.backgroundColor = "rgb(10 22 69)";
      showAlert("Dark mode enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Analyzer" mode={Darkmode} toogle={tooglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Textform
                  heading="Enter your text to Analyze Below"
                  mode={Darkmode}
                  show={showAlert}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
