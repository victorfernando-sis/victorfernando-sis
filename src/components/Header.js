import React from "react";
import logo from "../img/logo.png"

export default function Header() {

    function toggleMenu() {
        document.body.classList.toggle("nav-open")
    }

    return (
        <header>
            <div className="logo">
            <a href="/victorfernando-sis"> <img src={logo} alt="" /></a>
            </div>

            <button onClick={toggleMenu} className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="/victorfernando-sis#home" onClick={toggleMenu} className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="/victorfernando-sis#about" onClick={toggleMenu} className="nav__link">About me</a></li>
                    <li className="nav__item"><a href="/victorfernando-sis#work" onClick={toggleMenu} className="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>
    )
}