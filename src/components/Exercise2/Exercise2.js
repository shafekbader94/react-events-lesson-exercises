import React, { Component } from 'react';
import List from './List';
import Conversation from './Conversation';

class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura", convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" }
          ]
        },
        {
          with: "Dad", convo: [
            { text: "Have you finished your school work yet?", sender: "other" },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" }
          ]
        },
        {
          with: "Shoobert", convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ]
        }
      ]
    }
  }

    displayConvo = name => {
      let currentDisplayConvo = name
      this.setState({
        displayConversation: currentDisplayConvo
      })
    }

    changeDisConv = () =>{
      let displayConversationNull = null
      this.setState({
        displayConversation: displayConversationNull
      })
    }
  

  render() {
    return (
      <div >
        {/* If displayConverastion is null - 
    App should render List, otherwise it should display Conversation */}
    {this.state.displayConversation===null ? <List contacts = {this.state.conversations.map(c => c.with)} displayConvo={this.displayConvo}/> 
                                          : <Conversation convo={this.state.conversations.find(c =>
                                            c.with === this.state.displayConversation).convo}
                                            sender={this.state.displayConversation} 
                                            changeDisConv={this.changeDisConv}/>}
      </div>
    );
  }
}

export default Exercise2;
