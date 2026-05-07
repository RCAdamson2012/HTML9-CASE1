"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Craig Adamson
   Date:  4/14/2026 

*/

// Create a Date object for February 3, 2018 at 3:15:28 a.m.*/
var thisTime = new Date();
// Store the date and time as a local text string*/
var timeStr = thisTime.toLocaleString();

// Display the date and time in the page element with the id timestamp*/
document.getElementById("timestamp").innerHTML = timeStr;

// Get the current hour from the Date object*/
var thisHour = thisTime.getHours();

// Get the current month number from the Date object*/
var thisMonth = thisTime.getMonth();

// Calculate the sky map number*/
var mapNum = (2 * thisMonth + thisHour) % 24;

// Create the image HTML for the correct sky map*/
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

// Insert the sky map image inside the planisphere element
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);