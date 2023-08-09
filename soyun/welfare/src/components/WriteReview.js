import {useParams} from "react-router-dom";
import './WriteReviewCss.css';
import {useState, useEffect} from "react";
import {useDropzone} from 'react-dropzone';


const WriteReview = () => {

    const welfareName = useParams().name;
    const username = useParams().username;

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
      setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    };
  
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

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
              notepass: newNotepass,
              note: newNote,
            }),
          });
    
          if (response.ok) {
            console.log("입력성공")
            console.log(response)
            console.log(username)
            console.log(newNotename)
            //window.close();
          } else {
            console.log("입력실패. 서버오류발생1")
          }
        } catch (error) {
            console.log("입력실패. 서버오류발생2")
        }
      };

      const dropzoneStyle = {
        border: '2px dashed #ccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
      };
      
      const imageStyle = {
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        margin: '10px',
      };


    
    return(
        <>
        <div className="WriteReviewWindow">
            <div>제목:&nbsp;<input type="text" id="newNotename"></input></div>
            <div>작성자:&nbsp;{username}</div>
            <div>시설명:&nbsp;{welfareName}</div>
            <div>비밀번호:&nbsp;<input type="password" id="newNotepass"></input></div>
            <br />
            <div>내용:&nbsp;<input type="text" id="newNote"></input></div>
            <br />
            <input type="file" id="newFile" />
            <button type="button" onClick={submitControl} id="submitButton">작성</button>
        </div>
        </>
        
    )

}

export default WriteReview;