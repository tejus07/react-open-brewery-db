import React from "react";
import MapComponent from "./Map";

const BreweryCard = ({brewery}) => {
    const {
        name,
        brewery_type,
        address_1,
        address_2,
        address_3,
        city,
        state_province,
        postal_code,
        country,
        phone,
        website_url,
        latitude,
        longitude,
    } = brewery;

    return (
        <div className="card">
            <div className="card-inner">
                <h2>{name}</h2>
                {latitude && longitude ? <MapComponent center={[latitude, longitude]} zoom={15} address={address_1}/> :
                    <div id="map"><img
                        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201808/map-1272165_960_720_0.png?size=690:388"/>
                    </div>}
                <p>Type: {brewery_type}</p>
                <p>Address: {address_1} {address_2} {address_3}, {city}, {state_province}, {postal_code}, {country}</p>
                <p>Phone: {phone}</p>
                <a href={website_url}>Website</a>
            </div>
        </div>
    );
};

export default BreweryCard;
