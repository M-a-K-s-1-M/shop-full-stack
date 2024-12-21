import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import './NavBar.scss';
import { useUserStore } from '../../store/useUserStore';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const { user, isAuth, setIsAuth } = useUserStore();
    const navigate = useNavigate();

    return (
        <header className='header'>
            <NavLink className='header-logo' to={SHOP_ROUTE}>КупиДевайс</NavLink>
            {isAuth ? (
                <nav className='nav'>
                    <button onClick={() => navigate(ADMIN_ROUTE)}>Панель админа</button>
                    <button onClick={() => navigate(LOGIN_ROUTE)}>Выйти</button>
                </nav>
            ) : (
                <nav className='nav'>
                    <button onClick={() => navigate(REGISTRATION_ROUTE)}>Авторизация</button>
                </nav>
            )}
        </header>
    );
}
