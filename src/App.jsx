import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function App() {
    return (
        <div className="h-screen w-screen">
            <MapContainer center={[35.0, 135.0]} zoom={13} className="h-full w-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
            </MapContainer>
        </div>
    );
}
