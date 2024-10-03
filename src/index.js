import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarReting from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarReting color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p> This movie was rated {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarReting
      maxRating={5}
      message={["Terrible", "Bad", "Okey", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
