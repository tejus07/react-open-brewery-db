import React from "react";
import {useGlobalContext} from "../context";

const Search = () => {
    const {query, searchBreweries} = useGlobalContext();
    return (
        <>
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?"
                       value={query} onChange={(e) => searchBreweries(e.target.value)}/>
                <i className="fa fa-search"></i>
            </div>
        </>
    );
}

export default Search;