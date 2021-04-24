const show = (name) => {
    if(name.length>5){
        console.log("This is your name:",name);
        return true
    } else{
        console.log("Your name is to less")
        return false
    } 
};




module.exports = { show }



