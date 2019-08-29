function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }
  

  var months = ['January','February','March','April','May','June','July',
'August','September','October','November','December']; 
var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];      
var today = new Date();
today.setTime(today.getTime() + (100*3600*24));       
document.getElementById("spanDate").innerHTML = days[today.getDay()] + ", " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
	

	

	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul',
'Aug','Sept','Oct','Nov','Dec']; 
var today = new Date();
	var x = document.getElementsByClassName("date");
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].innerHTML = today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
	
	}
  