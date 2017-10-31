            function openContent(evt, accordionList)
{
    var i, btnInfo, btnInfo;
    btnInfo = document.getElementsByClassName("btnInfo");
            
    for (i = 0; i < btnInfo.length; i++)
    {
        btnInfo[i].style.display = "none";
    }
        
    btnInfo = document.getElementsByClassName("btnInfo");
            
    for (i = 0; i < btnInfo.length; i++)
    {
        btnInfo[i].className = btnInfo[i].className.replace(" active", "");
    }
        
    document.getElementById(accordionList).style.display = "block";
    evt.currentTarget.className += " active";
}
            
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
