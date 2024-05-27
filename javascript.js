var  pp=document.getElementById("ps");
var but=document.getElementById("but");
var x=0;
var l;
function store()
{
    l=pp.value;
    console.log(but);
}
function mover()
{
   if(l!=1234)
    {
        if(x==0 || x==100)
            {
                but.setAttribute("class","submit1");
                x=200;
            }
            else{
                // but.style.right="-200px";;
                but.setAttribute("class","submit2");
                x=100;
            }
    }
    else{
        but.style.left="0px";
        x=0;
    }
  
}
function normal()
{
    but.setAttribute("class","submit");
}