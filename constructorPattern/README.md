# ConstructorPattern
> We highligh the various ways to make objects in Javascript. You can do them with functions,
or using Classes which are part of ecmascript 5 onwards. We also discuss about how it is
more efficient to use prototypes for method declarations in functions instead of just declaring
the methods directly in functions.

## Constructor Function
> In javascript any function can become a constructor function. All you need to do is give it
the **this** keyword and declare it in a particular way. Once you do that then you can use that
constructor function to create new objects.

```
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
```


# Prototypes
> An encapsulation of properties that an object links to. If we keep the method
 within the object then we will create a new method every time. Instead with prototype
 we can create many task objects.

Any object can have its own prototype. A task object has a task prototype.
So when you create 2 copies of task then
they are both truly linked back to the one copy of the prototype. So basically
we want to take our Method Declarations (eg completeStatus, save) out of the
task object and assign it to a prototype.

```
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
```

# Using classes from ES 5 onwards.

```
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
```

# Creating Objects using constructor functions or classes.
> Whether you use function constructor,with methods or with prototypes or you use classes
it's the same behaviour when it comes to actually creating objects with them.

 1. new operator will create a new object copy.
 2. this keyword is used refer to the particular object copy.

```
var Task = require('./class'); // or var Task = require('./task')

var task1 = new Task("Create Constructors");
var task2 = new Task("Create modules");
var task3 = new Task("Create singletons");
var task4 = new Task("Create prototypes");

task1.completeStatus2();
task2.completeStatus2();
task1.save2();
task3.save2();
```