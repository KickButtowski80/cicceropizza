function myFunction(elt) {
   var txt=" ";
   var menItems = document.forms.namedItem(findingParent(elt));
    
    var i;
    for (i = 0; i < menItems.length; i++) {
        if (menItems[i].checked) {
            txt +=  menItems[i].value + "<br>";
             
        }
    }
   document.getElementById("order").innerHTML =  txt;
}


function findingParent(obj) {
  var o = obj;
  while(!o.id) {
    o = o.parentNode;
  }
  return o.id;
}



