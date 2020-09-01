export default function Reader(txtInput) {
    var synth = window.speechSynthesis;
    var voice = synth.getVoices().filter(function (voice) {
        return voice.lang === 'en';
    })[0];

    document.body.onkeyup = function (e) {
        if (e.keyCode == 32) {
            synth.cancel();
        }
    }

    function runSpeak(txt) {
        var toSpeak = new SpeechSynthesisUtterance(txt);
        toSpeak.voice = voice;
        toSpeak.pitch = 1;
        toSpeak.rate = 1.5;
        toSpeak.volume = 0.8;
        synth.speak(toSpeak);
    }

    return (
        runSpeak(txtInput)
    )
}

