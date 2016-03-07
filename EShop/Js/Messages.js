




function setCookie()
{
    
    document.cookie = "name=" + document.getElementById('UserName').value;
    document.cookie = "email=" + document.getElementById('UserEmail').value;
    document.cookie = "message=" + document.getElementById('UserMessage').value;
}


function getCookie()
{
    if (document.cookie.length != 0)
        {

        var cookiesArray = document.cookie.split("; ");

        for(var i=0;i<cookiesArray.length;i++)
        {
            var nameValueArray = cookiesArray[i].split("=");
            if(nameValueArray[0]=="name")
            {
                document.getElementById("UserName").value = nameValueArray[1];
            } else if(nameValueArray[0] == "email")
            {
                document.getElementById("UserEmail").value = nameValueArray[1];
            } else if (nameValueArray[0] == "message") {
                document.getElementById("UserMessage").value = nameValueArray[1];
            }
        }
    
    
    
    }
    else {
        alert("No cookies");
    }

}


function clearCookie()
{
    document.getElementById("UserName").value = "";
    document.getElementById("UserEmail").value = "";
    document.getElementById("UserMessage").value = "";
}

