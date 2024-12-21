import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export default function Auth() {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;



    return (
        <div className="auth-container">
            <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
            <div className="form-container">
                <form className="login-form">
                    <input type="text" id="email" name="email" required placeholder="Введите ваш email..." />
                    <input type="text" id="password" name="password" required placeholder="Введите ваш пароль..." />
                    {isLogin ?
                        <button className="btn-login">Войти</button>
                        :
                        <button className="btn-login">Зарегистрироваться</button>
                    }
                </form>
            </div>
            {isLogin ?
                <p>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink></p>
                :
                <p>Есть аккаунта? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></p>
            }
        </div>
    )
}
