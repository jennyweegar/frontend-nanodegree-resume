var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<span>%data%</span><hr/>";

var name = "Jenni Weegar";
var formattedName = HTMLheaderName.replace (%data%, name); 
$("#header").append(formattedName);

var role = "Web Developer";
var formattedRole =HTMLheaderRole.replace(%data%, role);
$("#header").append(formattedRole);
