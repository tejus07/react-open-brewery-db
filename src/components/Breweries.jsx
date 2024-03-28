import React from "react";
import {useGlobalContext} from "../context";
import BreweryCard from "./BreweryCard";

const Breweries = () => {
    const {breweries, isLoading} = useGlobalContext();
    if (isLoading) {
        return (<>
            <h1>Loading....</h1>
        </>)
    }

    return (
        <div>
            <div className="container">
                {breweries.map((brewery, index) => (
                    <BreweryCard key={index} brewery={brewery}/>
                ))}
            </div>
        </div>
    );
}

export default Breweries;