import React, { Component } from 'react';
import Contacts from './Contacts';
import AddContact from './AddContact';


class Contact extends Component {
    state = {
        contacts: [
          { id: 1, firstName: 'Taiwo', surName: 'Obafemi', email: 'taiwoObafemi@enyata.com', phone_number: '08022334443' },
          { id: 2, firstName: 'Segun', surName: 'Dare', email: 'segun@enyata.com', phone_number: '08028678443' },
        ]
      }
        deleteContact = (id) => {
    const contacts = this.state.contacts.filter(contact => {
      return contact.id !== id
    });
    this.setState({
      contacts
    })
  }
    
      saveContact = (contact) => {
        contact.id = Math.random();
        let contacts = [...this.state.contacts, contact];
        this.setState({
            contacts                                       
        })
    }
    render(){

    
    return(
         <>
            <h3 style={{ padding:"20px"}}>CONTACT LIST</h3>
            <Contacts contacts={this.state.contacts} deleteContact={this.deleteContact} />
            <AddContact saveContact={this.saveContact}/>
            </>
    )
}
}

export default Contact;