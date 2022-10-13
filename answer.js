//solution 1
function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}
//solution 2
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
//solution 3
function printerError(s) {
 return (s.length - s.match(/[a-m]/g).length).toString() + "/" + (s.length).toString();
}
