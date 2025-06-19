import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function App() {
    return (
        <div className="h-screen w-screen">
            <MapContainer center={[35.0, 135.0]} zoom={10} className="h-full w-full" style={{ height: "100vh", width: "100%" }} >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}
