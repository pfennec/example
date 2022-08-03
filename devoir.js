// exercice 1

let a = 10;
let b = 20;
let c = 30;
if (a>b && b<c){
    console.log("le maximum est a") ;
}
else
{ if (b>c && c<a){
    console.log("le maximun est b");
}
   else {
    if (c>a && a<b){
        console.log ("le max est c");
    }
   } 
    
}

//exercice 2

let b = true;
let result = b && (1/0);
console.log(Infinity); //car on ne peut diviser un nombre par zero,

let b = false;
let result = b && (1/0);
console.log(false);  //la condition '&&' est vrai si les valeurs sont vraies,

//exercice 3  equation du second degre

// let a=10;
// let b=8;
// let c=1;
// if (D>0)
let a = prompt("donner la valeur de a");
let b = prompt("donner la valeur de b");
let c = prompt("donner la valeur de c");

let D= b*b-4(a*c);
if (D>0){
    let z= math.sqrt(D);
    let x1= (b-z)/2;
    let x2= (b+z)/2;
    console.log()
}


//exercice 4   
let i=0;
while (i<50)
{
    console.log ("Hello hogi", +i++);
}


