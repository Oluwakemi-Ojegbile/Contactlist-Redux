import React from 'react';
import { Link } from 'react-router-dom'

const Contacts = ({contacts, deleteContact}) => {
    const contactList = Contacts.length ? (
        contacts.map( contact => {
            return(
                <div className="contact-card" key={contact.id}>
                    <span><button onClick={() => {deleteContact(contact.id)}} className="delete-btn">X</button></span>
                <Link to={{
                    pathname: "/preview",
                    state:  contact 
                }}>
                    <p><b> { contact.firstName } { contact.surName }</b></p>
                        <p> { contact.phone_number } </p>
                </Link>
                </div>
            )
        })
    ) : (
        <p> You have no Contact!</p>
    )
    return (
        <div>
            {contactList}
        </div>
    )
}

export default Contacts;