import React from "react";
import "./App.sass";
import ShippingAddress from "./components/ShippingAddress";
import SummaryOrder from "./components/SummaryOrder";
function App() {
  return (
    <div className="App">
      <ShippingAddress />
      <SummaryOrder />
    </div>
  );
}

export default App;
