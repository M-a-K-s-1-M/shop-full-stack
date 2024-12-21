import { Route, Routes, Navigate } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import Admin from '../pages/Admin';
import Basket from '../pages/Basket';
import DevicePage from '../pages/DevicePage';
import Auth from '../pages/Auth';
import Shop from '../pages/Shop';
import { useUserStore } from '../store/useUserStore';

export default function AppRouter() {
    const { user, isAuth } = useUserStore()

    return (
        <Routes>

            {isAuth && <>
                <Route path={ADMIN_ROUTE} element={<Admin />} />
                <Route path={BASKET_ROUTE} element={<Basket />} />
            </>}
            <Route path={DEVICE_ROUTE + '/:id'} element={<DevicePage />} exact />
            <Route path={LOGIN_ROUTE} element={<Auth />} />
            <Route path={REGISTRATION_ROUTE} element={<Auth />} />
            <Route path={SHOP_ROUTE} element={<Shop />} />
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />


        </Routes>
    )
}
