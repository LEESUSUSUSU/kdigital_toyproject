// LockIcon.js

import React from 'react';
import { Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom'; // Update the import statement

const LockIconComponent = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLoginClick = () => {
    // Your login logic here (if needed)

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        variant="contained"
        onClick={handleLoginClick}
        startIcon={<LockIcon />}
        style={{ backgroundColor: '#F2E1C2' }}
      >
        Login
      </Button>
    </div>
  );
};

export default LockIconComponent;
