$(document).ready(function() {
"use strict";

    var inputMap = {};

    function getFormData() {
        inputMap.mapname = getElementByID('wolf-name').value;
       inputMap.mmddyyyy = getElementByID('wolf-dob').value;
       inputMap.moveBool = getElementByID('wolf-move').value;
       inputMap.vocalizeTimes = getElementByID('wolf-vocalize-times').value;

        console.log('wolf move: ' + moveBool);
        return inputMap;
    }


    /* animal constructor */
    function Animal(creatureType) {
        this.name = inputMap.mapname;
        this.mmddyyyy = inputMap.mmddyyyy;
        this.moveBool = inputMap.moveBool;
        this.vocalizeTimes = inputMap.vocalizeTimes;
        this.creatureType = creatureType;
        this.getAge = function() {
            var timeNow = new Date();
            var timeBorn = this.getDOB();
            var age = (timeNow - timeBorn) / 31557600000;
            return age;
        };
        this.getDOB = function() {
          var parsedDate = Date.parse(this.mmddyyyy);
          console.log("this.mmddyyyy: " + this.mmddyyyy);
            try {
                if (!(parsedDate instanceof Date)) {
                    console.log("parsedDate: " + parsedDate);
                    throw error;
                }
            } catch (error) {
                console.log(parsedDate + " isn't a valid date. Please enter your date in mm/dd/yyyy format.");
            }
        };
        this.picture = '#' + this.creatureType + '-pic';
        this.section = '#' + this.creatureType;
        this.button = '#' + this.creatureType + '-btn';
        this.age = this.getAge();
    }
    /* wolf constructor */
    Wolf.prototype = new Animal();

    function Wolf() {
        Animal.apply(this, arguments);
        this.creatureType = 'wolf';
        this.reproduce = function() {
            var random = Math.ceil(Math.random() * 12);
            console.log("A litter of " + random + " pups!");
        };
        this.move = function() {
            console.log("Lope across the field!");
        };
        this.vocalize = function(timesToHowl) {
            console.log("ARRROOOOOO");
            timesToHowl = timesToHowl || 3;
            for (var index = timesToHowl; index > 0; index--) {
                $('#wolf').append('<p>ARRRRRROOOOOOOOOO</p>').css('fontSize', '2em');
            }
        };
        this.toString = function() {
            return (name + " is a wolf " + name + " is " + Math.round(this.age) + ".");
        };

        /* make the wolf howl each time the Howl button is clicked */
        $('#wolf-vocalize').click(function(event) {
            this.vocalize(3);
        });

    }



    //
    // /* duck constructor */
    // function Duck(name, mmddyyyy) {
    //     Animal.call(this, name, mmddyyyy);
    //     this.info = {
    //         name: name,
    //         dob: mmddyyyy
    //     };
    //     this.reproduce = function() {
    //         var random = (Math.floor(Math.random() * 13) + 1);
    //         if (random === 1) {
    //             console.log("The nest has only one egg. Tomorrow there will be more.");
    //         } else {
    //             console.log("The nest has " + random + " eggs!");
    //         }
    //     };
    //     this.move = function() {
    //         console.log("Waddle, waddle, waddle!");
    //     };
    //     this.vocalize = function() {
    //         console.log("QUACK!");
    //     };
    //     this.toString = function() {
    //         return (name + " is a duck. " + name + " is " + Math.round(this.age) + ".");
    //     };
    // }
    // Duck.prototype = new Animal();
    //
    // /* bacteria constructor */
    // function Ecoli(name, mmddyyyy) {
    //     Animal.call(this, name, mmddyyyy);
    //     this.info = {
    //         name: name,
    //         dob: mmddyyyy
    //     };
    //     this.reproduce = function(number) {
    //         var random = (Math.floor(Math.random() * number) * (Math.floor(Math.random() * number)));
    //         if (random > (Math.random() * number) / 2) {
    //             console.log("You have " + random + " cells in your culture.");
    //         } else {
    //             console.log("Your culture has died.");
    //         }
    //     };
    //     this.move = function(where) {
    //         console.log("Jiggle. Jiggle. You made your way to " + where + ".");
    //     };
    //     this.vocalize = function(times) {
    //         for (var repeats = 0; repeats < times; repeats++) {
    //             console.log("Wanna try out my new plasmid?");
    //         }
    //     };
    // }
    // Duck.prototype = new Animal();
    //
    /* testing stuff */
    // var animal1 = new Wolf('fred', '09/29/2000');
    // console.log("animal1 age: " + animal1.getAge());
    // animal1.reproduce();
    // animal1.move();
    // animal1.vocalize(3);
    //
    // var animal2 = new Duck('margery', '09/29/2015');
    // console.log("animal2 age: " + animal2.getAge());
    // animal2.reproduce();
    // animal2.move();
    // animal2.vocalize();
    //
    // var animal3 = new Ecoli('DH5alpha', '9/30/2016');
    // console.log("animal3 age: " + animal3.getAge());
    // animal3.reproduce(35);
    // // animal3.move(place);
    // // animal3.vocalize(3);
    // console.log(Wolf.prototype);
    // console.log(animal1.toString());









});
