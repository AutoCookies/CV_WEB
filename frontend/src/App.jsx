import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import HomePage from "./pages/HomePage/HomePage";
import MetionisPage from "./pages/MetionisPage/MetionisPage";
import Portfolio from "./pages/Portfolio/data/Portfolio";
import WebPortfolio from './pages/Portfolio/web/webPortfolio';
import Feedback from "./pages/FeedbackPage/Feedback";
import Journey from "./pages/JourneyPage/journeyPage";
import Games from "./pages/gamePage/gamePage";
import TestingArea from "./pages/testingArea/testingArea";
//Nên nhớ mấy cái thẻ kiểu đại diện cho cả một cái page nhỏ thì phải viết hoa đầu tiên theo CamelCase

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
        <Route path="/journey" element={<Journey />} />
        <Route path="/games" element={<Games />} />
        <Route path="/testing" element={<TestingArea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;