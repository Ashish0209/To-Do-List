var c=0;
function ins(){
    let x= prompt("Enter a Task")
    document.getElementById('D').innerHTML+="<li class=note><div class=details><div class=add-block><div class=txt>"+x+"</div><div class =icon><button type=button class=btn onclick=add("+c+") >+</button></div></div><div class=line></div><div id=in"+c+"></div></div></li>"
    c++;
}
var cnt=0;
function add(x){   //x == c
    let y="in"+x;
    let a = prompt("Enter lol")
    document.getElementById(y).innerHTML+="<input type=checkbox id=ch"+cnt+" onclick=tick("+cnt+")>&nbsp;&nbsp; <label id=la"+cnt+">"+a+"</label> <br>";
    cnt++;
}

function tick(p){   //cnt==pa
    let x = "ch"+p;
    let y = "la"+p;
    let z=document.getElementById(x);

    if(z.checked == true){    // agr checked hai toh
        document.getElementById(y).setAttribute("style","text-decoration:line-through; opacity:0.5;");
    }else{
        document.getElementById(y).setAttribute("style","text-decoration:none; opacity:1;");
    }
}
