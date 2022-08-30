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
        var user=document.getElementById("username");
        var password= document.getElementById("password");
        var email= document.getElementById("email");
        var mobile= document.getElementById("mobile");
        localStorage.setItem('user',user.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('mobile',mobile.value);
        
        if(user.value=="" || password.value=="" || email.value=="" || mobile.value==""){
            alert("Please fill all the fields are mandatory!..");
        }else{
         document.write(`
            { <br>"UserName":"${user.value}", <br>
            "Password":"${password.value}", <br>
            "Email":"${email.value}", <br>
            "Mobile":${mobile.value} <br>} 
            `);
        }
        
    }   

    //index page code

    function homeclick(){
        document.getElementById("services").style.backgroundColor="";
        document.getElementById("contact").style.backgroundColor="";
        document.getElementById("about").style.backgroundColor="";
        document.getElementById("signup").style.backgroundColor="";
        var home=document.getElementById("home").style.backgroundColor="yellow";
        var back=document.getElementById("backframe").style.background="";
        home.style.color='red';
    }
    function aboutclick(){
        document.getElementById("home").style.backgroundColor="";
        document.getElementById("services").style.backgroundColor="";
        document.getElementById("contact").style.backgroundColor="";
        document.getElementById("signup").style.backgroundColor="";
        var home=document.getElementById("about").style.backgroundColor="yellow";
        home.style.color='red';
    }
    function contactclick(){
        document.getElementById("about").style.backgroundColor="";
        document.getElementById("home").style.backgroundColor="";
        document.getElementById("services").style.backgroundColor="";
        document.getElementById("signup").style.backgroundColor="";
        var home=document.getElementById("contact").style.backgroundColor="yellow";
        home.style.color='red';
    }
    function servicesclick(){
        document.getElementById("contact").style.backgroundColor="";
        document.getElementById("about").style.backgroundColor="";
        document.getElementById("home").style.backgroundColor="";
        document.getElementById("signup").style.backgroundColor="";
        var home=document.getElementById("services").style.backgroundColor="yellow";
        home.style.color='red';
    }
    function signupclick(){
        document.getElementById("contact").style.backgroundColor="";
        document.getElementById("about").style.backgroundColor="";
        document.getElementById("home").style.backgroundColor="";
        document.getElementById("services").style.backgroundColor="";
        var home=document.getElementById("signup").style.backgroundColor="yellow";
        home.style.color='red';
    }

    