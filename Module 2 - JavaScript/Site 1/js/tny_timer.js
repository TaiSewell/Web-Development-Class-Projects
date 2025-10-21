"use strict";

/*
   New Perspectives on HTML5, CSS3, and Javascript
   Assignment 9.2 - Working with JavScript

   Event Timer
   Author: Tai Sewell
   Date:  10/21/25   

*/
showClock();
setInterval("showClock()", 100)


/* Execute the function to run and display the countdown clock */
function showClock() {
   // Create variables that store the specific date and locale date and time
   let thisDay = new Date();
   let localDate = thisDay.toLocaleDateString();
   let localTime = thisDay.toLocaleTimeString();

   // Change the inner html inside the id element "currentTime"
   document.getElementById("currentTime").innerHTML= "<span>" + localDate + "</span>" + "<span>" + localTime + "</span>";
   
   // Calculate the amount of time before 
   let j4Date = nextJuly4(thisDay);
   j4Date.setHours(21,0,0);

   let timeDiff = j4Date - thisDay;


   let days = timeDiff / (1000 * 60 * 60 * 24);
   let hrs  = (days - Math.floor(days)) * 24;
   let mins = (hrs - Math.floor(hrs)) * 60;
   let secs = (mins - Math.floor(mins)) * 60;

   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
   }


/* Function to create and run the countdown clock */

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}


