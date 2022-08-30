//username session       
function verifyuser(){
    var user=document.getElementById("username").value;
    var msg=document.getElementById("name-err");
    msg.style.color="red";
    
    if(user.length<3){
        msg.innerHTML="User name must be 3 to 25 chars";
    }else{
        msg.innerHTML="";
    }
   }
//password session
   function verifypassword(){
   var password= document.getElementById("password").value;
    var msg=document.getElementById("password-err");
    var regExp=/(?=.*[A-Z])\w{4,10}/;
    if(password.match(regExp)){
        msg.innerHTML="";
    }else 
    msg.innerHTML="password must one Uppercase & min 4-10 chars"
        msg.style.color='red';
    }
//email session

function verifyemail(){
   var email= document.getElementById("email").value;
    var error=document.getElementById("email-err");
    if(email.endsWith('gmail.com')){
        error.innerHTML="";
    }else{
        error.innerHTML="Please enter valid '@gmail.com' id";
        error.style.color='red';
    }
    }

 //mobile session
 function verifymobile(){
   var mobile= document.getElementById("mobile");
    var error=document.getElementById("mobile-err");
   
    if(mobile.value.match('[0-9]{10}') && mobile.value.length<11){
        error.innerHTML="";
    }else{
        error.innerHTML='Please enter 10 digits mobile no only';
        error.style.color='red';
    }
    }   
 // submit session
 function submitclick(){
        var user=document.getElementById("username").value;
        var password= document.getElementById("password").value;
        var email= document.getElementById("email").value;
        var mobile= document.getElementById("mobile").value;
        
        if(user=="" || password=="" || email=="" || mobile==""){
            alert("Please fill all the fields are mandatory!..");
        }else{
         document.write(`
            { <br>"UserName":"${user}", <br>
            "Password":"${password}", <br>
            "Email":"${email}", <br>
            "Mobile":${mobile} <br>} 
            `);
        }
        
    }   