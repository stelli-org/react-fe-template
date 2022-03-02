import ReactDOM from "react-dom";

function App({ text }: { text?: string }) {
  return <h1>{text}</h1>;
}

ReactDOM.render(
  <App text="Setup is working 🚀" />,
  document.getElementById("root")
);
