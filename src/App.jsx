import { Route, Routes, useNavigate } from "react-router-dom";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ArticlePage } from "./components/ArticlePage";
import { useContext, useEffect } from "react";
import { NavContext } from "./contexts/NavContext";

function App() {
  const { setSkipNavInfo } = useContext(NavContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Changed the Route");
    setSkipNavInfo([{ id: "end-nav", contentName: "Content" }]);
  }, [navigate]);

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
