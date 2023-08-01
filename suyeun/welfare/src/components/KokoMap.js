import React, { useEffect } from "react";
//import './App.css';

function KokoMap() {
  useEffect(() => {
    const key = 'e6a331db57a19280eec798002d40195a';
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      
      const { kakao } = window;

      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        var mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        // 마커를 표시할 위치입니다 
        var  map = new kakao.maps.Map(mapContainer, mapOption);
        var position = new kakao.maps.LatLng(33.450701, 126.570667);
        var marker = new kakao.maps.Marker({
          position: position
        });
        marker.setMap(map);

        // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
        var iwContent = '<div style="padding:5px;">Hello World!</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent
        });

        // 마커에 마우스오버 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'mouseover', function () {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
          infowindow.open(map, marker);
        });

        // 마커에 마우스아웃 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'mouseout', function () {
          // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
          infowindow.close();
        });

      });
    };
  }, []);

  return (
    <div className="Map">
      <div id="map" style={{ width: "960px", height: "750px" }}></div>
    </div>

  );
}

export default KokoMap;
