/**
 * Created by sushi on 28/12/16.
 */

var Task = require('./class');

var task1 = new Task("Create Constructors");
var task2 = new Task("Create modules");
var task3 = new Task("Create singletons");
var task4 = new Task("Create prototypes");

task1.completeStatus2();
task2.completeStatus2();
task1.save2();
task3.save2();