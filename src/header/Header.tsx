import React from "react";
import Nav from "../nav/Nav";
import s from './Header.module.css'

function Header() {
    return (
        <header className={s.header}>
            <Nav/>
        </header>
    )
}

export default Header