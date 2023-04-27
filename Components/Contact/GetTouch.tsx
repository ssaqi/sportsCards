import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export default function GetTouch() {
  return (
    <>
     <div className='bg-Color3'>
              
                <div className="container">
                    <div className="album py-2">
                        <div className="container-fluid">
                            <form action="#" method="POST">
                                <div className="contact-grids1 w3agile-6">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-white">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                                name='name'
                                                autoComplete='off'
                                              
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-dark">Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Last Name"
                                                name='lname'
                                                autoComplete='off'
                                               
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-dark">Subject</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject"
                                                name='subject'
                                                autoComplete='off'
                                              
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-dark">Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                autoComplete='off'
                                                
                                            />
                                        </div>
                                    </div>
                                    <div className="contact-me animated wow slideInUp form-group">
                                        <label className="col-form-label text-dark">Message</label>
                                        <input
                                            type="text"
                                            className="form-control m1"
                                            placeholder="Massage"
                                            name="massage"
                                            autoComplete='off'
                                          
                                        />
                                    </div>
                                    <br />
                                    <div className="contact-form">
                                        <Button variant="contained" style={{backgroundColor: "gray"}} endIcon={<SendIcon />}> Submit Form </Button>
                                    </div>
                                </div>
                            </form>





                        </div>
                    </div>
                </div>


            </div>
    
    </>
  )
}
