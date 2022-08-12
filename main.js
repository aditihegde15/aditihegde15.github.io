//Scrolling effect
const scroll = new SmoothScroll('.navbar a[href*="#"]', { speed: 500});
//Type writing effect 
const TypeWriter = function(txtElement, words, wait=3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
}

//Method to type words
TypeWriter.prototype.type = function(){
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    this.txt = fullTxt.substring(0,this.txt.length + 1);
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    setTimeout(() => this.type(), 200);
}

document.addEventListener('DOMContentLoaded',init);

function init(){
    const txtElement = document.querySelector('.txt-type');
    //Need to parse this 
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}

