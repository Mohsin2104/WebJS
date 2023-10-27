var palindrome = "12345";
for (let index = palindrome.length - 1; index >= 0; index--) {
  console.log("i", palindrome[index]);
  reverse += palindrome[index]
}
console.log("rev", reverse);