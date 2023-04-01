import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Completion from "./Components/Payment/Completion";
import Payment from "./Components/Payment/Payment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/payment" exact element={<Payment />} />
          <Route path="/payment-complete" exact element={<Completion />} />
        </Routes>
      </BrowserRouter>
      <Payment />
    </div>
  );
}

export default App;
