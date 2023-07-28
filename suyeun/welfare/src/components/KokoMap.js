import React, { useEffect } from "react";

function KokoMap() {
  useEffect(() => {
    const key = 'e6a331db57a19280eec798002d40195a';
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      // Make sure to import the 'kakao' object from the loaded script
      const { kakao } = window;

      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, mapOption);
      });
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "960px", height: "750px" }}></div>
    </div>
  );
}

export default KokoMap;
