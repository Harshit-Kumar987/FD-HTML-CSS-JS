//while
//syntax
//while(condition){
//code
//}
let i =1;
while(i<=10){
    console.log(i);
    i++;
}
//table
let j =1;
while(j<=10){
    console.log(j*7);
    j++;
}
/* synatax for 'for' loop
for for(initialiaztion;condition;update){
code
}
*/
for(let a=1; a<=10;a++){
    console.log(a*9)
}
//loop with conditional satamen
// find sum of all even no. between 1 to 100

let sum=0;
for(let q=1; q<=100;q++){
    if(q%2 == 0){
        sum+=q
    }
}
console.log(sum);



