  
function isValid(str) {
    if (str.length <= 1)
      return false
  
    let bracketOpen, currentBracket
    let stack = []
  
    let openBrackets = ['[', '{', '(']
    let closeBrackets = [']', '}', ')']

    for (let i = 0; i < str.length; i++) {
        currentBracket = str[i]
        
        if (closeBrackets.indexOf(currentBracket) != -1) {
            bracketOpen = openBrackets[closeBrackets.indexOf(currentBracket)]
            if (stack.length == 0 || (stack.pop() != bracketOpen)) return false
        } 
      
        else {
            stack.push(currentBracket)
        }
    }
    return (stack.length == 0)
};

function isValidFun() {
    let str = document.getElementById("string").value

    if (str.length <= 1)
      return false
  
    let bracketOpen, currentBracket
    let stack = []
  
    let openBrackets = ['[', '{', '(']
    let closeBrackets = [']', '}', ')']
 

    for (let i = 0; i < str.length; i++) {
        currentBracket = str[i]
       
        if (closeBrackets.indexOf(currentBracket) != -1) {
            bracketOpen = openBrackets[closeBrackets.indexOf(currentBracket)]
            if (stack.length == 0 || (stack.pop() != bracketOpen)) return false
        } 
    
        else {
            stack.push(currentBracket)
        }
    }
    ans = ""
    if(stack == undefined || stack.length < 1 ){
        ans += "Balanced";
    }
    else{
        ans += "Not Balanced";
    }
    alert(ans);
};
