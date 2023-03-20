import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>Some Alert</Alert>}
      <Button
        onClick={() => {
          console.log("Clicked");
          setShowAlert(true)
        }}
      >
        Show Alert
      </Button>
    </div>
  );
}

export default App;
