// Button.js

import React from 'react';
import { Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

// Define the login function (you need to implement this function)
const login = () => {
  // Your login logic here
};

const Main = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        variant="contained"
        onClick={login}
        startIcon={<LockIcon />}
        style={{ backgroundColor: '#F2E1C2' }}

      >
        Login
      </Button>
    </div>
  );
}

export default Main;
