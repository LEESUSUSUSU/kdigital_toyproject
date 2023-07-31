
import React, {useEffect, useState} from 'react';


const Main = () => {

    const[member1List , setMember1List] = useState([])

    useEffect(() => {
      fetch('http://localhost:8080/member2')
        .then(response => response.json() )
        .then(response => {
          console.log(response)
          setMember1List(response)
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const memberPrint = (arr) => {

      const result = []
     
      for (let i = 0; i <arr.length; i++)  {
        
        result.push(
          <div>
            {arr[i].mb_name}
            {arr[i].mb_address}
            {arr[i].mb_tel}
          </div>
        )

      }
      return(
        <>
        {result}
        </>
      );
    }

    return(
      <>
      <div>
        {memberPrint(member1List)}
      </div>
      
      </>
    )
    
    
}
    
    
export default Main;