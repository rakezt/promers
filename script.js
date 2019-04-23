function validateform(){
	var p=document.forms["myform"];
	if(p.name.value==null||p.name.value==""){
		alert("Name is mandatory")
		return false;
		}
	else if(p.age.value==null||p.age.value==""){
		alert("Age is mandatory")
		return false;
		}
	else if(p.emailaddress.value==null||p.emailaddress.value==""){
		alert("Email is mandatory")
		return false;
		}
	else if(p.pass.value.length<5){
		alert("Password should be more than 5 character")
		return false;
		}

	else if(p.mobile.value==null||p.mobile.value==""){
		alert("Mobile number is mandatory")
		return false;
		}

	var radio1=document.getElementById("male").checked;
	var radio2=document.getElementById("female").checked;
	var radio3=document.getElementById("other").checked;
	var radio4=document.getElementById("pubg").checked;
	var radio5=document.getElementById("vg").checked;
	if((radio1=="") && (radio2=="") && (radio3=="")){
		alert("Select one of the Gender");
		return false
	}
	if((radio4=="") && (radio5=="")){
		alert("Choose any of the game");
		return false
	}
}
document.getElementById("myButton").onclick = function () {
        location.href = complete.html;
    };