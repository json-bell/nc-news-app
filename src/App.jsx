import { Route, Routes, useNavigate } from "react-router-dom";
import "./styles/App.css";
import { Home } from "./pages/Home";
import { ArticlePage } from "./pages/ArticlePage";
import { Header } from "./components/Header/Header";

function App() {
  // const { setSkipNavInfo } = useContext(NavContext);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   console.log("App Nav");
  //   setSkipNavInfo([{ id: "end-nav", contentName: "Content" }]);
  // }, [navigate]);

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
