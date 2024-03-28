import React from 'react';
import Search from "./Search";

const Header = () => {

    return (
        <header className="header-container">
            <h1>Breweries</h1>
            <Search />
        </header>
    );
};

export default Header;
