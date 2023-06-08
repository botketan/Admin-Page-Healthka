import React from 'react';
import ReactDOM from 'react-dom';
import Card from "@mui/material/Card";
import "layouts/billing/components/customer_profile/customerprofile.css"


const customerProfile=(props) => 
    (
        
            <div className='profile'>
            <Card className='profile-container'>
            
            <img className ="profile-img" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
            
            </Card>
            
            
            <Card className='cdetails'>
              <p id="detailsheading"> Customer Details</p>
              <p className='detail'> UserId:{props.id} </p>
              <p className='detail'> Name: {props.name}</p>
              <p className='detail'> Contact:{props.conatct} </p>
              <p className='detail'> Email:{props.email}</p>
              <p className='detail'> Address:{props.address} </p>
              <p className='detail'>Pincode:{props.pin} </p>
              </Card>
        
          
            
        </div>
        
        
    )


export default customerProfile