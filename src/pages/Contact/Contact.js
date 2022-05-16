import React from 'react'
import "./Contact.css"
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base';
import Box from '@mui/material/Box';
const Contact = () => {
  return (
    <div className='contact-container'>
      <h1 className='contact-heading' data-aos="zoom-in">Get in touch with us</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-lg-6' id="Contact-Message" data-aos="slide-left">
            <div className='drop-message-container'>
              <h1 className='drop-message'>Drop us a message</h1>
              <img src='./images/mail.svg' />
            </div>
            <div className='drop-message-txt'>
            We will get back to you as soon as possible.
            </div>
            <div className='contact-input-fields'>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80%' },
      }}
      noValidate
      autoComplete="off"
    >
           <div className='contact-inputs'>
           <TextField
          label="Full Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '100%' }}

        />
           </div>
           <div className='contact-inputs'>
           <TextField
          label="Email Address"
          id="outlined-start-static"
          sx={{ m: 1, width: '100%' }}

        />
           </div>
           <div className='contact-inputs'>
           <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
         
        />
           </div>
           </Box>
            </div>
            <div className='contact-send-btn'>
              send
            </div>
          </div>
          <div className='col-md-12 col-lg-6' id="Contact-img" data-aos="slide-right">
            <img src='./images/contact-bg.svg' style={{width:'100%'}}/>
          </div>
        </div>
      </div>
      <div className='grow-heading-container'>
      <div className='grow-header' data-aos="zoom-in">
      Are you ready to grow your savings with us?
      </div>
      
      </div>
      <div className='contact-plan-btn-container'>
      <div className='contact-plan-btn'>
        See Plans
      </div>
      </div>
    </div>
  )
}

export default Contact