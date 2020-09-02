import React, { Component } from 'react';
import './App.css';


function runReader(target) {
  var txtInput = target.innerText;
  var synth = window.speechSynthesis;
  var voice = synth.getVoices().filter(function (voice) {
    return voice.lang === 'en';
  })[0];
  
  document.body.onkeyup = function (e) {
    if (e.keyCode === 32) {
      synth.cancel();
    }
  }

  function runSpeak(txt) {
    if(!synth.speaking && !synth.pending){
    var toSpeak = new SpeechSynthesisUtterance(txt);
    toSpeak.voice = voice;
    toSpeak.pitch = 1;
    toSpeak.rate = 1.5;
    toSpeak.volume = 0.8;
    target.className = 'reading';
    synth.speak(toSpeak);
    toSpeak.onend = function(){target.className = null;}
    }
  }

  return (
    runSpeak(txtInput)
  )
}

// var selectedTxt = [];

// function queueTxt(target){
//   var element = {txt:target.innerText}
//   if(selectedTxt.indexOf(element.txt) === -1){
//     selectedTxt.push(element.txt);
// }
  
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    //queueTxt(event.target)
    
    runReader(event.target);
    //console.log(selectedTxt);
  }

  render() {
    return (
      <div className="main">
        <h1 onClick={this.handleClick}>Welcome to SpeakEasy v0.1</h1>

        <h2 onClick={this.handleClick}>Click on any text to have it read aloud</h2>

        <p onClick={this.handleClick}>
         SpeakEasy is a program designed to provide the impaired and 
         illiterate population with a service that allows them to 
         access information on the internet more effectively, 
         efficiently and independently. 
        </p>
        <p onClick={this.handleClick}>
        The world is becoming more and more digitally focussed and 
        we have to allow impaired and illiterate persons the same 
        right and access to information online as the rest of the 
        population.
        </p>
      </div>
    );
  }
}

export default App;
