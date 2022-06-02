import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {
  //should recieve the prop "contact"
 
  render() {
    let contact = this.props.contacts
    return (
      <div >
        {/* Should render an array of Contact components , with the prop "name"*/}
        {contact.map((c,i) => <Contact key={i} name = {c} displayConvo={this.props.displayConvo}/>)}
      </div>
    );
  }
}

export default List;
