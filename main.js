//add delete button
var habitList = document.getElementsByTagName("li"); //grabs the li element
    for (i = 0; i < habitList.length; i++) { //created a for loop that adds a delete button for every list item
        var span = document.createElement("span"); // creates a span
        var txt = document.createTextNode("X"); // creates a x to go in the button
        span.className = "close"; // names the span element "close"
        span.appendChild(txt); // puts the x in the button
        habitList[i].appendChild(span); // attaches the button to the list
    }

//remove item
var close = document.getElementsByClassName("close"); // grabs the "close" class
    for (i = 0; i < close.length; i++) { // for loop that applies for each close instance
          close[i].onclick = function() { // impliments action on click
            var li = this.parentElement; // grabs the whole list element
            li.parentElement.removeChild(li); // deletes the list item
          }
    }

//add habit to list
function newHabit() {
    var li = document.createElement("li"); //creates a list
    var habitItem = document.getElementById("item").value; //uses the text from input
    var text = document.createTextNode(habitItem); //puts text into list
	var span = document.createElement("span"); //creates a span
    span.appendChild(text); //puts the entry into span tags
	li.appendChild(span); //puts the span into the list
    
	if (habitItem === "") {// if input field is empty nothing happens
    } else {
        document.getElementById("habitList").appendChild(li); // adds the list element to "habitList"
      }
    
	document.getElementById("item").value = ""; // adds the text from the input field to the list item

    var xButton = document.createElement("span"); // creates a span
      var txt = document.createTextNode("X"); // creates an x for the button
      xButton.className = "close"; // names the span element "close"
      xButton.appendChild(txt); // puts the x in the button
      li.appendChild(xButton); // attaches it to the list item

      for (i = 0; i < close.length; i++) { // for loop that applies for each close instance
        close[i].onclick = function() { // impliments close action on click
              var li = this.parentElement; // calls the parent element which is the list element
              li.parentElement.removeChild(li); // deletes the list item
          }
      }
    
    //add checkboxes
	var chkboxDiv = document.createElement("div"); // creates a div
	chkboxDiv.className = "chkboxes"; // gives the div a class name
	
	//1
	var checkbox1 = document.createElement("input"); // creates an input
    checkbox1.type = "checkbox"; // sets the input type as checkbox
    checkbox1.id = "checkbox1"; // gives the checkbox a id
	
    var label1 = document.createElement("label"); // creates a label
    label1.htmlFor =  "checkbox1" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox1); // attaches checkboxes to div
    chkboxDiv.appendChild(label1) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//2
	var checkbox2 = document.createElement("input"); // creates an input
    checkbox2.type = "checkbox"; // sets the input type as checkbox
    checkbox2.id = "checkbox2"; // gives the checkbox a id
	
    var label2 = document.createElement("label"); // creates a label
    label2.htmlFor =  "checkbox2" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox2); // attaches checkboxes to div
    chkboxDiv.appendChild(label2) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//3
	var checkbox3 = document.createElement("input"); // creates an input
    checkbox3.type = "checkbox"; // sets the input type as checkbox
    checkbox3.id = "checkbox3"; // gives the checkbox a id
	
    var label3 = document.createElement("label"); // creates a label
    label3.htmlFor =  "checkbox3" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox3); // attaches checkboxes to div
    chkboxDiv.appendChild(label3) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//4
	var checkbox4 = document.createElement("input"); // creates an input
    checkbox4.type = "checkbox"; // sets the input type as checkbox
    checkbox4.id = "checkbox4"; // gives the checkbox a id
	
    var label4 = document.createElement("label"); // creates a label
    label4.htmlFor =  "checkbox4" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox4); // attaches checkboxes to div
    chkboxDiv.appendChild(label4) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//5
	var checkbox5 = document.createElement("input"); // creates an input
    checkbox5.type = "checkbox"; // sets the input type as checkbox
    checkbox5.id = "checkbox5"; // gives the checkbox a id
	
    var label5 = document.createElement("label"); // creates a label
    label5.htmlFor =  "checkbox5" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox5); // attaches checkboxes to div
    chkboxDiv.appendChild(label5) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//6
	var checkbox6 = document.createElement("input"); // creates an input
    checkbox6.type = "checkbox"; // sets the input type as checkbox
    checkbox6.id = "checkbox6"; // gives the checkbox a id
	
    var label6 = document.createElement("label"); // creates a label
    label6.htmlFor =  "checkbox6" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox6); // attaches checkboxes to div
    chkboxDiv.appendChild(label6) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//7
	var checkbox7 = document.createElement("input"); // creates an input
    checkbox7.type = "checkbox"; // sets the input type as checkbox
    checkbox7.id = "checkbox7"; // gives the checkbox a id
	
    var label7 = document.createElement("label"); // creates a label
    label7.htmlFor =  "checkbox7" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox7); // attaches checkboxes to div
    chkboxDiv.appendChild(label7) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//8
	var checkbox8 = document.createElement("input"); // creates an input
    checkbox8.type = "checkbox"; // sets the input type as checkbox
    checkbox8.id = "checkbox8"; // gives the checkbox a id
	
    var label8 = document.createElement("label"); // creates a label
    label8.htmlFor =  "checkbox8" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox8); // attaches checkboxes to div
    chkboxDiv.appendChild(label8) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//9
	var checkbox9 = document.createElement("input"); // creates an input
    checkbox9.type = "checkbox"; // sets the input type as checkbox
    checkbox9.id = "checkbox9"; // gives the checkbox a id
	
    var label9 = document.createElement("label"); // creates a label
    label9.htmlFor =  "checkbox9" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox9); // attaches checkboxes to div
    chkboxDiv.appendChild(label9) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//10
	var checkbox10 = document.createElement("input"); // creates an input
    checkbox10.type = "checkbox"; // sets the input type as checkbox
    checkbox10.id = "checkbox10"; // gives the checkbox a id
	
    var label10 = document.createElement("label"); // creates a label
    label10.htmlFor =  "checkbox10" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox10); // attaches checkboxes to div
    chkboxDiv.appendChild(label10) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//11
	var checkbox11 = document.createElement("input"); // creates an input
    checkbox11.type = "checkbox"; // sets the input type as checkbox
    checkbox11.id = "checkbox11"; // gives the checkbox a id
	
    var label11 = document.createElement("label"); // creates a label
    label11.htmlFor =  "checkbox11" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox11); // attaches checkboxes to div
    chkboxDiv.appendChild(label11) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//12
	var checkbox12 = document.createElement("input"); // creates an input
    checkbox12.type = "checkbox"; // sets the input type as checkbox
    checkbox12.id = "checkbox12"; // gives the checkbox a id
	
    var label12 = document.createElement("label"); // creates a label
    label12.htmlFor =  "checkbox12" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox12); // attaches checkboxes to div
    chkboxDiv.appendChild(label12) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//13
	var checkbox13 = document.createElement("input"); // creates an input
    checkbox13.type = "checkbox"; // sets the input type as checkbox
    checkbox13.id = "checkbox13"; // gives the checkbox a id
	
    var label13 = document.createElement("label"); // creates a label
    label13.htmlFor =  "checkbox13" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox13); // attaches checkboxes to div
    chkboxDiv.appendChild(label13) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//14
	var checkbox14 = document.createElement("input"); // creates an input
    checkbox14.type = "checkbox"; // sets the input type as checkbox
    checkbox14.id = "checkbox14"; // gives the checkbox a id
	
    var label14 = document.createElement("label"); // creates a label
    label14.htmlFor =  "checkbox14" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox14); // attaches checkboxes to div
    chkboxDiv.appendChild(label14) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//15
	var checkbox15 = document.createElement("input"); // creates an input
    checkbox15.type = "checkbox"; // sets the input type as checkbox
    checkbox15.id = "checkbox15"; // gives the checkbox a id
	
    var label15 = document.createElement("label"); // creates a label
    label15.htmlFor =  "checkbox15" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox15); // attaches checkboxes to div
    chkboxDiv.appendChild(label15) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//16
	var checkbox16 = document.createElement("input"); // creates an input
    checkbox16.type = "checkbox"; // sets the input type as checkbox
    checkbox16.id = "checkbox16"; // gives the checkbox a id
	
    var label16 = document.createElement("label"); // creates a label
    label16.htmlFor =  "checkbox16" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox16); // attaches checkboxes to div
    chkboxDiv.appendChild(label16) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//17
	var checkbox17 = document.createElement("input"); // creates an input
    checkbox17.type = "checkbox"; // sets the input type as checkbox
    checkbox17.id = "checkbox17"; // gives the checkbox a id
	
    var label17 = document.createElement("label"); // creates a label
    label17.htmlFor =  "checkbox17" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox17); // attaches checkboxes to div
    chkboxDiv.appendChild(label17) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//18
	var checkbox18 = document.createElement("input"); // creates an input
    checkbox18.type = "checkbox"; // sets the input type as checkbox
    checkbox18.id = "checkbox18"; // gives the checkbox a id
	
    var label18 = document.createElement("label"); // creates a label
    label18.htmlFor =  "checkbox18" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox18); // attaches checkboxes to div
    chkboxDiv.appendChild(label18) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//19
	var checkbox19 = document.createElement("input"); // creates an input
    checkbox19.type = "checkbox"; // sets the input type as checkbox
    checkbox19.id = "checkbox19"; // gives the checkbox a id
	
    var label19 = document.createElement("label"); // creates a label
    label19.htmlFor =  "checkbox19" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox19); // attaches checkboxes to div
    chkboxDiv.appendChild(label19) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//20
	var checkbox20 = document.createElement("input"); // creates an input
    checkbox20.type = "checkbox"; // sets the input type as checkbox
    checkbox20.id = "checkbox20"; // gives the checkbox a id
	
    var label20 = document.createElement("label"); // creates a label
    label20.htmlFor =  "checkbox20" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox20); // attaches checkboxes to div
    chkboxDiv.appendChild(label20) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//21
	var checkbox21 = document.createElement("input"); // creates an input
    checkbox21.type = "checkbox"; // sets the input type as checkbox
    checkbox21.id = "checkbox21"; // gives the checkbox a id
	
    var label21 = document.createElement("label"); // creates a label
    label21.htmlFor =  "checkbox21" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox21); // attaches checkboxes to div
    chkboxDiv.appendChild(label21) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//22
	var checkbox22 = document.createElement("input"); // creates an input
    checkbox22.type = "checkbox"; // sets the input type as checkbox
    checkbox22.id = "checkbox22"; // gives the checkbox a id
	
    var label22 = document.createElement("label"); // creates a label
    label22.htmlFor =  "checkbox22" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox22); // attaches checkboxes to div
    chkboxDiv.appendChild(label22) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//23
	var checkbox23 = document.createElement("input"); // creates an input
    checkbox23.type = "checkbox"; // sets the input type as checkbox
    checkbox23.id = "checkbox23"; // gives the checkbox a id
	
    var label23 = document.createElement("label"); // creates a label
    label23.htmlFor =  "checkbox23" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox23); // attaches checkboxes to div
    chkboxDiv.appendChild(label23) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//24
	var checkbox24 = document.createElement("input"); // creates an input
    checkbox24.type = "checkbox"; // sets the input type as checkbox
    checkbox24.id = "checkbox24"; // gives the checkbox a id
	
    var label24 = document.createElement("label"); // creates a label
    label24.htmlFor =  "checkbox24" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox24); // attaches checkboxes to div
    chkboxDiv.appendChild(label24) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//25
	var checkbox25 = document.createElement("input"); // creates an input
    checkbox25.type = "checkbox"; // sets the input type as checkbox
    checkbox25.id = "checkbox25"; // gives the checkbox a id
	
    var label25 = document.createElement("label"); // creates a label
    label25.htmlFor =  "checkbox25" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox25); // attaches checkboxes to div
    chkboxDiv.appendChild(label25) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//26
	var checkbox26 = document.createElement("input"); // creates an input
    checkbox26.type = "checkbox"; // sets the input type as checkbox
    checkbox26.id = "checkbox26"; // gives the checkbox a id
	
    var label26 = document.createElement("label"); // creates a label
    label26.htmlFor =  "checkbox26" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox26); // attaches checkboxes to div
    chkboxDiv.appendChild(label26) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//27
	var checkbox27 = document.createElement("input"); // creates an input
    checkbox27.type = "checkbox"; // sets the input type as checkbox
    checkbox27.id = "checkbox27"; // gives the checkbox a id
	
    var label27 = document.createElement("label"); // creates a label
    label27.htmlFor =  "checkbox27" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox27); // attaches checkboxes to div
    chkboxDiv.appendChild(label27) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//28
	var checkbox28 = document.createElement("input"); // creates an input
    checkbox28.type = "checkbox"; // sets the input type as checkbox
    checkbox28.id = "checkbox28"; // gives the checkbox a id
	
    var label28 = document.createElement("label"); // creates a label
    label28.htmlFor =  "checkbox28" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox28); // attaches checkboxes to div
    chkboxDiv.appendChild(label28) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//29
	var checkbox29 = document.createElement("input"); // creates an input
    checkbox29.type = "checkbox"; // sets the input type as checkbox
    checkbox29.id = "checkbox29"; // gives the checkbox a id
	
    var label29 = document.createElement("label"); // creates a label
    label29.htmlFor =  "checkbox29" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox29); // attaches checkboxes to div
    chkboxDiv.appendChild(label29) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//30
	var checkbox30 = document.createElement("input"); // creates an input
    checkbox30.type = "checkbox"; // sets the input type as checkbox
    checkbox30.id = "checkbox30"; // gives the checkbox a id
	
    var label30 = document.createElement("label"); // creates a label
    label30.htmlFor =  "checkbox30" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox30); // attaches checkboxes to div
    chkboxDiv.appendChild(label30) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item
	
	//31
	var checkbox31 = document.createElement("input"); // creates an input
    checkbox31.type = "checkbox"; // sets the input type as checkbox
    checkbox31.id = "checkbox31"; // gives the checkbox a id
	
    var label31 = document.createElement("label"); // creates a label
    label31.htmlFor =  "checkbox31" ; // gives the label a name 
	
    chkboxDiv.appendChild(checkbox31); // attaches checkboxes to div
    chkboxDiv.appendChild(label31) // attaches the label to the div
    li.appendChild(chkboxDiv); // attaches div to list item

}
