import React, { Component } from 'react'

export default function Reader(txtInput, voiceList) {
        var synth = window.speechSynthesis;
        var voices = [];
        

        document.body.onkeyup = function(e){
            if(e.keyCode == 32){
                synth.cancel();
            }
        }

        function runSpeak(txt){
            var toSpeak = new SpeechSynthesisUtterance(txt);
            var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
            voices.forEach((voice)=>{
                if(voice.name === selectedVoiceName){
                    toSpeak.voice = voice;
                }
            });
            synth.speak(toSpeak);
        }

       
    return (
        runSpeak(txtInput)
    )

}

