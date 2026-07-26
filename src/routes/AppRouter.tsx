import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/mainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Finance from "../pages/Finance/Finance";
import Investments from "../pages/Investments/Investments";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/investments" element={<Investments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}