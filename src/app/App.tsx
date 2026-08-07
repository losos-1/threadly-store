import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout/MainLayout'

import HomePage from '../pages/HomePage'
import CatalogPage from '../pages/CatalogPage'
import CartPage from '../pages/CartPage'
import ProfilePage from '../pages/ProfilePage'
import ProductPage from '@/pages/ProductPage'

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/products/:productId" element={<ProductPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
        </Routes>
    )
}