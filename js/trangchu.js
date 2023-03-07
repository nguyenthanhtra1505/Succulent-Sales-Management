var a=0;
function slides(n)
{ var sl=document.getElementsByClassName("slide");
var dt = document.getElementsByClassName("dot");
if(n==sl.length)
{
    a=0;
}
if(n<0)
{
    a=sl.length-1;
}
for(var i=0;i<sl.length;i++)
{
    sl[i].style.display = "none"; 
}
for(var i=0;i<dt.length;i++)
{
    dt[i].className = dt[i].className.replace(" active",""); 
}
    sl[a].style.display="block";
    dt[a].className+=" active";
}
function next(){
    a= a+1;
    slides(a);
}
function prev(){
 a=a-1;
    slides(a);
}

