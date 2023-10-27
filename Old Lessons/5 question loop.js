let q = [
    { question: "what is 10 - 5", answer: 5},
    { question: "what is 25 + 30", answer: 55 },
    { question: "what is 100 / 20 ", answer: 5 },
    { question: "what is 3 * 15", answer: 45 },
    { question: "what is 7 * 20 ", answer: 140 },
]
  
  const test = () => {
  
    let ans;
    let score = 0;
  
    for (i = 0; i < q.length; i++) {
      ans = +prompt(q[i].question);
      if (!ans) {
        document.write("<br> Answer the question please");
        return;
      }
      if (ans === q[i].answer) {
        score++;
      }
    }
  
    document.write("<br> Your score is " + score);
}
  
test();

//

var numCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
 for (var i = 0; i < numCheck.length; i++) {
   if (numCheck[i] % 2 === 0) {
     console.log(numCheck[i]);
  }
 }

 //

 var paas = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
 var generatePass = "";
 for (i = 0; i < 12; i++) {
   var pass = paas[Math.floor(Math.random() * paas.length)];
   generatePass += pass;
 }
 document.write(generatePass);

 var password = ["ABCD", "abcd", "!@#$"];
 var generatePass = "";
 for (i = 0; i < password.length; i++) {
   var pass = password[Math.floor(Math.random() * password.length)];
   generatePass += pass;
 }
document.write(generatePass);


  