
import React, { useEffect, useState } from 'react';
import KakaoMap from './KakaoMap';

const Main = () => {

  const [member1List, setMember1List] = useState(["Hello"])
  const [member2List, setMember2List] = useState(["World"])
  var memberLat = []
  var memberLong = []

  useEffect(() => {
    fetch('http://localhost:8080/member1')
      .then(response => response.json())
      .then(response => {
        setMember1List(response)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/member2')
      .then(response => response.json())
      .then(response => {
        setMember2List(response)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const memberPrint = (arr) => {

    const result = []

    for (let i = 0; i < arr.length; i++) {

      result.push(
        <div>
          {arr[i].mb_name}
          {arr[i].mb_address}
          {arr[i].mb_tel}
        </div>
      )

    }
    return (
      <>
        {result}
      </>
    );
  }



  return (
    <>
    
    <KakaoMap member1List = {member1List} member2List = {member2List}/>
    </>
  )


}


export default Main;