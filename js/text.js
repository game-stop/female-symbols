let gollCongratulationMessages = [
    "A woman without a man is like a fish without a bicycle (Irina Dunn)",
    "Feminism is the radical notion that women are human (Cheris Kramarea)",
    "A feminist is anyone who recognizes the equality and full humanity of women and men. (Gloria Steinem)",
    "I am a woman / Phenomenally / Phenomenal woman / That's me. (Maya Angelou)",
    "A woman with a voice is, by definition, a strong woman. (Melinda Gates)",
    "There is no limit to what we, as women, can accomplish. (Michelle Obama)",
    "Feminism is for everybody. (Bell Hooks)",
    "Words have power. TV has power. My pen has power. (Shonda Rhimes)",
    "A revolutionary woman can't have no reactionary man.  (Assata Shakur)",
    "Women are always at the front of revolutions. (Buthayna Kamel)",
    "Feminism is the radical notion that women are human beings. (Cheris Kramarae)",
    "Men are from Earth, women are from Earth. Deal with it (George Carlin)",
    "The thing women have yet to learn is nobody gives you power. You just take it. (Roseanne Barr)",
    "A feminist is anyone who recognizes the equality and full humanity of women and men. (Gloria Steinem)",
    "You must give everything to make your life as beautiful as the dreams that dance in your imagination. (Roman Payne)",
    "A woman is human. Equality is a given. (Vera Nazarian)"
];

let gollCongratulationPoems = [
[   "Feminism is for everybody. "
]];

function getCongratulationMessage() {
    let index = Math.floor(Math.random() * gollCongratulationMessages.length);
    return gollCongratulationMessages[index];
}

function getCongratulationPoemMessage() {
    let index = Math.floor(Math.random() * gollCongratulationPoems.length);
    return gollCongratulationPoems[index];
}

function getCongratulationPoem() {
    let str = "";
    let poem = getCongratulationPoemMessage();
    for( let i = 0; i < poem.length; i ++ ) {
        str = str.concat(poem[i]).concat("<br/>");
    }
    return str;
}

function getCongratulationHelpMessage() {
    return "<p id=\"cht\" class=\"congratulations-help hidden\">Click to continue</p>";
}

function setCongratulationMessage(numberOfPairs) {
    let youWon = document.getElementById("you-won");
    let index = Math.floor(Math.random() * 10);

    if( numberOfPairs <= 8 || index != 5) {
        youWon.innerHTML = getCongratulationMessage();
        youWon.innerHTML += getCongratulationHelpMessage();
        youWon.classList.add('visible');
    }
    else {
        youWon.innerHTML = getCongratulationPoem();
        youWon.innerHTML += getCongratulationHelpMessage();
        youWon.classList.add('poem');
    }
}
