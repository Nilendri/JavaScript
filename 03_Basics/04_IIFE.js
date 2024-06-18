//IIFE used to reduce the problem of global scope polution
(function chai(){
    console.log("Database");
})();
// chai()
(()=>{
    console.log("Database2");
})()