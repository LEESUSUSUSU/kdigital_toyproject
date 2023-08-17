import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const DeletePost = () => {
    
    const seq= useParams().seq;


    const DeleteControl = async (e) => {
        e.preventDefault();

        const newPassword = document.getElementById('newPassword');

        try {
          const response = await fetch('http://localhost:8080/main/deleteReview', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },  
            body: JSON.stringify({
              id: seq, 
              notePass: newPassword.value 
            }),
          });
          if (response.ok) {
            console.log("입력성공")
            window.close()
          } else {
            console.log("입력실패. 서버오류발생1")
            console.log(seq)
            
          }
        } catch (error) {
            console.log("입력실패. 서버오류발생2")
        }
    };

    return(
        <>
        비밀번호를 입력하세요<br/>
        <input type="password" id ="newPassword"></input>
        <button type="button" onClick={DeleteControl}>입력</button>
        </>
    );
}

export default DeletePost;