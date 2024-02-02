//scope{
// 1. global scope
// 2. local scope
// 3. block scope
// }
//var = 3000


let a = 3000
if(true){
     let a=10;
    const b=20;
    //console.log("INNER:",a,b);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username="shruti";

    function two(){
        const website="google.com";
        //console.log(username);
}
//console.log(website);

two();
}
//one();

if(true){
    const username="shruti";
    if(username==="shruti"){
        const website="google.com";
       // console.log(username+" "+website);
    }
    //console.log(website);
}

//console.log(username);

//+++++++++++++++++++++++++++intresting++++++++++++++++++++

 function addone(num){
    return num+1
 }

  console.log(addone(10));

 const addtwo=function(num){
        return num+2
    }
    addone(10);
     
     