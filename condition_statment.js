let no =-7;
// check no is +ve or-ve?
if(no>0){
    console.log("no is positive");
}
else{
    console.log("no is -ve");
}
//GRADING SYSTEM (MULTIPLE CONDITION) ELSE IF
let marks= 46;
if (marks>=75){
    console.log("Grade A");
}
if (marks>=60 && marks<75){
    console.log("Grade B");
}
if (marks>=50 && marks<60){
    console.log("Grade C");
}
if (marks>=40 && marks<50){
    console.log("Grade D");
}
else{
    console.log("fail");
}

// nested condition 
// check a no is + or - , if no is + then check no is even or odd.
let n=15;
if(n>0){
    if(n%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
else{
    console.log(" no is odd");
}