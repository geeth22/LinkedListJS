const Utility = require('./Utility');
let readlineSync = require('readline-sync');
checkoption = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        let checkoption = readlineSync.question("\nEner your choice:\n1.firstNode\n2.lastNode\n3.insert at index\n4.print\n5.exit\n");
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
		let insertElement = readlineSync.question("Enter the element: ");
                let index = readlineSync.question("Enter the index: ");
                Utility.insertAt(insertElement, index );
                break;
	    case '4':
                Utility.printListData();
                break;
            case '5':
                isTerminated = false;
                break;
            default: console.log("please enter correct option");
        }
    }
}
checkoption();
