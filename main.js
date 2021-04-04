
var toogleNavStauts = false;
var toogleNav = function() {

    var getSidebar = document.querySelector(".nav-sidebar");
    var getSidebarUl = document.querySelector(".nav-sidebar ul");
    var getSidebarTitle = document.querySelector(".nav-sidebar span");
    var getSidebarLInks = document.querySelectorAll(".nav-sidebar a");

    if (toogleNavStauts === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        var arrayLenght = getSidebarLInks.length;
        for (var i = 0; i < arrayLenght; i++) {
            getSidebarLInks[i].style.opacity = "1";
        }
        toogleNavStauts = true;

    }  
    else if (toogleNavStauts === true) {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width = "60px";
        getSidebarTitle.style.opacity = "0.5";

        var arrayLenght = getSidebarLInks.length;
        for (var i = 0; i < arrayLenght; i++) {
            getSidebarLInks[i].style.opacity = "0.5";
        }
        toogleNavStauts = false;
        
    }

}





function mytime()
   {
   var d=new Date();
   ap="AM";
   h=d.getHours();
   m=d.getMinutes();
   s=d.getSeconds();
   if ( h > 11) { ap = "PM"; }
//   if (h>12) { h = h-12; }
// if (h==0) { h = 12; }
   if (h < 10) { h = "0" + h; }
   if (m < 10) { m = "0" + m; }
   if (s < 10) { s = "0" + s; }
   document.getElementById('timehere').innerHTML=h + ":" + m + ":" + s + " " + ap;
   t=setTimeout('mytime()',500);
   }



function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  else if(isNaN(phone) || phone.length != 11){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  else if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  else if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

























/*
alert("message");
var FirstName = 23;

var x = 30;
    y = 6;
    x %= y; // x = x + y;
    console.log(x);

var myName = {
  name1: "Abdulrahman",
  name2: null,
  age1: 22,
  age2: 25
};

console.log(myName[""]);

var x = "34";
console.log(typeof x);
  */
 /*
document.getElementById("wowowoow").style.display = "none";

function disp() {
  document.getElementById("wowowoow").style.display = "block";
}

var counter = 0
function count() {
    counter++;
    document.getElementById("hhh1").innerHTML = counter;

}

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }


  function displayDate1() {
    document.getElementById("demo1").style.fontSize = "35px";
    document.getElementById("demo1").innerHTML = "I am Abdulrahman Alaa, I am a Front end Developer 2 Years";

  }
  function displayDate4() {
    document.getElementById("demo1").style.fontSize = "15px";
  }
  function displayDate2() {
    document.getElementById("demo1").style.display = "none";

  }
  function displayDate3() {
    document.getElementById("demo1").style.display = "block";

  }
  
 
 var names = new Object();
names.first = "alaa";
names.second = "eslam";
names.thrid = "ahmed";


  document.getElementById("demo1").innerHTML = "my first name is " + "<br></br>" + names.first + "<br></br>" + " and my second name is " + names.second;
document.getElementById("demo1").style.color = "white";
document.getElementById("demo1").style.backgroundColor = "blue";
document.getElementById("demo1").style.width = "300px";


function cheakVar() {
    var x = 7;
    if(x === 5) {
        document.getElementById("mainjs").innerHTML = x;
    } else if (x == 6) {
        document.getElementById("mainjs").innerHTML = "3";

    } else {
        alert("no");
    }
}
cheakVar();



function whatName() {
    var yourAge = prompt("what is yor yourAge ? "); 
    var yourName = prompt("what is yor yourName ? "); 
    document.getElementById("test").innerHTML = ` My Name is ${yourName}  My age is ${yourAge} <br>`;
    document.getElementById("test").style.color = "red";
    console.log(yourAge);
    console.log(yourName);
}
whatName();

function outer() {
    var a = 5;
  
    function inner() {
      var b = 10;
      alert(a + b);
    }
  
    return inner;
  }
  
  var inner = outer();
  
  inner();
  
  console.dir(inner);
  


var names = new Object();
names.first = "alaa";
names.second = "eslam";
names.thrid = "ahmed";

document.getElementById("demo1").innerHTML = "my first name is " + names.first + " and my second name is " + names.second;
document.getElementById("demo1").style.color = "white";
document.getElementById("demo1").style.backgroundColor = "blue";
document.getElementById("demo1").style.width = "300px";
*/

/*
var myName = {
  name: "abdulrhman",
  age: 22,
  id : 5566,
  fullName : function() {
    return this.name + " " + this.age;
  }
};

document.getElementById("demo").innerHTML = myName.fullName();





var x = myFun(5, 3);
document.getElementById("dddddd").innerHTML = x;

function myFun(a, b) {
  return a * b
}
*/