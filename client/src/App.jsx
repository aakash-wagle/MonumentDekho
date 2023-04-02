import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Completion from "./Components/Payment/Completion";
import Payment from "./Components/Payment/Payment";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SIgnIn";
import MonumentDetails from "./Components/MonumentDetails/MonumentDetails";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<SignIn />} />
          {/* <Route path="/monument/" exact element={<SignIn />} /> */}
          <Route path="/payment" exact element={<Payment />} />
          <Route path="/payment-complete" exact element={<Completion />} />
          <Route element={<MonumentDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;