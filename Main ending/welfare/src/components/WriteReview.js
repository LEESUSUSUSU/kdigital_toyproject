import {useParams} from "react-router-dom";
import './WriteReviewCss.css';
import {useState, useEffect} from "react";



const WriteReview = () => {

    const welfareName = useParams().name;
    const username = useParams().username;

    const [uploadedFiles, setUploadedFiles] = useState([]);


    const submitControl = async (e) => {
        e.preventDefault();
    
        

        const newNotename = document.getElementById('newNotename').value;
        const newNotepass = document.getElementById('newNotepass').value;
        const newNote = document.getElementById('newNote').value;

    
        try {
          const response = await fetch('http://localhost:8080/main/createReview', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              notename: newNotename,
              sw_name: welfareName,
              notePass: newNotepass,
              note: newNote
            }),
          });
    
          if (response.ok) {
            console.log("입력성공")
            window.close()
            
          } else {
            console.log("입력실패. 서버오류발생1")
          }
        } catch (error) {
            console.log("입력실패. 서버오류발생2")
        }
      };

    
    return(
        <>
        <form>
        <div className="WriteReviewWindow">
            <div>제목:&nbsp;<input type="text" id="newNotename"></input></div>
            <div>작성자:&nbsp;{username}</div>
            <div>시설명:&nbsp;{welfareName}</div>
            <div>비밀번호:&nbsp;<input type="password" id="newNotepass" required /></div>
            <br />
            <div>내용:&nbsp;<input type="text" id="newNote"></input></div>
            <br />
            <input type="file" id="newFile" />
            <button type="submit" onClick={submitControl} id="submitButton">작성</button>
        </div>
        </form>
        </>
        
    )

}

export default WriteReview;