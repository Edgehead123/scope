
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
q1();
// 3

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
q2();
q22();
// 0 ... wrong... alert shows 5 because a=5 has changed the window level var a

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
q3();
q32();
//hello

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
q4();
//error 2 variables same name ... wrong, alert shows test b/c nothing is pointing to window level var a

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

//5 and 2 .. .alert showing 5 and 5.
//if statements and var do not create new scope. so both alerts are pointing at line 52