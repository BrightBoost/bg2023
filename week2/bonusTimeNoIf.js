var startHours = 16;
var startMinutes = 15;
var endHours = 14;
var endMinutes = 18;

var startTotalMinutes = startHours * 60 + startMinutes;
var endTotalMinutes = endHours * 60 + endMinutes;

let diff = endTotalMinutes - startTotalMinutes;

var hours = Math.abs(Math.floor(diff / 60));
var minutes = Math.abs(diff % 60);

console.log("The difference:", hours, ":", minutes);