// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function(arrOfNums) {
    return arrOfNums.filter((elem) => {
        let elemToCheck = elem;
        let sum = 0;
        let lengthOfNumToCheck = elemToCheck.toString().length;

        while(elemToCheck > 0){
           let eachDigit = elemToCheck % 10;
           sum += eachDigit ** lengthOfNumToCheck
           elemToCheck = Math.floor(elemToCheck/10)
        }
      return elem === sum
    })
};
