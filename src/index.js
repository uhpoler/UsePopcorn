import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarReting from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
     */}
    <StarReting maxRating={5} />
  </React.StrictMode>
);
