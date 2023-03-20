import { useState } from 'react';

function Menu() {

    const [isVisible, setVisible] = useState(false);
    return (
        <nav className="main__nav nav">
        <div className="nav__logo logo">
            <img className="logo__image" src="./img/logo.png" alt="logo"/>
        </div>
        <div className="nav__burger burger" onClick={ () => setVisible(!isVisible) }>
            <span className="burger__line"/>
            <span className="burger__line"/>
            <span className="burger__line"/>
        </div>
        { isVisible && (
        <div className="nav__menu menu">
            <ul className="menu__list">
                <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
                <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
                <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
            </ul>
        </div>
        ) }
    </nav>
    )
    }
    
    export default Menu;