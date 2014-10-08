Clearcode Custom TimeOut Service
=========

This service provides custom timeout with invoking ``` $apply ```


Installation
--------------
TODO


Usage
------

Add ``` cc.timeout.service ``` module to your app module list :


```
angular
    .module('yourAwesomeApp', [
        'cc.timeout.service'
    ]);
```
and you are ready to go!

How to use service:

*customTimeout*

```
customTimeout(function, delay, invokeApply);

// delay defaults to 0
// invokeApply defaults to true
```
Author
------

Roman Sek


License
----

LGPL

