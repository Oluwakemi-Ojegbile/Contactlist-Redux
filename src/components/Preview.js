import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Preview = () => {
    const location = useLocation();
    let contact = location.state; 
    console.log("=====", contact)
    return(
        <div className="details">   
            <h3 style={{ padding:"20px"}} >CONTACT DETAILS</h3>        
            <p>First Name: {contact.firstName} </p>
            <p>Surname: {contact.surName}</p>
            <p>Email: {contact.email}</p>
            <p>Phone No.: {contact.phone_number}</p>   
            <Link to="/"><button>&#8592;</button></Link>                    
        </div>
    )
        
}

export default Preview;