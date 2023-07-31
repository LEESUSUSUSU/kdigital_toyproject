import React, { useState, useEffect } from "react";
//import './App.css';

function KakaoMap (props) {

  const [member1List, setMember1List] = useState(["Hello"])
  const [member2List, setMember2List] = useState([])

  useEffect(() => {
    const key = 'e6a331db57a19280eec798002d40195a';
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
    document.head.appendChild(script);

    fetch('http://localhost:8080/member1')
    .then(response => response.json())
    .then(response => {
      setMember1List(response)
    })
    .catch(error => console.error('Error fetching data:', error));


    fetch('http://localhost:8080/member2')
    .then(response => response.json())
    .then(response => {
      setMember2List(response)
    })
    .catch(error => console.error('Error fetching data:', error));

    script.onload = () => {
      
      const { kakao } = window;

      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        var mapOption = {
          center: new kakao.maps.LatLng(member1List[0].mb_latitude, member1List[0].mb_longtitude),
          level: 3,
        };

        // 마커를 표시할 위치입니다 
        var  map = new kakao.maps.Map(mapContainer, mapOption);



        // 여러개 포지션 찍기(1)
        var positions = member1List

        for (var i = 0; i < positions.length; i++)  {

          var position_temp = new kakao.maps.LatLng(member1List[i].mb_latitude, member1List[i].mb_longtitude)
          
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: position_temp, // 마커를 표시할 위치
            title : positions[i].mb_name // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            
          });
          

          var iwContent = `<div style="padding:5px;">${member1List[i].mb_name}</div>`
          var infowindow = new kakao.maps.InfoWindow({
            content: iwContent
          });

          kakao.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.open(map, marker);
          });

          kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
          });

          marker.setMap(map)


        }

        // 여러개 포지션 찍기 (2)

        var positions = member2List

        for (var i = 0; i < positions.length; i++)  {
          
          
          var position_temp = new kakao.maps.LatLng(member2List[i].mb_latitude, member2List[i].mb_longtitude)
          
          var marker = new kakao.maps.Marker({
            map: map, 
            position: position_temp, 
            title : positions[i].title   
          });
          var iwContent = `<div style="padding:5px;">${member2List[i].mb_name}</div>`
          var infowindow = new kakao.maps.InfoWindow({
            content: iwContent
          });
          kakao.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.open(map, marker);
          });
          kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
          });
          
        }        
        
        
    

      



        // var position = new kakao.maps.LatLng(member1List[0].mb_latitude, member1List[0].mb_longtitude);
        // var marker = new kakao.maps.Marker({
        //   position: position
        // });
        // marker.setMap(map);

        // // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
        // var iwContent = `<div style="padding:5px;">${member1List[0].mb_name}</div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

        // // 인포윈도우를 생성합니다
        // var infowindow = new kakao.maps.InfoWindow({
        //   content: iwContent
        // });

        // // 마커에 마우스오버 이벤트를 등록합니다
        // kakao.maps.event.addListener(marker, 'mouseover', function () {
        //   // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        //   infowindow.open(map, marker);
        // });

        // // 마커에 마우스아웃 이벤트를 등록합니다
        // kakao.maps.event.addListener(marker, 'mouseout', function () {
        //   // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        //   infowindow.close();
        // });

      });
    };
  }, []);

  return (
    <div className="Map">
      <div id="map" style={{ width: "960px", height: "750px" }}></div>
    </div>

  );
}

export default KakaoMap;