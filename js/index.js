// creating a function to add a mask to input
  
  document.getElementById("CPF").addEventListener("input", function() {
    var i = document.getElementById("CPF").value.length;
    var str = document.getElementById("CPF").value
    if (isNaN(Number(str.charAt(i-1)))) {
      document.getElementById("CPF").value = str.substr(0, i-1)
    }
  });
  document.addEventListener('keydown', function(event) { 
    if(event.keyCode != 46 && event.keyCode != 8){
    var i = document.getElementById("CPF").value.length;
    if (i === 3 || i === 7)
    document.getElementById("CPF").value = document.getElementById("CPF").value + ".";
    else if (i === 11) 
      document.getElementById("CPF").value = document.getElementById("CPF").value + "-";
    }
  });

  // creating a function to not let the form reload the page
    var form = document.getElementById("form") 
    form.addEventListener('submit',function(event) {
      event.preventDefault();
      form.reset();
    })