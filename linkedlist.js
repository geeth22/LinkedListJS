const Utility = require('./Utility');
let readlineSync = require('readline-sync');
checkoption = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        let checkoption = readlineSync.question("\nEner your choice:\n1.firstNode\n2.lastNode\n3.exit\n");
        switch (checkoption) {
            case '1':
                let firstPosition = readlineSync.question("Enter the element in first position: ");
                Utility.insertFirst(firstPosition);
                break;
            case '2':
                let lastPosition = readlineSync.question("Enter the element in last position: ");
                Utility.insertLast(lastPosition);
                break;
            case '3':
                isTerminated = false;
                break;
            default: console.log("please enter correct option");
        }
    }
}
checkoption();
