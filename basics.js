/* JS Variables */

    /* Assign String to var */
        var carName = "Volvo";

    /* Assign Number to var */
        var x = 50;

    /* Sum 2 numbers */
        var x = 5;
        var y = 10;
        document.getElementById("demo").innerHTML = x + y;

    /* Variable Z with alert */
        var x = 5;
        var y = 10;
        var z = x + y;
        alert(z);

    /* Multi Variable Assignment */
        var firstName = "John", lastName = "Doe", age = 35;

/* JS Operators */

    /* Multiply */
        alert(10 * 5);

    /* Divide */
        alert(10 / 2);
            
    /* Remainder  */
        alert(15 % 9);

    /* Assignment Operator Plus */
        x = 10;
        y = 5;
        x += y;
    
    /* Assignment Operator Multiply */
        x = 10;
        y = 5;
        x *= y;
               
/* JS Data Types */

    /* Correct Data Types */
        var length = 16;          // Number
        var lastName = "Johnson"; // String
        var x = {
        firstName: "John",
        lastName: "Doe"
        };                        // Object
    
/* JS Functions */

    /* Execute Function */
        function myFunction() {
            alert("Hello World!");
        }
        myFunction();

    /* Create Function */
        function myFunction() {
            alert("Hello World!");
        }

    /* Return from Function */
        function myFunction() {
            return "Hello";
        }
        document.getElementById("demo").innerHTML = myFunction();

    /* Return from Function set innerHtml */
        function myFunction() {
            document.getElementById("demo").innerHTML = "Hello";
        }
    
/* JS Objects */

    /* Extract from object */
        var person = {
            firstName: "John",
            lastName: "Doe"
        };
        alert(person.firstName);    
        
    /* Adding to object */
        var person = {
            firstName: "John",
            lastName: "Doe",
            country: "Norway"
        };

    /* Creating object then alert */
        var person = {
            name: "John", age: 50
        };
        alert(person.name + " is " + person.age);
    
/* JS Events */

    /* onclick on button */
        // <button onclick="alert('Hello')">Click me.</button>

    /* onclick on execute function */
        // <button onclick="myFunction()">Click me.</button>

    /* Update div element to red on hover */
        // <div onmouseover="this.style.backgroundColor='red'">some text.</div>

/* JS Strings */

    /* length of string */
        var txt = "Hello World!";
        var x = txt.length;
        alert(x);

    /* Using Escape characters */
        var txt = "We are \"Vikings\"";
        alert(txt);
    
    /* String concatenation */
        var str1 = "Hello ";
        var str2 = "World!";
        alert(str1 + str2);

/* JS String Methods */

    /* Find Position of h */
        var txt = "abcdefghijklm";
        var pos = txt.indexOf("h");

    /* Return slice of bananas */
        var txt = "I can eat bananas all day!";
        var x = txt.slice(10, 17);    
        
    /* Replace words */
        var txt = "Hello World";
        txt = txt.replace("Hello", "Welcome");    
        
    /* Convert to upperCase */
        var txt = "Hello World";
        txt = txt.toUpperCase();    
        
    /* Convert to lowerCase */
        var txt = "Hello World";
        txt = txt.toLowerCase();

/* JS Arrays */

    /* Get value from array */
        var cars = ["Saab", "Volvo", "BMW"];
        var x = cars[1];

    /* Get value from array */
        var cars = ["Volvo", "Jeep", "Mercedes"];
        cars[0] = "Ford";    
        
    /* Get number of items in array */
        var cars = ["Volvo", "Jeep", "Mercedes"];
        alert(cars.length);

/* JS Array Methods */

    /* Remove last item in array */
        const fruits = ["Banana", "Orange", "Apple"];
        fruits.pop();

    /* Add to array */
        const fruits = ["Banana", "Orange", "Apple"];
        fruits.push("Kiwi");

    /* Splice from Array */
        const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
        fruits.splice(1, 2);

/* JS Array Sort */

    /* Sorting Array */
        const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
        fruits.sort();

/* JS Dates */

    /* Create Date object */
        const d = new Date();
        alert(d);

    /* Extract year from date */
        const d = new Date();
        var year = d.getFullYear();    
        
    /* Extract month from date */
        const d = new Date();
        var month = d.getMonth();    
        
    /* Set date year to 2020 */
        const d = new Date();
        d.setFullYear(2020);

/* JS Math */

    /* Random number */
        var r = Math.random();

    /* Largest Number */
        var x = Math.max(10, 20);

    /* Round number to nearest Number */
        var x = Math.round(5.3);

    /* Square root */
        var x = Math.sqrt(9);
        
/* JS Comparison */

    /* Greater than */
        var x = 10;
        var y = 5;
        alert(x > y);

    /* Equal too */
        var x = 10;
        var y = 5;
        alert(x == y);    
        
    /* NOT Equal too */
        var x = 10;
        var y = 5;
        alert(x != y);    
        
    /* Ternary Operator */
        var age = n;
        var ableToVote = (age < 18) ? "Too young" : "Old enough";
        alert(ableToVote);

/* JS Conditions */

    /* if x is greater than y */
        if (x > y) {
            alert("Hello World");
        }
    
    /* if x is greater than y else */
        if (x > y) {
            alert("Hello World");
        } else {
            alert("Goodbye");
        }

/* JS Switch */

    /* Create switch */
        switch (fruits) {
            case "Banana": 
                alert("Your Bananas!");
                break;
            case "Apple":
                alert("An Apple a day!");
                break;
        }

    /* Create switch with default */
    switch (fruits) {
        case "Banana": 
            alert("Your Bananas!");
            break;
        case "Apple":
            alert("An Apple a day!");
            break;
        default: 
            alert("No fruits found!");
    }

/* JS For Loops */

    /* For loop from 0-9 */
        for (var i = 0; i < 10; i++){
            console.log(i);
        }    
        
    /* For loop through array */
        var fruits = ["Apple", "Banana", "Orange"];

        for (fruit of fruits){
            console.log(fruit);
        }
        
/* JS While Loops */

    /* Loop less than 10 */ 
        var i = 0;
        while (i < 10) {
            console.log(i);
            i++;
        }    
    
    /* Loop less than 10 with increment of 2 */ 
        var i = 0;
        while (i < 10) {
            console.log(i);
            i = i + 2;
        }

/* JS Break Loops */

    /* Stop loop when 5 */
        for (i = 0; i < 10; i++) {
            console.log(i);
            if (i == 5) {
                break;
            }
        }

    /* Continue loop to next inter if 5 */
        for (i = 0; i < 10; i++) {
            if (i == 5) {
                continue;
            }
            console.log(i);
        }


/* JS HTML DOM */
    
    /* Using getElementById */
        // <p id="demo"></p>
        document.getElementById("demo").innerHTML = "Hello";
    
    /* Using getElementsByTagName  */
        // <p id="demo"></p>
        document.getElementsByTagName("p")[0].innerHTML = "Hello";

    /* Using getElementsByClassName  */
        // <p id="demo"></p>
        // <p id="demo"></p>
        document.getElementsByClassName("test")[0].innerHTML = "Hello";

    /* Using querySelectorAll  */
        // <p>Hello World!</p>
        // <p>Hello Norway!</p>
        document.querySelectorAll("p")[0].innerHTML = "Hello";

    /* Updating img src attribute */
        // <img id="image" src="smiley.gif">
        document.getElementById("image").src = "pic_mountain.jpg";
        
    /* Updating input value */
        // <input type="text" id="myText" value="Hello">
        document.getElementById("myText").value = "Have a nice day!";

    /* Updating p to red */
        // <p id="demo"></p>
        document.getElementById("demo").style.color = "red";

    /* Updating p to 40px */
        // <p id="demo"></p>
        document.getElementById("demo").style.fontSize = "40px";

    /* Updating p to be hidden */
        // <p id="demo"></p>
        document.getElementById("demo").style.display = "none";

    /* Updating p to be hidden */
        // <button id="demo">Click me1</button>
        document.getElementById("demo").addEventListener("click", myFunction);