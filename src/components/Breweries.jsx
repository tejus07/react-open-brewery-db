import React from "react";
import {useGlobalContext} from "../context";
import BreweryCard from "./BreweryCard";
import Loading from './Loading';

const Breweries = () => {
    const {breweries, isLoading} = useGlobalContext();
    if (isLoading) {
        return <Loading />;
    }

    return (
        <main>
            <section className="cards-container">
                {breweries.map((brewery, index) => (
                    <BreweryCard key={index} brewery={brewery}/>
                ))}
            </section>
        </main>
    );
}

export default Breweries;