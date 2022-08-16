document.getElementById("epicButton").addEventListener("click", crasher)

function crasher() {
    txt = "n89pc2q5np6c245vtoinvqiuncq4twgcmioyqt4oicioy";
    while(1){
      txt = txt += "a";
      console.log(txt);
    }
