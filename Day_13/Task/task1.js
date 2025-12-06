/*
Global:
                             this Value:
In non-strict mode, this is the global object . In strict mode, this is undefined.

                         Inside an Object Method:
Refers to the object that owns the method.

                   Inside a Standalone Non-Arrow Function:
In non-strict mode, this is the global object. In strict mode, this is undefined.

                   Inside an Arrow Function (standalone):
Arrow functions do not have their own this. They inherit this from their lexical scope (the scope in which they are defined).

              Inside an Arrow Function (as object method):
Arrow functions do not bind this to the object. this comes from the lexical scope, not the object.

        Inside an Object Created with a Constructor Function:
In a constructor function, this refers to the new instance created by new.

*/