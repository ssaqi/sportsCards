import React, { useState } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import GetTouch from './GetTouch';
import Map from './Map';
export default function Contactus() {
  return (
    
    <>
    <Map/>
       <div className='bg-Color3'>
                <div className="container px-4 py-5">
                    <br></br>
                    <h1 style={{ color: " #323232",fontWeight: "200" }} >CONTACT<span style={{ color: "#446ee2" }}>- US</span></h1>
                    <p>For design and cabinetry inquiries, please complete the form below.</p>
                    <hr style={{ color: "#fff" }} />
                    <center>
                        <div className="line2" />
                    </center>
                </div>
                <div className="container">
                    <div className="album ">
                        <div className="container-fluid">
                            <form action="#" method="POST">
                                <div className="contact-grids1 w3agile-6">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-dark">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                                name='name'
                                                autoComplete='off'
                                              
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-dark">Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email"
                                                name='lname'
                                                autoComplete='off'
                                             
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-dark">Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone"
                                                name='subject'
                                                autoComplete='off'
                                                
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-dark">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Address"
                                                name="email"
                                                autoComplete='off'
                                          
                                            />
                                        </div>

                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-dark">
                                             State / Province / Region</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="State / Province / Region"
                                                name="email"
                                                autoComplete='off'
                                          
                                            />
                                        </div>
                                    </div>
                                    <div className="contact-me animated wow slideInUp form-group">
                                        <label className="col-form-label text-dark">How we can help you ?</label>
                                        <input
                                            type="text"
                                            className="form-control m1"
                                            placeholder="How we can help you ?"
                                            name="massage"
                                            autoComplete='off'
                                         
                                        />
                                    </div>
                                    <div className="contact-me animated wow slideInUp form-group">
                                        <label className="col-form-label text-dark">How Did You Hear About Us ?</label>
                                        
                                            <br/>
                                            <select name="cars" id="cars">
                                                <option value="volvo">I am a client</option>
                                                <option value="saab">Online search</option>
                                                <option value="opel">Print ads</option>
                                                <option value="audi">Refers</option>
                                                <option value="audi">Others</option>
                                            </select>


                                    </div>
                                    <br />
                                    <div className="contact-form">
                                        <Button variant="contained"  endIcon={<SendIcon />}style={{backgroundColor: "gray"}} > Reach Out Now</Button>
                                    </div>
                                </div>
                            </form>





                        </div>
                    </div>
                </div>

  <GetTouch/>
            </div>
    </>
  )
}
