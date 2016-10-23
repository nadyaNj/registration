function formValidation()
{
    var username = document.getElementById(username);
    var firstPassword =  document.getElementById(firstPassword);
    var secondPassword =  document.getElementById(secondPassword);

    var firstName = document.getElementById(firstName);
    var secondName = document.getElementById(secondName);
    var lastName = document.getElementById(lastName);

    var email = document.getElementById(email);


{
    if(passwordValidation(firstPassword,7,12))
    {
        if(allLetter(uname))
        {
            if(alphanumeric(firstName))
            {
                if(countryselect(ucountry))
                {
                    if(allnumeric(uzip))
                    {
                        if(ValidateEmail(email))
                        {
                            if(validsex(umsex,ufsex))
                            {
                            }
                        }
                    }
                }
            }
        }
    }
}
    return false;

}
function userid_validation(uid,mx,my)
{
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx)
    {
        alert("User Id should not be empty / length be between "+mx+" to "+my);
        uid.focus();
        return false;
    }
    return true;
}

function confirmPassword(password1, password2) {
    if(password1!==password2) {
        alert("passwords doesn't match")
        password1.value("");
        password2.value("");
    }
}

function passwordValidation(password,min,max)
{
    var passwordLength = password.value.length;
    if (passwordLength == 0 ||passwordLength >= max || passwordLength < min)
    {
        alert("Password should not be empty / length be between "+min+" to "+max);
        password.focus();
        return false;
    }
    return true;
}
function allLetter(uname)
{
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}
function alphanumeric(uadd)
{
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
function countryselect(ucountry)
{
    if(ucountry.value == "Default")
    {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function allnumeric(uzip)
{
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}
function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
} function validsex(umsex,ufsex)
{
    x=0;

    if(umsex.checked)
    {
        x++;
    } if(ufsex.checked)
{
    x++;
}
    if(x==0)
    {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else
    {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}