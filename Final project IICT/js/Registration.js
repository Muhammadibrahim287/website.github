function registration()
{
	var name=document.form1.fname.value;
	var email=document.form1.email.value;
	var age=document.form1.age.value;
	
	var npattern="[A-Za-z/s]{2,10}";
	var epattern="[0-9a-zA-Z_&$.-]{1,20}[@]{1}[a-z]{4,7}[.]{1}[com]{3}";
	
	if(!name.match(npattern))
	{
		alert("Enter Valid Name");
	}
	else if (!email.match(epattern))
	{
		alert("Enter Valid Email");
	}
	else if (age < 18)
	{
		alert("You're Underage");
	}
	else
	{
		alert("Successfuly Submitted");
	}
}