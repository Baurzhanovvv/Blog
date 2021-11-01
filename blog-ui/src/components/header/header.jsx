import React from 'react';
import '../static/header.scss'
import {NavLink} from "react-router-dom";


const Header = props => {
    return (
        <div>
            <div className="header">
                    <div className="header__inner">
                        <div className="header__title"><h4>BLOG.ME</h4></div>
                        <nav className="nav">
                            <NavLink to="/" className="nav__link">На главную</NavLink>
                            <NavLink to="/liked-post" className="nav__link">Понравившиеся посты</NavLink>
                            {props.userData.username ? <NavLink className="nav__link" to="#!">{props.userData.username}</NavLink>
                                : <NavLink className="nav__link" to="/register">Зарегистрироваться</NavLink>}
                        </nav>
                    </div>
            </div>
        </div>
    );
}

export default Header;
