import React from 'react';
import Search from "./Search";

const Header = () => {

    return (
        <header className='header-container'>
            <nav>
            <a href="/"><img alt="Logo" src={process.env.PUBLIC_URL+'/images/logo-monochrome.svg'} height="70"></img></a>
            <Search />
            </nav>
        </header>
    );
};

export default Header;
