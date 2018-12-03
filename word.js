const Word = function(array, wordFunc, charFunc){
    this.array = array;
    this.wordFunc = wordFunc;
    this.charFunc = charFunc;

    wordFunc = function(){};
    charFunc = function(){};
}