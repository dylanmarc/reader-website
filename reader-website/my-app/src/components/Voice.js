import React, { Component } from 'react'


export default function Voice(voiceList) {
    var synth = window.speechSynthesis;
    var voices = [];

    function PopulateVoices() {
        voices = synth.getVoices();
        var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
        voiceList.innerHTML = '';
        voices.forEach((voice) => {
            var listItem = document.createElement('option');
            listItem.textContent = voice.name;
            listItem.setAttribute('data-lang', voice.lang);
            listItem.setAttribute('data-name', voice.name);
            voiceList.appendChild(listItem);
        });

        voiceList.selectedIndex = selectedIndex;
    }
    PopulateVoices();
    if (speechSynthesis !== undefined) {
        speechSynthesis.onvoiceschanged = PopulateVoices;
    }

    return (
        <div>

        </div>
    )
}
