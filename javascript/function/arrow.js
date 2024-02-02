const user={
    username:'shruti',
    price:100,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to the course`);
        console.log(this);
    }
     
}
// user.welcomeMessage();
// username='Nagendra';
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     let username='shruti';
//     console.log(this.username);
// }
// chai();


const chai= ()=>{
    let username='shruti';
    console.log(this);
}
//chai();

// Arrow function

// const addone=(num1, num2)=>{
//     return num1+num2;
// }

const addtwo=(num1, num2)=>num1+num2;


//console.log(addone(10,20));
console.log(addtwo(10,20));
