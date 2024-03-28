import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = ({ center, zoom, address }) => {
    return (
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: "200px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

                <Marker position={center}>
                    <Popup>Hi</Popup>
                </Marker>
        </MapContainer>
    );
};

export default MapComponent;
