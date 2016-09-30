$(document).ready(function() {

    /* animal constructor */
    function Animal(name, mmddyyyy) {
        this.getAge = function() {
            var timeNow = new Date();
            var timeBorn = this.getDOB();
            var age = (timeNow - timeBorn) / 31557600000;
            return age;
        };
        this.getDOB = function() {
            return Date.parse(mmddyyyy);
        };
        this.age = this.getAge();

    }

    /* wolf constructor */
    function Wolf(name, mmddyyyy) {
        Animal.call(this, name, mmddyyyy);
        this.info = {
            name: name,
            dob: mmddyyyy
        };
        this.reproduce = function() {
            var random = Math.round(Math.random());
            if (random === 1) {
                console.log("It's a girl!");
            } else {
                console.log("It's a boy!");
            }
        };
        this.move = function() {
            console.log("Lope across the field!");
        };
        this.vocalize = function(timesToHowl) {
            console.log("ARRROOOOOO");
            for(var index = timesToHowl; index > 0; index--){
              $('#wolf').appendChild('p').css('fontSize', '3em');
            }
        };
        this.toString = function() {
            return (name + " is a wolf. " + name + " is " + Math.round(this.age) + ".");
        };

    }
    Wolf.prototype = new Animal();

    /* hide pics not selected and bring back when clicked again */
    $('#wolf-pic').click(function(event) {
        $('section').slideToggle();
        $('#wolf').toggleClass('active').slideDown();
        $('.active').slideDown();
    });



    /* duck constructor */
    function Duck(name, mmddyyyy) {
        Animal.call(this, name, mmddyyyy);
        this.info = {
            name: name,
            dob: mmddyyyy
        };
        this.reproduce = function() {
            var random = (Math.floor(Math.random() * 13) + 1);
            if (random === 1) {
                console.log("The nest has only one egg. Tomorrow there will be more.");
            } else {
                console.log("The nest has " + random + " eggs!");
            }
        };
        this.move = function() {
            console.log("Waddle, waddle, waddle!");
        };
        this.vocalize = function() {
            console.log("QUACK!");
        };
        this.toString = function() {
            return (name + " is a duck. " + name + " is " + Math.round(this.age) + ".");
        };
    }
    Duck.prototype = new Animal();

    /* bacteria constructor */
    function Ecoli(name, mmddyyyy) {
        Animal.call(this, name, mmddyyyy);
        this.info = {
            name: name,
            dob: mmddyyyy
        };
        this.reproduce = function(number) {
            var random = (Math.floor(Math.random() * number) * (Math.floor(Math.random() * number)));
            if (random > (Math.random() * number) / 2) {
                console.log("You have " + random + " cells in your culture.");
            } else {
                console.log("Your culture has died.");
            }
        };
        this.move = function(where) {
            console.log("Jiggle. Jiggle. You made your way to " + where + ".");
        };
        this.vocalize = function(times) {
            for (var repeats = 0; repeats < times; repeats++) {
                console.log("Wanna try out my new plasmid?");
            }
        };
    }
    Duck.prototype = new Animal();

    /* testing stuff */
    var animal1 = new Wolf('fred', '09/29/2000');
    console.log("animal1 age: " + animal1.getAge());
    animal1.reproduce();
    animal1.move();
    animal1.vocalize();

    var animal2 = new Duck('margery', '09/29/2015');
    console.log("animal2 age: " + animal2.getAge());
    animal2.reproduce();
    animal2.move();
    animal2.vocalize();

    var animal3 = new Ecoli('DH5alpha', '9/30/2016');
    console.log("animal3 age: " + animal3.getAge());
    animal3.reproduce(35);
    // animal3.move(place);
    animal3.vocalize(3);
    console.log(Wolf.prototype);
    console.log(animal1.toString());








});
