import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ArticlePage } from "./components/ArticlePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
