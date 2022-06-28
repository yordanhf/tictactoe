 pox = new Array(9);
 for (x=0;x<9;x++)
 {
  pox[x] = x;
 }

function ganar()
{
    if ((pox[0]==pox[1] && pox[1]==pox[2]) 
     || (pox[0]==pox[3] && pox[3]==pox[6]) )
        
    {        
        if (i=="X") alert("GANASTE: Jugador 1");
        else alert("GANASTE: Jugador 2");
        location.reload();
    }
}


var i = "O";

function pepe(n)
{
   var pp = "pos"+n;
   var nodo = document.getElementById(pp);
   if (i == "O") i="X";
    else i="O";
   var tx = document.createTextNode(i);
   pox[n-1] = i; 
   nodo.append(tx);
   nodo.onclick="";
   nodo.id = "posx";
   ganar();
}


                                
                                
                                                           
                        
                    
                    
                       
    