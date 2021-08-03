import React from "react";
import ReactDOM from "react-dom";
import styled, { StyleSheetManager } from "styled-components";

const StyledDiv = styled.div`
  position: fixed;
  bottom: 50px;
  right: 30px;
  height: 50px;
  width: 50px;
  background-color: red;
  transform: ${(props) => `translateY(${props.yOffset}px)`};
`;

function App() {
  const [yOffset, setYOffset] = React.useState(0);
  return (
    <div className="App">
      <button
        onClick={() => {
          setYOffset(Math.floor(Math.random() * -100));
        }}
        type="button"
      >
        Click Me
      </button>
      <StyledDiv yOffset={yOffset} />
    </div>
  );
}

const root = document.createElement("div");
root.id = "app-root";
let reactRoot = root;

if (process.env.REACT_APP_RENDER_IN_SHADOW_DOM) {
  const shadowRoot = root.attachShadow({ mode: "open" });
  const shadowRootDiv = document.createElement("div");
  shadowRootDiv.style.all = "initial";
  shadowRoot.appendChild(shadowRootDiv);
  reactRoot = shadowRootDiv;
}

document.body.appendChild(root);

ReactDOM.render(
  <StyleSheetManager target={reactRoot}>
    <App />
  </StyleSheetManager>,
  reactRoot
);
