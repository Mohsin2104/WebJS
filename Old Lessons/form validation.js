//HTML PART

// <body>
// <form id="myForm" onsubmit="formVal(event)">
//     <input type="text" id="firstname" placeholder="First Name"> <br>
//     <span id="f_valid"></span>
//     <br>
//     <input type="text" id="lastname" placeholder="Last Name"> <br>
//     <span id="l_valid"></span>
//     <br>
//     <input type="text" id="pass"> <br>
//     <button onclick="generatePassword()">generate password</button><br>
//     <span id="p_valid"></span>
//     <input type="text" id="retypepass"> <br>
//     <span id="r_valid"></span>
//     <input type="submit" value="submit">

// </form>
// <script src="script.js"></script>
// </body>

//JAVASCRIPT PART

// var fname = document.getElementById('firstname');
// var lname = document.getElementById('lastname');
// var pass = document.getElementById("pass")
// var repass = document.getElementById("retypepass")
// var f_valid = document.getElementById("f_valid")
// var l_valid = document.getElementById("l_valid")
// var p_valid = document.getElementById("p_valid")
// var r_valid = document.getElementById("r_valid")


// function formVal(e) {
//     e.preventDefault();
//     console.log(fname, lname, pass, repass);
//     if (fname.value === "" || lname.value === '' || pass.value === "" || repass === "") {
//         if (fname.value === "") {
//             f_valid.innerText="Invalid"
//         }
//         if (lname.value === "") {
//             l_valid.innerText="Invalid"
//         }
//         if (pass.value === "") {
//             p_valid.innerText="Invalid"
//         }
//         if (repass.value === "") {
//             r_valid.innerText="Invalid"
//         }
//         return
// }

//     if(repass.value !== pass.value) {
//         alert("Re-Entered password must match original password")
//         return
//     }

//     l_valid.innerText = ""
//     f_valid.innertext = ""
// }

// var lower = "abcd"
// function generatePassword() {
//     pass.value = '123456789'
// }


