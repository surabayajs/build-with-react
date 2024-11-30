import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import ExampleDaisyui from "./components/ExampleDaisyui";
import Penjumlahan from "./components/Penjumlahan";
import GetApiData from "./components/GetApiData";
import "./styles/index.css";
import App from "./App.jsx";
import LinkTree from "./components/LinkTree.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/auth" element={<Auth />}>
          <Route path="/login" element={<ExampleDaisyui />} />
        </Route> */}
        <Route path="/" element={<App />}>
          <Route path="/" element={<LinkTree />} />
          <Route path="/blog" element={<ExampleDaisyui />} />
          <Route path="/api-docs" element={<GetApiData />} />
          <Route path="/about" element={<Penjumlahan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
