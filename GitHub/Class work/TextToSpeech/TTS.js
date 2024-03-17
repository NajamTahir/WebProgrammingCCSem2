function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang="en-us";
    speech.text=msg;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=10;
    window.speechSynthesis.speak(speech);
}