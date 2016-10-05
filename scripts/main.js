$(document).ready(function() {
    "use strict";
    console.clear();



    /* Animal Prototype */
    Animal.prototype = {
        buildMe: function() {
            //link var sectionContainer to #choose-animal element in HTML
            var sectionContainer = document.getElementById('container');
            // make elements to hold babies and info
            var infoContainer = document.createElement('div');
            var babiesContainer = document.createElement('div');
            //add new divs to sectionContainer
            sectionContainer.appendChild(infoContainer);
            sectionContainer.appendChild(babiesContainer);
            //save sectionContainer and new divs to the region section of the constructor
            this.regions.sectionContainer = sectionContainer;
            this.regions.babiesContainer = babiesContainer;
            this.regions.infoContainer = infoContainer;
        },
        init: function() {
            //gets containers ready to add elements to
            this.buildMe();
            //add event listener
            $(this.regions.picArea).on('click', this.move.bind(this));
            $(this.regions.vocBtn).on('click', this.vocalize.bind(this));
            $(this.regions.repBtn).on('click', this.reproduce.bind(this));
            $(this.regions.infoBtn).on('click', this.updateInfo.bind(this));
            console.log("in init");
        },
        addInfo: function(content) {
            //var info, a p element, is created
            var info = document.createElement('p');
            //var content from the updateInfo function in the constructor is passed into info
            info.innerHTML = content;
            //var info is appended to the infoContainer
            this.regions.infoContainer.appendChild(info);
        },
        toString: function() {
            return "[object Animal]";
        }
    };

    /* Animal Constructor */
    function Animal(name, mmddyyyy) {
        this.regions = {
            sectionContainer: null,
            babiesContainer: null,
            infoContainer: null
        };
        this.info = {
            name: name,
            dob: new Date(mmddyyyy),
            species: "undefined species",
            class: "undefined class",
        };
        this.getAge = function() {
            var timeNow = new Date();
            var age = Math.round((timeNow - this.info.dob) / 31557600000);
            return age;
        };
        this.updateInfo = function() {
            console.log('in update info');
            $(this.regions.infoContainer).css({
                "font-size": "1.5em",
                "background-color": "darkblue",
                "border": "2px solid yellow",
                "color": "yellow"
            });
            //begin with an empty string, overwriting past info in the infoContainer
            this.regions.infoContainer.innerHTML = '';
            //for each item stored in info, update the value in the HTML by passing it into the addInfo function in the prototype
            for (var property in this.info) {
                this.addInfo(this.info[property] + ",<br>");
            }
        };
        this.reproduce = function(times) {
            try {
                if (times < 0 || times > 13) {
                    throw error;
                }
            } catch (error) {
                times = prompt("Pick a number of Animal babies between 1 and 13 for your reproduce function.");
            }
            for (var index = 0; index < times; index++) {
                console.log("A Baby!");
            }
        };
        this.move = function() {
            console.log("I'm an animal and I can move.");
        };
        this.vocalize = function(times) {
            try {
                if (times <= 0) {
                    throw error;
                }
            } catch (error) {
                times = prompt("C'mon. You have to make SOME noise. Enter a number of times for your animal to vocalize.");
            } //if var times passes test, use to determine number of times the loop runs
            for (var index = 0; index < times; index++) {
                console.log("I'm an animal and I make noise.");
                $('this.regions.sectionContainer').append('<p>NOISE</p>');
            }
        };
    }
    //
    // /* Test Animal Constructor */
    // console.log("\nTest Animal Constructor\n");
    // var testAnimal = new Animal("Lars", "8/1/1946");
    // testAnimal.move(); //I'm an animal and I can move.
    // testAnimal.vocalize(0); //You have to make SOME noise....
    // testAnimal.reproduce(0); //Pick a number between 1 and 13
    // console.log(testAnimal.toString()); //[object Animal]
    // console.log("name: " + testAnimal.info.name + ", age: " + testAnimal.getAge() + ", dob: " + testAnimal.info.dob + ", species: " + testAnimal.info.species + ", class: " + testAnimal.info.class); //name: Lars, age: 70, dob: 8/1/1946...
    //

    /* Mammal Constructor */
    Mammal.prototype.toString = function() {
        return "[object Mammal]";
    };

    function Mammal(name, mmddyyyy) {
        Animal.call(this, name, mmddyyyy);
        this.info.class = "Mammal";
        this.reproduce = function(numberBabies) {
            try {
                while (numberBabies > 13 || numberBabies < 0) {
                    throw error;
                }
            } catch (error) {
                prompt("You want your Mammal to reproduce. Try a number between 1 and 13.");
            }
            for (var index = 1; index <= numberBabies; index++) {
                var date = new Date();
                var babyName = "Baby Mammal " + index;
                var mammalbaby = new Mammal(babyName, date);
                console.log("A new fuzzy baby! Born: " + date);
                return mammalbaby;
            }
        };
    }

    // /* Test Mammal Constructor */
    // console.log("\nTest Mammal Constructor\n");
    // var testMammal = new Mammal("Fuzzy", "12/3/14");
    // testMammal.move();
    // testMammal.vocalize(3);
    // testMammal.reproduce(2);
    // console.log(testMammal.toString());
    // console.log("name: " + testMammal.info.name + ", age: " + testMammal.getAge() + ", dob: " + testMammal.info.dob + ", species: " + testMammal.info.species + ", class: " + testMammal.info.class);


    /* Wolf Constructor */
    Wolf.prototype = new Animal();
    Wolf.prototype.toString = function() {
        return "[object Wolf]";
    };

    function Wolf(name, mmddyyyy) {
        Mammal.call(this, name, mmddyyyy);
        this.info.species = 'Wolf';
        this.regions.picArea = document.getElementById('wolf-pic');
        this.regions.vocBtn = document.getElementById('wolf-btn-vocalize');
        this.regions.repBtn = document.getElementById('wolf-btn-reproduce');
        this.regions.infoBtn = document.getElementById('wolf-btn-info');

        this.reproduce = function(babies) {
            var date = new Date();
            // for (var index = 0; index < babies; index++) {
            var wolfbaby = new Wolf("baby wolf", date);
            console.log('in reproduce');
            $('#container').append('<img src="https://s-media-cache-ak0.pinimg.com/236x/cc/bb/b0/ccbbb011bcc3e1fc0cb4abab0a688112.jpg"/>');
            return wolfbaby;
        };
        this.vocalize = function(times) {
            this.regions.infoContainer.innerHTML = '';
            $(this.regions.infoContainer).css({
                "font-size": "4em",
                "background-color": "white",
                "border": "3px solid black",
                "color": "black"
            });
            this.addInfo('AAARRRRROOOOOOOOOO');
            console.log("AAARRRRROOOOOOOOOO");
        };
        this.move = function() {
            $('img').slideToggle();
            $('button').slideToggle();
            $('#wolf-pic').slideToggle();
            $('.wolf-btn').slideToggle();
            $('#wolf-pic')
                .animate({
                    left: "400px"
                }, 200)
                .animate({
                    left: "-200px"
                }, 200)
                .animate({
                    left: "0"
                }, 100);
            console.log("Lope across the white expanse.");
        };
    }

    /* Test Wolf Constructor */
    // console.log("\nTest Wolf Constructor\n");
    // var testWolf = new Wolf("Wolfie", "10.3.1978");
    // testWolf.move();
    // testWolf.vocalize(3);
    // var wolfbaby = testWolf.reproduce(2);
    // console.log("wolfbaby: " + wolfbaby.toString());
    // console.log(testWolf.toString());
    // console.log("name: " + testWolf.info.name + ", age: " + testWolf.getAge() + ", dob: " + testWolf.info.dob + ", species: " + testWolf.info.species + ", class: " + testWolf.info.class);

    /* Bird Constructor */
    Bird.prototype = new Animal();
    Bird.prototype.toString = function() {
        return "[object Bird]";
    };

    function Bird(name, mmddyyyy) {
        Animal.call(this, name, mmddyyyy);
        this.info.class = "Bird";
        this.reproduce = function(eggs) {
            try {
                while (eggs < 2 || eggs > 18) {
                    throw error;
                }
            } catch (error) {
                eggs = prompt("You want your Bird to make a nest. Pick a number of eggs between 2 and 18.");
            }
            var date = new Date();
            var birdbaby = new Bird("New Nest", date);
            console.log("A new nest of " + eggs + " eggs! Laid: " + date);
            return birdbaby;
        };
    }

    // /* Test Bird Constructor */
    // console.log("\nTest Bird Constructor\n");
    // var testBird = new Bird("Tweets", "1.4.14");
    // testBird.move();
    // testBird.vocalize(0);
    // var birdbaby = testBird.reproduce(1);
    // console.log("birdbaby: " + birdbaby.toString());
    // console.log(testBird.toString());
    // console.log("name: " + testBird.info.name + ", age: " + testBird.getAge() + ", dob: " + testBird.info.dob + ", species: " + testBird.info.species + ", class: " + testBird.info.class);



    /* Duck Constructor */
    Duck.prototype = new Animal();
    Duck.prototype.toString = function() {
        return "[object Duck]";
    };

    function Duck(name, mmddyyyy) {
        Bird.call(this, name, mmddyyyy);
        this.info.species = 'Duck';
        this.regions.picArea = document.getElementById('duck-pic');
        this.regions.vocBtn = document.getElementById('duck-btn-vocalize');
        this.regions.repBtn = document.getElementById('duck-btn-reproduce');
        this.regions.infoBtn = document.getElementById('duck-btn-info');

        this.move = function() {
            console.log("Waddle to the pond and dive.");
            $('img').slideToggle();
            $('button').slideToggle();
            $('#duck-pic').slideToggle();
            $('.duck-btn').slideToggle();

            $('#duck-pic').animate({
                    top: "200px"
                }, 1000).animate({
                    top: "-200px"
                }, 1000)
                .animate({
                    top: "0"
                }, 1000);
        };
        this.vocalize = function() {
            this.regions.infoContainer.innerHTML = '';
            $(this.regions.infoContainer).css({
                "font-size": "4em",
                "background-color": "white",
                "border": "3px solid black",
                "color": "black"
            });
            this.addInfo("WACK WACK WACK!");
        };
        this.toString = function() {
            return ("[object Duck]");
        };
        this.reproduce = function(babies) {
            var date = new Date();
            // for (var index = 0; index < babies; index++) {
            var duckbaby = new Duck("duck egg", date);
            console.log('in reproduce');
            $('#container').append('<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmg0EpM4zN0cOUrHWadBa467_bVi_hBLAjmrvKLVyMIltM6cNM0w"/>');
            return duckbaby;
        };
    }

    // /* Test Duck Constructor */
    // console.log("\nTest Duck Constructor\n");
    // var testDuck = new Duck("Quackers", 1 / 1 / 2015);
    // testDuck.move();
    // testDuck.vocalize(3);
    // var duckbaby = testDuck.reproduce(19);
    // console.log("duckbaby: " + duckbaby.toString());
    // console.log(testDuck.toString());
    // console.log("name: " + testDuck.info.name + ", age: " + testDuck.getAge() + ", dob: " + testDuck.info.dob + ", species: " + testDuck.info.species + ", class: " + testDuck.info.class);
    /* Gammaproteobacteria Constructor */
    Gammaproteobacteria.prototype = new Animal();
    Gammaproteobacteria.prototype.toString = function() {
        return "[object Gammaproteobacteria]";
    };

    function Gammaproteobacteria(name, mmddyyyy) {
        Animal.call(this, name, mmddyyyy);
        this.info.class = "Gammaproteobacteria";
        this.reproduce = function(numberCells) {
            try {
                while (numberCells < 15000) {
                    throw error;
                }
            } catch (error) {
                numberCells = prompt("That's not enough to start a culture! Try a bigger number.");
            }
            var date = new Date();
            var culture = new Gammaproteobacteria("Fresh Culture", date);
            console.log("A new colony of " + numberCells + " was formed on " + date);
            return culture;
        };
    }

    // /* Test Gammaproteobacteria Constructor */
    // console.log("\nTest Gammaproteobacteria Constructor\n");
    // var testGamma = new Gammaproteobacteria("Today's Culture", "10/1/16");
    // testGamma.move();
    // testGamma.vocalize(0);
    // var gammababies = testGamma.reproduce(1000);
    // console.log("gammababies: " + gammababies.toString());
    // console.log(testGamma.toString());
    // console.log("name: " + testGamma.info.name + ", age: " + testGamma.getAge() + ", dob: " + testGamma.info.dob + ", species: " + testGamma.info.species + ", class: " + testGamma.info.class);

    /* Ecoli Constructor */
    Ecoli.prototype = new Animal();
    Ecoli.prototype.toString = function() {
        return "[object Ecoli]";
    };

    function Ecoli(name, mmddyyyy) {
        Gammaproteobacteria.call(this, name, mmddyyyy);
        this.info.species = 'E. coli';
        this.regions.picArea = document.getElementById('ecoli-pic');
        this.regions.vocBtn = document.getElementById('ecoli-btn-vocalize');
        this.regions.repBtn = document.getElementById('ecoli-btn-reproduce');
        this.regions.infoBtn = document.getElementById('ecoli-btn-info');

        this.move = function() {
            console.log("Jiggle.Jiggle.");
            $('img').slideToggle();
            $('button').slideToggle();
            $('#ecoli-pic').slideToggle();
            $('.ecoli-btn').slideToggle();
            for(var i = 0; i < 25; i++){
            $('#ecoli-pic').animate({
                    top: "20px"
                }, 100).animate({
                    top: "-20px"
                }, 100).animate({
                    top: "0"
                }, 100);
              }
        };

    this.vocalize = function(times) {
        try {
            while (times < 1) {
                throw error;
            }
        } catch (error) {
            times = prompt("I wanna talk to you! Pick a number of times for me to express myself!");
        }
        for (var index = 0; index < times; index++) {
            console.log("Wanna share my plasmid? I'm resistant to ampicillin.");
        }
    };
}

// /* Test Ecoli Constructor */
// console.log("\nTest Ecoli Constructor\n");
// var testEcoli = new Ecoli("DH5alpha", "9/30/16");
// testEcoli.move();
// testEcoli.vocalize(3);
// var babycoli = testEcoli.reproduce(16999);
// console.log("babycoli: " + babycoli.toString());
// console.log(testEcoli.toString());
// console.log("name: " + testEcoli.info.name + ", age: " + testEcoli.getAge() + ", dob: " + testEcoli.info.dob + ", species: " + testEcoli.info.species + ", class: " + testEcoli.info.class);
//
var wolfObject = new Wolf("Wolfie", "10/30/2013"); wolfObject.init();
var duckObject = new Duck("Woody", "11/4/1972"); duckObject.init();
var ecoliObject = new Ecoli("Yesterday's Culture", "10/3/2016"); ecoliObject.init();
});
