import "./styles.css";
import "mvp.css";

/* Example #1 */
// export default function App() {
//   return (
// <div className="App">
//   <h1>Hello CodeSandbox</h1>
//   <h2>Start editing to see some magic happen!</h2>
//   <button>This is a button</button>
// </div>
//   );
// }

/* Example #2 */
// function Hello() {
//   const name = "World";
//   return <h2>Hello {name}!</h2>
// }
//
// export default function App() {
//   return (
//     <><Hello /></>
//   );
// }

/* Example #3 */
// function Hello(props) {
//   return <h2>Hello {props.name}!</h2>
// }

// export default function App() {
//   return (
//     <>
//       <Hello name = "Jewel" />
//       <Hello name = "Sarah" />
//       <Hello name = "Jeremy" />
//     </>
//   );
// }

/* Example #4 */
// function Hello(props) {
//   return (
//     <h2>
//       {props.greeting} {props.name}!
//     </h2>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <Hello name = "Jewel" greeting = "Hello" />
//       <Hello greeting = "Bonjour" name = "Sarah" />
//       <Hello name = "Jeremy" />
//     </>
//   );
// }

/* Example #5 */
// function Hello({greeting = "Hello", name = "World"}) {
//   return (
//     <h2>
//       {greeting} {name}!
//     </h2>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <Hello name = "Jewel" greeting = "Hello" />
//       <Hello greeting = "Bonjour" name = "Sarah" />
//       <Hello name = "Jeremy" />
//       <Hello />
//     </>
//   );
// }

/* Example #6 */
// function Hello({ greeting = "Hello", name = "World" }) {
//   return (
//     <h2>
//       {greeting} {name}!
//     </h2>
//   );
// }

// export default function App() {
//   const names = ["Jewel", "Sarah", "Jeremy", "April"];
//   const helloComponents = names.map((name, i) => <Hello name={name} />);

//   return <>{helloComponents}</>;
// }

/* Example #7 */
function Hello({ greeting = "Hello", name = "World" }) {
  return (
    <h2>
      {greeting} {name}!
    </h2>
  );
}

export default function App() {
  const names = ["Jewel", "Jeremy", "April"];

  return (
    <>
      {names.map((name, i) => (
        <Hello name={name} key={i} />
      ))}
    </>
  );
}
