// this is a prefix tree




var keymap = { a:2,b:2,c:2,d:3,e:3,f:3,g:4,h:4,i:4,j:5,k:5,l:5,m:6,n:6,o:6,p:7,q:7,r:7,s:7,t:8,u:8,v:8,w:9,x:9,y:9,z:9};

var PreFixTree = function(val) {
  this.values = [];
  if(val){ this.values.push(val); }
  this.children = {};
};

PreFixTree.prototype.store = function(currentWord, fullWord) {
  var keyNum = keymap[currentWord[0]];
  if (currentWord.length === 1) {
    if (!this.children[keyNum]) {
      this.children[keyNum] = new PreFixTree(fullWord);
    } else {
      this.children[keyNum].values.push(fullWord);
    }
    return;
  }
  //check if it exists firsts
  if (!this.children[keyNum]) {
    this.children[keyNum] = new PreFixTree();
  } 

  this.children[keyNum].store(currentWord.slice(1), fullWord);
};

//shanshan's way
PreFixTree.prototype.getPossibleWords = function(keyString) {
  var keyArr = keyString[i].split('');
  return this.walker(keyArr);
};

PreFixTree.prototype.walker = function(keyArr) {
  if(keyArr.length > 0){
    var nextKey = keyArr.shift();
    return this.children[nextKey].walker(keyArr);
  }else{
    return Object.keys(this.values);
  }
}


// -----------------
// -- pre processing
// -----------------

var loadDictionary = function(listOfWords,trie){
  for (var i = 0; i < listOfWords.length; i++) {
    trie.store(listOfWords[i].toLowerCase(),listOfWords[i].toLowerCase());
  }
};


$.ajax({
  type: "GET",
  url: "dict",
  success: function(){
    
  }

})