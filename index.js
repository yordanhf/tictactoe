 pox = new Array(9);
 for (x=0;x<9;x++)
 {
  pox[x] = x;
 }

function ganar()
{
    var j1 = document.getElementById("j1");
    var j2 = document.getElementById("j2");

    if ((pox[0]==pox[1] && pox[1]==pox[2]) 
     || (pox[3]==pox[4] && pox[4]==pox[5])
     || (pox[6]==pox[7] && pox[7]==pox[8])     
     || (pox[0]==pox[3] && pox[3]==pox[6])
     || (pox[1]==pox[4] && pox[4]==pox[7])
     || (pox[2]==pox[5] && pox[5]==pox[8])
     || (pox[0]==pox[4] && pox[4]==pox[8])
     || (pox[2]==pox[4] && pox[4]==pox[6]) )
        
    {        
        if (i=="X") confirm("GANASTE: "+j1.value);
        else confirm("GANASTE: "+j2.value);
        location.reload();
    }
}


var i = "O";

function func(n)
{
   var p = "pos"+n;
   var nodo = document.getElementById(p);
   if (i == "O") i="X";
    else i="O";
   var x = document.createTextNode(i);
   pox[n-1] = i; 
   nodo.append(x);
   nodo.onclick="";
   nodo.id = "posx";
   ganar();
}


                                
                                
                                                           
                        
                    
                    
                       
    