import React, { useEffect, useState } from 'react';
import './InfoModalCss.css';
import BoardOfWelfare from './BoardOfWelfare';
import {WriteNameAtoms} from './WriteNameAtoms';
import {LoginAtoms} from './LoginAtoms'
import {useRecoilState, useRecoilValue} from 'recoil';


const InfoModal = (props) => {

    const loginState = useRecoilValue(LoginAtoms);
    const [info, setInfo] = useState([]);
    const [isOpen, setIsOpen] = useState(true);
    const [writeName, setWriteName] = useRecoilState(WriteNameAtoms);

    var name = props.name


    const sendName = async (e) => {
        
        const keyword = name;
        const encodedKeyword = encodeURIComponent(keyword);
        
        fetch(`http://localhost:8080/main/search/${encodedKeyword}`)
          .then((response) => response.json())
          .then((data) => {
            setInfo(data);
          })
          .catch((error) => {
           
            console.error("Error fetching data:", error);
          });
    };


useEffect(() => {

    sendName()
    

}, [props.name])

useEffect(()=> {
  setWriteName(name)

})





// 글쓰기 팝업창 띄우는 코드

const openPopup = () => {
  
  var option =  "width = 600, height = 800, top = 100, left = 200, location = no"
  window.open(`/WriteReview/${name}`, "이름", option)

};


return (
    <>
    <div className="infoModal">
      &nbsp;&nbsp;
      <div className="upperSideOfModal">
        
        {(info[0]!= null)?
        (
          <>
          <div className="nameOfWelfare">{props.name}</div>
          <br /><br />
          <div className="infoOfWelfare">
          <div>주소:{info[0].sw_address}</div>
          <div>전화번호:{info[0].sw_tel}</div>
          {info[0].sw_domain != ""?
          (<div>홈페이지:<a className="domain" href={info[0].sw_domain}>{info[0].sw_domain}</a></div>):
          (<></>)}
          </div>
          </>
        ):
        (
        <>
        <div className="nameOfWelfare">시설을 선택해 주세요</div>
        <div className="infoOfWelfare"></div>
        </>
        )
        }

        {loginState == 1 ?
          (<button className="writeReviewButton" onClick={() => openPopup()}>리뷰 작성</button>
          ):
          (<div className="loginMessage">로그인을 하셔야 리뷰 작성이 가능합니다</div>) 
        }
      </div>
      
      <BoardOfWelfare />
    </div>
    
    </>
);

}

export default InfoModal;