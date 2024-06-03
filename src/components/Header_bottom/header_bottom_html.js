import fast from "./../../jpg/u6Lg.png";
import img from "./../../jpg/🦆 icon _hamburger menu_.svg";

import { NavLink } from "react-router-dom";

import "./style.css"

function Header_bottom_html () {

    const activeLink = 'stylea-active';
    const normaLink = 'stylea';
    
    return (
        <div className="header_bottom">
        <div className="header_bottom_list_div_img">
            <img src={fast} className="header_bottom_img"/>
        </div>
        <div className="header_bottom_list_div">
            <NavLink to="/"className="header_bottom_list_div_mob">
            <button id="menu_button" >
                    <img src={img}/>   
            </button>
            </NavLink>
            <ul id="header_menu" className="header_bottom_list">
                <li name="header_ul" className="header_bottom_list_items">
                    <NavLink to="/" className={({isActive}) => isActive ? activeLink : normaLink}>
                    <h4>Главная</h4>
                    </NavLink>
                    </li>
                <li className="header_bottom_list_items">
                    <NavLink to="/Events" className={({isActive}) => isActive ? activeLink : normaLink}>
                    <h4>Мероприятия</h4>
                    </NavLink>
                    </li>
                <li className="header_bottom_list_items">
                    <NavLink to="Student_associations" className={({isActive}) => isActive ? activeLink : normaLink}>
                    <h4>Студенчиские объединения</h4>
                    </NavLink>
                    </li>
                <li className="header_bottom_list_items">
                    <NavLink to="Sellows" className={({isActive}) => isActive ? activeLink : normaLink}>
                    <h4>Стипендиаты</h4>
                    </NavLink>
                    </li>
                <li className="header_bottom_list_items">
                    <NavLink to="Documentation" className={({isActive}) => isActive ? activeLink : normaLink}>
                    <h4>Документы</h4>
                    </NavLink>
                    </li>
                <li className="header_bottom_list_items">
                    <NavLink to="Contacts" className={({isActive}) => isActive ? activeLink : normaLink}>
                    <h4>Контакты</h4>
                    </NavLink>
                    </li>
            </ul>
        </div>
    </div>
    );
}

export default Header_bottom_html