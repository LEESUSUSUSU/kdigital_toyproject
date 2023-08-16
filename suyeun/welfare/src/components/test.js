import {useParams} from "react-router-dom";
import React, { useEffect, useState } from 'react';

const test = () => {

    const seq_temp = useParams().seq
    const welfareName_temp = useParams().welfareName
    const [text, setText] = useState([]);


    const sendWelfareName = async (e) => {
        
        const seq = seq_temp;
        const sw_name = welfareName_temp;
        

        fetch(`http://localhost:8080/main/ShowReview/37`)
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
        <div>
        </div>
        </>
    )
}

export default test;