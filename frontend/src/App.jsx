import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import HomePage from "./pages/HomePage/HomePage";
import MetionisPage from "./pages/MetionisPage/MetionisPage";
import Portfolio from "./pages/Portfolio/data/Portfolio";
import WebPortfolio from './pages/Portfolio/web/webPortfolio';
import Feedback from "./pages/FeedbackPage/Feedback";
import PaginatedProjects from "./pages/Portfolio/data/PaginatedProjects";
import WebPaginatedProjects from "./pages/Portfolio/web/webProjects";

function App() {
  return (
    <BrowserRouter>
     {/* Wrap your app with BrowserRouter */}
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/mycv" element={<MetionisPage />} /> 
        <Route path="/data_projects" element={<Portfolio />}/>
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/web_projects" element={<WebPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;