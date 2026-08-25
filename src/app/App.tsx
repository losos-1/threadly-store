import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout/MainLayout'

import HomePage from '../pages/HomePage'
import CatalogPage from '../pages/CatalogPage'
import ProfilePage from '../pages/ProfilePage'
import ProductPage from '@/pages/ProductPage'
import BasketPage from '@/pages/BasketPage'
import LoginPage from '@/pages/LoginPage'
import RegistrationPage from '@/pages/RegistrationPage/RegistrationPage'

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/products/:productId" element={<ProductPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/cart" element={<BasketPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
        </Routes>
    )
}