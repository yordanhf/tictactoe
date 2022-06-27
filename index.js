

var i = "O";
 pox = new Array(9);
 for (x=0;x<9;x++){
pox[x] = x;
 }

function ganar(){
    if (pox[0]==pox[1] && pox[1]==pox[2])
        
    {
        
        if (i=="X") alert("GANASTE: Jugador 1");
        else alert("GANASTE: Jugador 2");
        reload();
    }

    if (pox[0]==pox[3] && pox[3]==pox[6])
    {
        if (i=="X") alert("GANASTE: Jugador 1");
        else alert("GANASTE: Jugador 2");
        reload();
    }
    if (pox[0]==pox[4] && pox[4]==pox[8])
    {
        if (i=="X") alert("GANASTE: Jugador 1");
        else alert("GANASTE: Jugador 2");
        reload();
    }


}


function pepe(n){
   
var nodo = document.getElementById("pos1");
if (i == "O") 
i="X"; else i="O";
var tx = document.createTextNode(i);
pox[0] = i; 
nodo.append(tx);
nodo.onclick="";
nodo.id = "posx";
ganar();
}

function pepe2(){    
    var nodo = document.getElementById("pos2");
    if (i == "O") 
    i="X"; else i="O";
    var tx = document.createTextNode(i);
    pox[1] = i; 
    nodo.append(tx);
    nodo.onclick="";
nodo.id = "posx";
ganar();
    }
    
    function pepe3(){          
        var nodo = document.getElementById("pos3");
        if (i == "O") 
        i="X"; else i="O";
        var tx = document.createTextNode(i);
        pox[2] = i;
        nodo.append(tx);
        nodo.onclick="";
nodo.id = "posx";
ganar();
        }
        
    function pepe4(){
            var nodo = document.getElementById("pos4");
            if (i == "O") 
            i="X"; else i="O";
            var tx = document.createTextNode(i);
            pox[3] = i;
            nodo.append(tx);
            nodo.onclick="";
nodo.id = "posx";
ganar();
            }
            
            function pepe5(){
                var nodo = document.getElementById("pos5");
                if (i == "O") 
                i="X"; else i="O";
                var tx = document.createTextNode(i);
                pox[4] = i;
                nodo.append(tx);
                nodo.onclick="";
nodo.id = "posx";
ganar();
                }
                
                function pepe6(){
                    var nodo = document.getElementById("pos6");
                    if (i == "O") 
                    i="X"; else i="O";
                    var tx = document.createTextNode(i);
                    pox[5] = i;
                    nodo.append(tx);
                    nodo.onclick="";
nodo.id = "posx";
ganar();
                    }
                    function pepe7(){
                        var nodo = document.getElementById("pos7");
                        if (i == "O") 
                        i="X"; else i="O";
                        var tx = document.createTextNode(i);
                        pox[6] = i;
                        nodo.append(tx);
                        nodo.onclick="";
nodo.id = "posx";
ganar();
                        }
                        
                        function pepe8(){
                            var nodo = document.getElementById("pos8");
                            if (i == "O") 
                            i="X"; else i="O";
                            var tx = document.createTextNode(i);
                            pox[7] = i;
                            nodo.append(tx);
                            nodo.onclick="";
nodo.id = "posx";
ganar();
                            }
                            
                            function pepe9(){
                                var nodo = document.getElementById("pos9");
                                if (i == "O") 
                                i="X"; else i="O";
                                var tx = document.createTextNode(i);
                                pox[8] = i;
                                nodo.append(tx);
                                nodo.onclick="";
nodo.id = "posx";
ganar();
                                }
                                
                                                           
                        
                    
                    
                       
    