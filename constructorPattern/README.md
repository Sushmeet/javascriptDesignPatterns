# ConstructorPattern

> If you take a function, any constructor function and you drop
the new keyword.

1. This will create a new object
2. Links to an object prototype
3. Bind this to the new object

# Prototypes
> An encapsulation of properties that an object links to. If we keep the method
 within the object then we will create a new method every time. Instead with prototype
 we can create many task objects.

 A task object has a task prototype. So when you create 2 copies of task then
 they are both truly linked back to the one copy of the prototype. So basically
 we want to take our Method Declarations (eg completeStatus, save) out of the
 task object and assign it to a prototype.