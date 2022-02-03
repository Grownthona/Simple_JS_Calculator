var count = 0;
var firstnum = 0;
var secondnum = 0;
var f = 0;
var operation;
var add =  document.getElementById('plus');
var sub =  document.getElementById('minus');
var multiply = document.getElementById('mul');
var division = document.getElementById('divv');
var result = document.getElementById('equal');
var dis =  document.getElementById('display');
var pastdisplay = document.getElementById('pastnum');
var pow = document.getElementById('power');
var per = document.getElementById('percent');



pow.onclick =function(){
 dis.innerHTML = dis.innerHTML.slice(0, -1)
}

add.onclick = function()
{
  count++;
  if(count%2!=0)
  {
      firstnum = dis.innerHTML;
      operation = "add";
      pastdisplay.innerHTML=firstnum+" + ";
  }
  dis.innerHTML="";
}
per.onclick = function()
{
 
      firstnum = dis.innerHTML;
      operation = "percentage";
      pastdisplay.innerHTML=" % ";
      dis.innerHTML = parseFloat(dis.innerHTML)/100;

}
sub.onclick = function()
{
  count++;
  if(count%2!=0)
  {
      firstnum = dis.innerHTML;
      pastdisplay.innerHTML=firstnum+" - ";
      operation = "sub";
  }
  dis.innerHTML="";
}
multiply.onclick = function()
{
  count++;
  if(count%2!=0)
  {
      firstnum = dis.innerHTML;
      pastdisplay.innerHTML=firstnum+" * ";
      operation = "mul";
  }
  dis.innerHTML="";
}
division.onclick = function()
{
  count++;
  if(count%2!=0)
  {
      firstnum = dis.innerHTML;
      pastdisplay.innerHTML=firstnum+" / ";
      operation = "divide";
  }
  dis.innerHTML="";
}
result.onclick = function()
{
    count++;
    if(count%2==0)
    {
      secondnum = dis.innerHTML;
      pastdisplay.innerHTML+=secondnum+" = ";
    }

    if(operation=='add')
    {       
     dis.innerHTML= parseFloat(firstnum)+parseFloat(secondnum);
    }
    else if(operation=='sub')
    {
     dis.innerHTML= parseFloat(firstnum)-parseFloat(secondnum);
    }
    else if(operation=='mul')
    {
     dis.innerHTML= parseFloat(firstnum)*parseFloat(secondnum); 
    }
    else if(operation=='divide')
    {
     dis.innerHTML= parseFloat(firstnum)/parseFloat(secondnum);   
    }
}