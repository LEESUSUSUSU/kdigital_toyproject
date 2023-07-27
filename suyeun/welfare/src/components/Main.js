// Button.js

import React, { useEffect, useState } from 'react';

function Main() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(response => response.json())
      .then(data => setList(console.log(data)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default Main;
