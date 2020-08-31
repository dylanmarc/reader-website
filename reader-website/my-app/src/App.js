import React, { Component } from 'react';
import './App.css';
import Reader from './components/Reader.js';
import Voice from './components/Voice.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleVoiceChange = this.handleVoiceChange.bind(this);
  }

  handleClick = (event) => {
    Reader(event.target.innerText, document.querySelector('#voiceList'), document.querySelector('#btnSpeak'));
  }
  handleVoiceChange = () => {
    Voice(document.querySelector('#voiceList'));
  }



  render() {
    return (
      <div>
        
          Select Voice: <select id='voiceList' onClick={this.handleVoiceChange}></select>

          <input id='txtInput' />
            <button id='btnSpeak'>Speak!</button>

            <p onClick={this.handleClick}>
              In our basic Speech synthesiser demo (source), we first grab a reference to the SpeechSynthesis controller using window.speechSynthesis. After defining some necessary variables, we retrieve a list of the voices available using SpeechSynthesis.getVoices() and populate a select menu with them so the user can choose what voice they want.
</p>
            <p onClick={this.handleClick}>
              The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)
</p>
      </div>
    );
  }
}
 
export default App;
