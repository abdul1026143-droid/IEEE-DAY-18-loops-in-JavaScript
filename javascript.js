console.log("-------///--numbers from 1 to 100 using loop--///----");
for (let i = 1; i <=100;  i++){
    console.log(i);
}



console.log("-----///--even numbers from 1 to 100--///----");
for (let i =1; i <=100; i++){
    if(i %2==0){
        console.log(i);
    }
}


console.log("-----///--odd numbers from 1 to 100--///----");
for (let i =1; i <=100; i++){
    if(i %2!==0){
        console.log(i);
    }
}


console.log("-----///--printing numbers from 20 to 1 down--///----");
for (let i =20; i >=1; i--){
    
        console.log(i);
    
}



console.log("-----///--Multiplication table--///----");
let tablenumber = 9;
for( let i=1; i<=10; i++){
    console.log(tablenumber + "x"+  i + "=" +(tablenumber*i));
}


console.log("-----///--Sum calculator--///----");
let sum=0;
let number=15;
for( let i=1; i<=number; i++){
    sum=sum+i;   
}
console.log(sum);



console.log("-----///--fizzbuzz--///------");
for( let i=1; i<=50; i++){
       if(i%3==0 && i%5==0){
        console.log("FIZZBUZZ");
    }
    
    
     else if(i%3==0){
        console.log("FIZZ");
    }
   
    else if(i%5==0){
         console.log("BUZZ");

    }
    else{
        console.log(i);
    }
}

console.log("------//---break---//-------");
for( let i =1; i<=10; i++){  
   if (i===7){
    break;  //this will stop the loop when i is 5
   }
   console.log(i);

}


console.log("------//---continue---//-------");
for( let i =1; i<=10; i++){
   if (i===7){
    continue;  //this will skip that iteration when i is 7
   }
   console.log(i);

}


