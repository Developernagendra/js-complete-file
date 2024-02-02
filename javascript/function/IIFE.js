// immediately invoked function expression(IIFE)

(function chai(){
    //Named IIFE
    console.log('hello');
})();

//unnamed  IIFE
( (name)=> {
    console.log(`hello ${name}`);
}
)('chai');

