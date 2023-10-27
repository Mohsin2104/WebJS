var rando = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1232456789";
 var Pass = "";
 for (i = 0; i < 12; i++) {
   var pass = rando[Math.floor(Math.random() * rando.length)];
   Pass += pass;
 }
 document.write(Pass);

 var password = ["ABCD", "abcd", "12345"];
 var Pass = "";
 for (i = 0; i < password.length; i++) {
   var pass = password[Math.floor(Math.random() * password.length)];
   Pass += pass;
 }
document.write(Pass);

  