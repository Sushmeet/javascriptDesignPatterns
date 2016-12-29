'use strict';


/*Inefficient implementation apparently because every
 task object created will have its own copy of completeStatus method.
 var Task = function (name) {
 this.name = name;
 this.completed = false;

 this.completeStatus = function () {
 console.log('Completing task ' + this.name);
 this.completed = true;
 };

 this.save = function () {
 console.log('saving task ' + this.name);
 }
 };

 */


var Task = function (name) {
    this.name = name;
    this.completed = false;
};

// prototypes work this way
Task.prototype.completeStatus2 = function () {
    console.log("Completing task using prototype " + this.name);
    this.completed = true;
};

Task.prototype.save2 = function () {
    console.log('saving task using prototype ' + this.name);
};

module.exports = Task;