import {useParams} from "react-router-dom";
import React, { useEffect, useState } from 'react';

const ShowReview = () => {

    const seq_temp = useParams().seq
    const welfareName_temp = useParams().welfareName
    const [text, setText] = useState([]);


    const sendWelfareName = async (e) => {
        
        const seq = seq_temp;
        const sw_name = welfareName_temp;
        

        fetch(`http://localhost:8080/main/ShowReview/${seq}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setText(data)
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
    };

    useEffect(() => {

        sendWelfareName()
        
    }, [])

    return (
        <>
        <div className="showReview">
          <div className="showReviewElement">제목:&nbsp;{text.notename}</div>
          <div className="showReviewElement">시설이름:&nbsp;{text.sw_name}</div>
          <div className="showReviewElement">사용자명:&nbsp;{text.username}</div>
          <div className="showReviewElement">내용:</div><br /><div className="showReviewDetail">&nbsp;{text.note}</div>
        </div>
        </>
    )
}

export default ShowReview;