import ReactDOM from "react-dom";
import "mvp.css";

/* Example #1 */
// const rootElement = document.getElementById("root");
// ReactDOM.render(<p>Hello, World</p>, rootElement);

/* Example #2 */
// const jsxElement = <p>This is JSX! 🙈</p>;
// const rootElement = document.getElementById("root");
// ReactDOM.render(jsxElement, rootElement);

/* Example #3 */
// function Hello() {
//   const name = "World";
//   return <h2>Hello {name}!</h2>;
// }
//
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Hello />, rootElement);

/* Example #4 */
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
