import { useState } from "react"
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showNavbar && <Navbar />}
      {showLogin && <LoginForm onClick={() => { setShowNavbar(true); setShowLogin(false) }}/>}
    </div>
  );
}

export default App;
