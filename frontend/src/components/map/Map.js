import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback, useEffect } from "react";
import MapGL, {Marker, NavigationControl, ScaleControl, GeolocateControl,LinearInterpolator, Popup} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import MainPageTopBar from '../MainPageTopBar';
import HashLoader from 'react-spinners/HashLoader';
import Pins from './Pins';
import libraryData from './libraryData.json';
import LibraryInfo from './LibraryInfo';
import SideInfo from './SideInfo';

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic3R2MTIyMiIsImEiOiJja3Bud3duc2YwZDFrMnVsZnR3bzJwdnh1In0.8NeYXbzz2K0qztqEULiY-w";

function Map(props) {
  const {userinfo,log_in} = props; 

  const [viewport, setViewport] = useState({
    latitude: 25.0175,
    longitude: 121.54,
    zoom: 15
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 2000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );
    
    //Popup info
    const [popupInfo, setPopupInfo] = useState(null)
    

    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000))
        setLoading((loading) => !loading)
        }
        loadData()
    }, [])

    if (loading) {
        return (
        <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <HashLoader size={100}/>
        </div>
        )
    }

    else {

        return (
            <div>
                <MainPageTopBar log_in = {log_in}/>
                <div style={{ height: "1000px" }}>
                <SideInfo info={popupInfo}/>
                <MapGL
                    ref={mapRef}
                    {...viewport}
                    width="100%"
                    height="100%"
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    transitionInterpolator={new LinearInterpolator()}
                >
                    <Geocoder
                    mapRef={mapRef}
                    onViewportChange={handleGeocoderViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    position="top-left"
                    style={{right:'50px',top:'10px'}}
                    />
                    <Pins data={libraryData} onClick={setPopupInfo}/>
                    {popupInfo && (
                        <Popup
                            tipSize={10}
                            anchor="top"
                            longitude={popupInfo.longitude}
                            latitude={popupInfo.latitude}
                            closeOnClick={false}
                            onClose={setPopupInfo}
                        >
                            <LibraryInfo info={popupInfo}/>
                        </Popup>
                    )}
                    <NavigationControl style={{right:'50px',top:'10px'}}/>
                    <ScaleControl maxWidth={100} unit="metric" style={{right:'50px', bottom:'30px'}}/>
                    <GeolocateControl style={{right:'50px', top:'120px'}}positionOptions={{enableHighAccuracy: true}} trackUserLocation={true} auto/>
                    <div className="map-sidebar" style={{left:'50px', bottom:'30px'}}>
                        Longitude: {viewport.longitude} | Latitude: {viewport.latitude} | Zoom: {viewport.zoom}
                    </div>
                </MapGL>
                </div>
            </div>
        );
    }
};

export default Map;
