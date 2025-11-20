import { useState } from "react";
import reactLogo from "./assets/logo.png";
import { Index } from "./pages/Index";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { DashboardContent } from "./components/DashboardContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
