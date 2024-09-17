import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Article } from "./components/Article";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
