function palindrome(str) {
  //input: Str
  //output: boolean, true if its a palindrome, if false if its not
  // algorithms that say if str === palindrome , str !=palindrome
  //You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols
  
  console.log('str',str)
  let lowerCase = str.toLowerCase();
  console.log('lowerCase',lowerCase)
  let lookFor = lowerCase.replace(/[^0-9a-z]/gi,'') // has to replace regex with second    argument
 console.log('lookFor',lookFor);
 let reversed = lookFor.split('').reverse().join('') //
   console.log('reversed',reversed)
  if(lookFor == reversed){
    
    return true

  } else {
    return false
  }

}

palindrome("race CAR"); //calling function & passing parameter
console.log(palindrome("race CAR"))