
function main() {
    
    console.log("in main function");
    var myForm = document.getElementById("contact-form");
    myForm.addEventListener("submit", validateForm);
  }
  function validateForm(event) {
    var formValid = true;
    var myForm = document.getElementById("contact-form"); 

    if (myForm.name.value == "") {
        formValid = false;
         
        document.getElementById("nameRequiredError").style.display = "block";
        
        event.preventDefault();
    } else {
        
         document.getElementById("nameRequiredError").style.display = "none";
    }
    if (myForm.email.value == "") {
        formValid = false;
      
        document.getElementById("emailRequiredError").style.display = "block";
       
        event.preventDefault();
    } else {
        
         document.getElementById("emailRequiredError").style.display = "none";
    }
    if (myForm.number.value == "") {
        formValid = false;
        
        document.getElementById("numberRequiredError").style.display = "block";
       
        event.preventDefault();
    } else {
        
         document.getElementById("numberRequiredError").style.display = "none";
    }
    if (myForm.comments.value == "") {
        formValid = false;
        
        document.getElementById("commentsRequiredError").style.display = "block";
       
        event.preventDefault();
    } else {
        
         document.getElementById("commentsRequiredError").style.display = "none";
    }
    
    var orderForm = document.getElementById("contact-form")
var role = orderForm.role.value;

console.log(role); 


var form  = document.getElementById("contact-form");
    
for(var i = 0; i < form.hours.length; i++) {
    if (form.hours[i].checked){
       
       console.log("You selected" + form.hours[i].value);  
    }
}
  }
  