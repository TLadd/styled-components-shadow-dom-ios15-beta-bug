import React from "react";
import ReactDOM from "react-dom";
const StyledDiv = React.lazy(() => import("./StyledDiv"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={"Loading"}>
        <StyledDiv />
      </React.Suspense>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
