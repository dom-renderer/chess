const allowDrop = (ev) => {
    ev.preventDefault();
}

const drag = (ev) => {
    ev.dataTransfer.setData('text', ev.target.id);    
}

const drop = (ev) => {
    ev.preventDefault();
    var thePiece = ev.dataTransfer.getData('text');
    var letterOfToBePlacedBox = ev?.target?.parentElement?.dataset.letter || ev?.target?.dataset.letter;
    var digitOfToBePlacedBox = ev?.target?.parentElement?.dataset.digit || ev?.target?.dataset.digit;
    
    

    return false;    
    //ev.target.appendChild(document.getElementById(data));
}

const movement = (letter, digit, toBePlaced) => {
    //console.log(letter, digit, toBePlaced);


}