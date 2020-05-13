import React from 'react'
import { Link , NavLink } from 'react-router-dom'

const Navbar = () => {
        return(
            <nav className="nav-wrapper blue">
                <div className="container">
                    <div className="brand-logo">بهنیکس روتینگ</div>
                    <ul className="left">
                        <li><Link to="/">خانه</Link></li>
                        <li><NavLink to="/about">درباره ما</NavLink></li>
                        <li><NavLink to="/contact">تماس با ما</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
}

export default Navbar