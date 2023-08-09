import './BoardOfWelfareCss.css'
import React, { useState, useEffect } from "react";
import {UserInfoAtoms} from './Atoms/UserInfoAtoms';
import {useRecoilState, useRecoilValue} from 'recoil';
import {Link} from "react-router-dom";


const BoardOfWelfare = (props) => {

    const welfareName = props.name
    const [list, setList] = useState([])
    const username = useRecoilValue(UserInfoAtoms)
    const sendWelfareName = async (e) => {
        
        const keyword = welfareName;
        const encodedKeyword = encodeURIComponent(keyword);
        
        fetch(`http://localhost:8080/main/${encodedKeyword}`)
          .then((response) => response.json())
          .then((data) => {
            setList(data);
            console.log(data)
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
    };

    useEffect(() => {
        sendWelfareName();
    }, [welfareName])


    const test = (welfareName, seq) => {

      console.log("Hello",welfareName, seq)
      var option =  "width = 600, height = 800, top = 100, left = 200, location = no"
      window.open(`/ShowReview/${welfareName}/${seq}`, "이름", option)
    }

    const deletePost = (seq) => {
      var option =  "width = 300, height = 300, top = 100, left = 200, location = no"
      window.open(`/DeletePost/${seq}`, "이름", option)
      
    }

    return (
        <>
        <div className="boardBackground">
            {welfareName}의 게시글목록
            {list.length == 0?
            <div>게시글이 없습니다</div>:
            <div>
              {Array.from(list).map((item, idx) => {
                return(
                  <>
                  <div><a href="#" onClick={()=>{test(welfareName, item.seq)}}>{item.notename}&nbsp;-&nbsp; 작성자: &nbsp; {item.username}</a>
                  {/* &nbsp; <button onClick={() => {updatePost(item.seq)}}>수정</button> */}
                  &nbsp; <button onClick={() => {deletePost(item.seq)}}>삭제</button>

                  </div>
                  </>
                );
              })}
            </div>}
        </div>

        </>
    )
}

export default BoardOfWelfare;