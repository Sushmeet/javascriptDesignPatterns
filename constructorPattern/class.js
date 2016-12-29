/**
 * Created by sushi on 28/12/16.
 */

'use strict';

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    };

    completeStatus2() {
        console.log("Completing task using prototype " + this.name);
        this.completed = true;
    };

    save2() {
        console.log('saving task using prototype ' + this.name);
    };
}

module.exports = Task;