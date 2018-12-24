
(function () {
    var ANALYZE_1 = "What are the time (Big O notation) and space complexity of your solution?";
    var ANALYZE_2 = "What are the limitations of your solution?";
    var ANALYZE_3 = "Why have you decided to implement it on that way?";
    var POSSIBLE_IMPROVEMENTS = "What do you think we could do to get a better implementation?";
    var SEND_CHALLENGE = "Send me your challengeIrix.js file to luis.sanchez@irixapp.com."
    var SOLVE_CHALLENGE = "Implement the logic of the addNumber and getFirstNonDuplicated functions, do not limit yourself, if you need to create variables just do it. Good Luck”

    var arrayNumber = [];
    
    main();

    
    function addNumber(number) {
        console.info("This function adds a number to the 'sequence'");
        arrayNumber.push(number)
    }

    function getFirstNonDuplicated() {
        
        console.info("This function return the first non duplicated number of the 'sequence'");
        var uniq = [];
        for (let i = 0; i < arrayNumber.length; i++) {
            for (let j = 0; j < arrayNumber.length; j++) {
                if (arrayNumber[i] == arrayNumber[j] && i != j) break;
                else if (j == arrayNumber.length - 1) uniq.push(arrayNumber[i])
            }
        }
    
        return console.log(uniq[0]);
    }
    

    function steps() {
        console.info(SOLVE_CHALLENGE);
        console.info(ANALYZE_1);
        console.info(ANALYZE_2);
        console.info(ANALYZE_3);
        console.info(POSSIBLE_IMPROVEMENTS);
        console.info(SEND_CHALLENGE);
    }

    function main() {
        steps();
        
        console.info("This is an example of a possible solution");
        addNumber(5);
        addNumber(3);
        addNumber(5);
        addNumber(6);
        getFirstNonDuplicated(); console.log("Previous operation returns 3");
        addNumber(3);
        getFirstNonDuplicated(); console.log("Previous operation returns 6");
        
    }
}());
