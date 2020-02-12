import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addContact } from '../action';
import Modal from '../Modal'

class AddContact extends Component {
    state = { 
        show: false, 
        firstName: '',
        surName: '',
        email: '',
        phone_number: '',
        errors: {}
    };

    showForm = () => {
      this.setState({ show: true });
    };
  
    hideForm = () => {
      this.setState({ show: false });
    };
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    handleValidation = () => {
       const errors = {};
       const {firstName} = this.state;
       let isValid = true;
       if(firstName === ""){
        isValid = false
        errors.firstName = "*first name is required"
       }
       const {surName} = this.state;
       if(surName === ""){
           isValid = false
           errors.surName = "*surname is required"
       }
       const {phone_number} = this.state;
       if(phone_number === ""){
           isValid = false
           errors.phone_number = "*phone number is required"
       }

       this.setState({errors})

       return isValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.handleValidation()){
            this.props.saveContact(this.state);
            this.setState({
                firstName: '',
                surName: '',
                email: '',
                phone_number: '',
                show: false
              })
        }
     

    }

    render() {
        return (
            <div>
                <Modal show={this.state.show}>
                <form onSubmit={this.handleSubmit}>
                    <h5>Add Contact</h5>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} />
                       <small className="error-msg">{this.state.errors.firstName}</small> 
                     <br/>
                    <input type="text" name="surName" placeholder="Surname" onChange={this.handleChange} value={this.state.surName} />
                        <small className="error-msg">{this.state.errors.surName}</small> 
                    <br/>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} /><br/>
                    <input type="number" name="phone_number" placeholder="Phone No..." onChange={this.handleChange} value={this.state.phone_number} />
                        <small className="error-msg">{this.state.errors.phone_number}</small> <br/>
                    <button>Save</button>
                    <button onClick={this.hideForm}>Close</button>
                </form>
                </Modal>
                <button type="button" onClick={e => {this.showForm()}} className="addcontact-btn">Add Contact</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addContactItem: (contact) => dispatch(addContact(contact))
});

export default connect(null, mapDispatchToProps)(AddContact);
