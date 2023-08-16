import React, { useState, useEffect } from "react";
//import './App.css';



function KakaoMap (props) {

  const [memberList, setMemberList] = useState([])
  var clickedMember = []

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
          center: new kakao.maps.LatLng(35.179805, 129.074969),
          level: 6
        };

        // 마커를 표시할 위치입니다 
        var  map = new kakao.maps.Map(mapContainer, mapOption);

        // 여러개 포지션 찍기(1)
        var positions = memberList

      
        for (var i = 0; i < positions.length; i++)  {
          
          
          var position_temp = new kakao.maps.LatLng(memberList[i].latitude, memberList[i].longitude)
          

          var marker = new kakao.maps.Marker({
            map: map, 
            position: position_temp, 
            title : positions[i].title   
          });
          var iwContent = `<div style="padding:5px;">${memberList[i].mb_name}</div>`
          
          var infowindow = new kakao.maps.InfoWindow({
            content: iwContent
          });
          
          (function(marker, infowindow){
            kakao.maps.event.addListener(marker,'mouseover', function(){
              infowindow.open(map, marker);
            });
          
            kakao.maps.event.addListener(marker,'mouseout', function(){
              infowindow.close();
            });
          })(marker,infowindow);

          marker.setMap(map)

        
          
        }            

      });
    };
  }, [memberList]);

  const test = () => {

  }

  useEffect(() => {

    fetch('http://localhost:8080/main/member2')
    .then(response => response.json())
    .then(response => {
      setMemberList(response)
      console.log(memberList)
    })
    .catch(error => console.error('Error fetching data:', error));

  }, [])


  return (
    
    
    <div className="Map">
      <div id="map" style={{ width: "960px", height: "750px" }}></div>
      {test()}
    </div>
    

  );
}

export default KakaoMap;