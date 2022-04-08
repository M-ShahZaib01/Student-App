import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import Students from "./components/inputSection/Students";

function App() {
  return (
    <>
      <Header />
      <Students />
    </>
  );
}

export default App;
