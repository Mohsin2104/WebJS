var grade = prompt("Enter Grade", "");

switch (true) {
    case (grade > 10):
        console.log("Passed. Hurray!");
        break;

    case (grade == 10):
        console.log("Passed");
        break;

    case (grade < 10):
        console.log("Failed");
        break;
}