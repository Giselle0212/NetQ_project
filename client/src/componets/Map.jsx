import { useState, useMemo, useCallback, UseRef } from "react";
import {
    GoogleMap,
    MArker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
} from '@react-google-maps/api'

type LatLngLiteral = google.maps.LatLngAltitudeLiteral;
type DirectionResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;


export const Map = ()=>{
    const center = useMemo(()=>({lat: 40.05, lng: -74.4057 }), []);
    return (
        <div>
            <p>Find events near <img src="" alt="" /></p>
            {/* <=== this is the map ===>  */}
            <div className="mapBox">
                <center>
                <GoogleMap zoom={6} center={center} mapContainerClassName='map-container'></GoogleMap>

                </center>
            </div>
        </div>
    )
};