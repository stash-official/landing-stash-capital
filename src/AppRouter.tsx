import { lazy } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useInitAOS } from "./hooks/useInitAOS";
import MainLayout from "./components/layout";
import Home from "./views/home";


const AppRouter: React.FC = () => {

  useInitAOS();

  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
