const sumAll = function(firstNum,secondNum) {
    let total=0;
    
    if(firstNum>secondNum){
        let temp;
        temp=firstNum;
        firstNum=secondNum;
        secondNum=temp;
    }

    if(typeof(firstNum)==="object"||typeof(secondNum)==="object"){
        return "ERROR";
    }
    else{
        for(let i=firstNum;i<=secondNum;i++){
        if (typeof(firstNum)!=="number"||typeof(secondNum)!=="number"){
            return "ERROR";
            break;
        }
        else if(firstNum<0||secondNum<0){
            return "ERROR";
            break;
        }
        
        total+=i;
    }
    return total;
}

};

// Do not edit below this line
module.exports = sumAll;

