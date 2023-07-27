import React, { useEffect, useState } from 'react';

function Main() {
  const [list, setList] = useState([]);


  useEffect(() => {
    fetch('http://10.125.121.201:8080', { method: 'GET' })
    //fetch('http://localhost:8080')
      .then(response => response.json())
      .then(data => setList(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <p>안녕</p>
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
