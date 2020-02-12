import React, { Component } from 'react'

class Modal extends Component {
    state = {}
    render() {
        if(!this.props.show){
            return null;
        }

      return <div className="bg-modal">
                <div className="modal-content">
                    <div> {this.props.children} </div>                
                </div>             
            </div>
    }
}

export default Modal;

