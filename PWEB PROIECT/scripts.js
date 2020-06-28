function is_everything_right(email,username,password,fname,lname,birth) 
{	
	
	document.getElementById("birthDate").style.background= "white";
	document.getElementById("password").style.background= "white";
	document.getElementById("user").style.background= "white";
	if(((is_email_right(email))
		&(is_username_right(username))
		&(is_password_right(password,username))
		&(is_fname_right(fname))
		&(is_lname_right(lname))
		&(is_birth_right(birth))
		&(cBox()))==true)

	{
		console.log("E bine")
		document.getElementById("myForm").submit();
		
	}

	else
		console.log("Nu e bine")


	if(!is_email_right(email)){document.getElementById("email").style.background = "red";}
	if(!is_username_right(username)){document.getElementById("user").style.background = "red";}
	if(!is_password_right(password,username)){document.getElementById("password").style.background= "red";}
	if(!is_fname_right(fname)){document.getElementById("firstName").style.background = "red";}
	if(!is_lname_right(lname)){document.getElementById("lastName").style.background = "red";}
	if(!is_birth_right(birth)){document.getElementById("birthDate").style.background= "red";}

	


}
function is_fname_right(fname)
{
	document.getElementById("fnameRes").innerHTML=""
	if(fname==="")
		{
			document.getElementById("fnameRes").innerHTML="Please introduce your first name<br>"
			return false
		}
	else{return true}

}
function is_lname_right(lname)
{
	document.getElementById("lnameRes").innerHTML=""
	if(lname==="")
		{
			document.getElementById("lnameRes").innerHTML="Please introduce your last name<br>"
			return false
		}
	else{return true}

}
function is_birth_right(birth)
{
	document.getElementById("birthRes").innerHTML=""
	if(birth=="")
		{
			document.getElementById("birthRes").innerHTML="Please introduce your birthdate<br>"
			return false
		}
	else{return true}

}
function is_email_right(email) 
{	bool=true
	string="";
 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  	{
    	
  	}
  else{
  	string=string.concat("This email is invalid<br>")
  	bool=false
  	
  }
  
    document.getElementById("emailRes").innerHTML=string
    return bool
    
}


function is_username_right(username) 
{	
	bool=true;
	string="";
	alphanum=0;
	document.getElementById("userRes").innerHTML=string



	if(username==="")
		{
			string=string.concat("You didn't introduced an username<br>");
			bool=false
			
		}
	if(username.length<5)
		{	
			string=string.concat("Username must be at least 5 characters long<br>");
			bool=false
			
		}
	if(username.length>=5)
		{	var letters = /^[0-9a-zA-Z]+$/;
			for(var i=0;i<username.length;i++)
			{
				
				if(username.charAt(i).match(letters))
					{
						alphanum+=1;
					}
			}

		}
	if((username.charAt(0)===".")|(username.charAt(0)==="_"))
		{
			string=string.concat("Your name can't start with '.' or '_'<br>");
			bool=false
			
		}
	
	if(alphanum<5)
		{
			string=string.concat("You must have at least 5 aphanumeric chars");
			bool=false;

		}

    document.getElementById("userRes").innerHTML=string
    return bool




}

function is_password_right(password,username)
{
	bool=true
	string="";
	document.getElementById("passRes").innerHTML=string
	if(password==="")
		{
			string=string.concat("You didn't introduced a password<br>")
			bool=false
			
		}
	else if(password.length<8)
		{
			string=string.concat("Password must be at least 8 characters long<br>")
			bool=false
		}
	else if(password===username)
		{
			string=string.concat("Password and username can't be the same<br>")
			bool=false
		}
	else if(!(/\d/.test(password)))
		{
			string=string.concat("Password must contain at least a number")
			bool=false
		}
	
	document.getElementById("passRes").innerHTML=string
	return bool}

function cBox() {
  
  var checkBox = document.getElementById("myCheck");
  var x = false

  if(checkBox.checked==true)
  	{
  		document.getElementById('cboxlable').innerHTML="all right"
		x=true
	}
  else
  	{
  		document.getElementById('cboxlable').innerHTML="Please check the box"
  	}

  	return x
}
