import './App.css';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ProductCategoryPage from './pages/ProductCategoryPage/ProductCategoryPage';
import ProductAllPage from './pages/ProductAllPage/ProductAllPage'
import ProductDescorPage from './pages/ProductDescorPage/ProductDescorPage';
import CartPage from './pages/CartPage/CartPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';


function App() {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='categories' element={<CategoriesPage />} />
          <Route path='categories/:category' element={<ProductCategoryPage/>} />
          <Route path='product/:id' element={<ProductDescorPage/>} />
          <Route path='products' element={<ProductAllPage/>} />
          <Route path='cart' element={<CartPage/>} />
          <Route path='catalog' element={<CatalogPage/>} />
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
