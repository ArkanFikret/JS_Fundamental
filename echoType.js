function echoType(parametar){
    console.log(typeof parametar);
    if(typeof(parametar) === "number" || typeof(parametar) === "string"){
        console.log(parametar);
    }else{
        console.log('Parameter is not suitable for printing')
    }
}

echoType(1)