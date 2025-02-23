import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import TeachersPage from "./pages/TeachersPage/TeachersPage";

function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
