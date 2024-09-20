import { Route, Routes, useNavigate } from "react-router-dom";
import "./styles/App.css";
import { Home } from "./pages/Home";
import { ArticlePage } from "./pages/ArticlePage";
import { Header } from "./components/Header/Header";
import { Login } from "./pages/Login";
import { TopicPage } from "./pages/TopicPage";
import { Topics } from "./pages/Topics";

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
        <Route path="/login" element={<Login />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:slug" element={<TopicPage />} />
      </Routes>
    </>
  );
}

export default App;
