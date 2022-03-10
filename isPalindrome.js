function isPalindrome(str) {
    let removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let checkPalindrome = removeChar.split('').reverse().join('');

    return (removeChar === checkPalindrome);
}

console.log(isPalindrome('awesome'))
console.log(isPalindrome('foobar'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanapamanaplanacanalpandemoniumlanacanalpanama'))