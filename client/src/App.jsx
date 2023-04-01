import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./Components/Auth/Auth";
// import Landing from "./Components/Landing/Landing";
import Completion from "./Components/Payment/Completion";
import Payment from "./Components/Payment/Payment";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SIgnIn";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Landing />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<SignIn />} />
=======
          <Route path="/" element={<Auth />} />
>>>>>>> 079f215 (Updated Payments)
          <Route path="/payment" exact element={<Payment />} />
          <Route path="/payment-complete" exact element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
