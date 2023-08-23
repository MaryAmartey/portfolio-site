import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContentPage from './ContentPage';
import ProjectsPage from "./ProjectsPage";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route  path="/" index element={<HomePage/>} />
        <Route path="/content/*" element={<ContentPage />} />
      </Routes>
  </BrowserRouter>
  
  );
}

export default App;