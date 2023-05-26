function demo(arr){
    let buff ="";
    for(let i = arr.length - 1 ; i >= 0 ; i--){
       buff += arr[i] + " ";
    }
    console.log(buff);
}

demo(["äbc","def", "hig" , "klm" , "nop"]);