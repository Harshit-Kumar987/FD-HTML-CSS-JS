//how to use typeof
let ages=20;
console.log(typeof(ages))
let age_r=12.5;
console.log(typeof(age_r))

//ticket payment by age
let age=48;
if(age<12){
    console.log("pay $5")
}
if(age>12 && age<18 ){
    console.log("pay $10")
}
else if(age>18 && age<60){
    console.log("pay $20")
}
else if(age>60){
    console.log("pay $15")
}
//login password
let user_id="admin";
let paswd= "0000";
let mob= 123456789;
if (user_id== "admin" || mob==123456789){
    if(paswd=="0000"){
        console.log("welcome");
    }
    else{
        console.log("worng password");
    }
}
else{
    console.log("wrond id or mon no.")
}