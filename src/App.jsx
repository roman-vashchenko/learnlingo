import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Teachers from "./pages/Teachers/Teachers";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
