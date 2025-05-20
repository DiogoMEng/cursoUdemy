function countDow(fromNumber) {
        
    setTimeout(() => {console.log(fromNumber);
            
        let nextNumber = fromNumber + fromNumber;
        
        if(nextNumber < 50) {
        
            countDow(nextNumber);
        
        }
        
    }, 2000)

}

countDow(3);