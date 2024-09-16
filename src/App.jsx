import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
