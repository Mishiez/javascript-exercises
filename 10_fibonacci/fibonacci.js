const fibonacci = function(num) {
    if(num==0){
        return 0;
    }
    else if(num<0){
        return "OOPS";
    }
    else{
        let sequence=[1,1];
        for(let i=2;i<=num;i++){
            sequence[i]=sequence[i-2]+sequence[i-1];
        }
        return sequence[num-1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
