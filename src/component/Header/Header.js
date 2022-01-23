import React from 'react';
import classes from './Header.module.css';
import logo from '../../asset/AdminLTELogo.png';
const Header = ()=>{
    return (
        <header>
            <div className="container">
                <div className="textRight">
                    <img className={classes.logo} src={logo}/>
                </div>
                <div className="textRight">
                    <img className={classes.logo} src={logo}/>
                    <span>React logo</span>
                </div>
            </div>
        </header>

    )
}
export default Header;