$(function()
{
    $("index.html").onload(function()
    {
        $("#others").hide();
    })
})

function normalColor(x)
{
    x.style.color = "white";
}

function changedColor(x)
{
    x.style.color = "silver";
}

function pageInfo(evt, accordionList)
{
    var i, btnInfo;
    btnInfo = document.getElementsByClassName("btnInfo");
    
    for (i = 0; i < btnInfo.length; i++)
    {
        btnInfo[i].style.display = "none";
    }

    btnInfo = document.getElementsByClassName("btnInfo");
    
    for (i = 0; i < btnInfo.length; i++)
    {
        btnInfo[i].className = btnInfo[i].className.replace("active", "");
    }

    document.getElementById(accordionList).style.display = "block";
    evt.currentTarget.className += "active";
}
    
// On default, get the element with id="defaultOpen", else get element clicked
document.getElementById("defaultOpen").click();

var info = function(info) {
    $('#content').html(`
        <iframe src="${info}"></iframe>
    `)
}
