var testgrade= prompt("What grade are did you get on your test?");

if (testgrade >= 90) {
   alert("you got an A!");
} else if (testgrade >= 85  && testgrade <=89) {
     alert("you got a B!");
} else if (testgrade >= 75 && testgrade <= 84) {
    alert("you got a C!");
} else if (testgrade >= 65 && testgrade <= 74 ) {
    alert("you got a D!");
} else {
    alert("you got a F!");
}
