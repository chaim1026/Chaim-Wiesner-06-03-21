import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FlashMessage = ({ message }) => {

    const [open, setOpen] = useState(true);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return (
        <div className='flash-message'>
            <Snackbar anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }} 
                open={open} 
                autoHideDuration={4000} 
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
};

export default FlashMessage;