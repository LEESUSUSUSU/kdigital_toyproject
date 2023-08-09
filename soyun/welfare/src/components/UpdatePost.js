import {useParams} from "react-router-dom";
import './WriteReviewCss.css';
import {useState, useEffect} from "react";

const UpdatePost = () => {

    const seq = useParams().seq;
    const welfareName = useParams().welfareName;
    const username = useParams().username;

    const SubmitControl = async (e) => {
        e.preventDefault();
    
        
        const newNotename = document.getElementById('newNotename').value;
        const newNote = document.getElementById('newNote').value;
        const newNotepass = document.getElementById('newNotepass').value;
        
    
        try {
          const response = await fetch('http://localhost:8080/main/createReview', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: seq,
              notename: newNotename,
              notePass: newNotepass,
              note: newNote,
              sw_name: welfareName,
              username: username
            }),
          });
    
          if (response.ok) {
            console.log("수정성공")
            window.close()
          } else {
            console.log("수정실패. 서버오류발생1")
          }
        } catch (error) {
            console.log("수정실패. 서버오류발생2")
        }
      };




    return(
        <>
        <div className="WriteReviewWindow">
            <div>게시글 작성 시 입력하였던 비밀번호를 입력하세요.</div>
            <div>비밀번호:&nbsp;<input type="password" id="newNotepass"></input></div>
            <br></br>
            <div>제목:&nbsp;<input type="text" id="newNotename"></input></div>
            <div>작성자:&nbsp;{username}</div>
            
            <br />
            <div>내용:&nbsp;<input type="text" id="newNote"></input></div>
            <br />
            <input type="file" id="newFile" />
            <button type="button" onClick={SubmitControl} id="submitButton">작성</button>
        </div>
        </>
    )
}

export default UpdatePost;