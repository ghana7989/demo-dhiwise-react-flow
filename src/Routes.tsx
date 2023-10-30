import Canvas from "pages/Canvas";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
