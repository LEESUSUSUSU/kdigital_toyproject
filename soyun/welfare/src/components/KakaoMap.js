import React, { useState, useEffect } from "react";
//import './App.css';
import InfoModal from './InfoModal';
import './KakaoMapCss.css'


function KakaoMap (props) {

  
  var members = []
  const [name, setName] = useState("")

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
          level: 7
        };

        // 마커를 표시할 위치입니다 
        var  map = new kakao.maps.Map(mapContainer, mapOption);

        // 여러개 포지션 찍기
        var positions = members
        for (var i = 0; i < positions.length; i++)  {
          
          
          
          var position_temp = new kakao.maps.LatLng(members[i].sw_latitude, members[i].sw_longitude)
          
          var imageSize = new kakao.maps.Size(24, 35)
          var markerImage = new kakao.maps.MarkerImage('icon/threeleafclover.png', imageSize)


          if (i < 35) {
            var marker = new kakao.maps.Marker({
              map: map, 
              position: position_temp, 
              title : members[i].sw_name,
              image : markerImage,
  
            });
          }

          // 복지관
          else  {
            var marker = new kakao.maps.Marker({
              map: map, 
              position: position_temp, 
              title : members[i].sw_name,
             
  
            });

          }
          
          var iwContent = `<div style="padding:5px;">${members[i].sw_name}</div>`
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

            kakao.maps.event.addListener(marker, 'click', function() {
              setName(this.getTitle())
            });
            
          })(marker,infowindow);

          marker.setMap(map)
        }
      });
    };
  }, [members]);



  useEffect(() => {

    fetch('http://localhost:8080/main/members')
    .then(response => response.json())
    .then(response => {
      members = response
    })
    .catch(error => console.error('Error fetching data:', error));

  }, [name])


  return (
    
    <>

    <div className="Map">
      <div id="map" style={{ width: "960px", height: "750px" }}></div>
      <div id="infoModal"><InfoModal name={name}/></div>
      
    </div>
    
    </>
    

  );
}

export default KakaoMap;