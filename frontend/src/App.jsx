import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import JobAnalyzer from "./pages/JobAnalyzer";
import PdfAnalyzer from "./pages/PdfAnalyzer";
import ImageAnalyzer from "./pages/ImageAnalyzer";
import UrlAnalyzer from "./pages/UrlAnalyzer";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<JobAnalyzer />} />
        <Route path="/pdf" element={<PdfAnalyzer />} />
        <Route path="/image" element={<ImageAnalyzer />} />
        <Route path="/url" element={<UrlAnalyzer />} />
        <Route path="/resume" element={<ResumeAnalyzer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;