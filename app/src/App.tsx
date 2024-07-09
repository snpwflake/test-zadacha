import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./pages/Main";
import BeansPage from "./pages/Beans";
import Layout from "./layouts/Layout";
import BeansByIdPage from "./pages/BeansById";
import FactsPage from "./pages/Facts";
import RecipesPage from "./pages/Recipes";
import RecipeById from "./pages/RecipeById";
import CombinationPage from "./pages/Combinations";
import HistoryPage from "./pages/History";
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="beans" element={<BeansPage />} />
          <Route path="beans/:id" element={<BeansByIdPage />} />
          <Route path="facts" element={<FactsPage />} />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="recipes/:id" element={<RecipeById />} />
          <Route path="combinations" element={<CombinationPage />} />
          <Route path="history" element={<HistoryPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
