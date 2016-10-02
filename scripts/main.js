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
        move: function() {
            console.log("I'm an animal and I can move.");
        },
        vocalize: function(times) {
          times = times || 3;
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
        },
        reproduce: function(times) {
            times = times || 1;
            try {
              if (times < 0 || times > 13) {throw error;}
            } catch (error) {
              times = prompt("Pick a number of Animal babies between 1 and 13 for your reproduce function.");
            }
            for (var index = 0; index < times; index++) {
                console.log("A Baby!");
                //add a p element with text to the babiesContainer that we stored in regions while running the BuildMe function
                $('this.regions.babiesContainer').append('<p>A Baby!</p>');
            }
        },
        init: function() {
            //gets containers ready to add elements to
            this.buildMe();
            //add the properties stored in constructors info section to the infoContainer in the HTML
            this.updateInfo();

        },
        addInfo: function(content) {
            //var info, a p element, is created
            var info = document.createElement('p');
            //var content from the updateInfo function in the constructor is passed into info
            info.innerHTML = content;
            //var info is appended to the infoContainer
            this.regions.infoContainer.appendChild(info);
        },
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
            age: function(dob) {
                var timeNow = new Date();
                var age = Math.round((timeNow - timeBorn) / 31557600000);
                console.log("age: " + age);
                return age;
            }
        };
        this.updateInfo = function() {
            //begin with an empty string, overwriting past info in the infoContainer
            this.regions.infoContainer.innerHTML = '';
            //for each item stored in info, update the value in the HTML by passing it into the addInfo function in the prototype
            for (var property in this.info) {
                this.addInfo(this.info[property]);
            }
        };
        this.toString = function() {
          return (this.name + ", born: " + this.mmddyyyy + "[" + this.info.class + " " + this.info.species + "]");
        };
    }

    /* Test Animal Constructor */
    console.log("Test Animal Constructor");
    var testAnimal = new Animal("Lars", "8/1/46");
    testAnimal.move();
    testAnimal.vocalize(0);
    testAnimal.reproduce(0);
    testAnimal.toString();


    /* Mammal Constructor */
    Mammal.prototype = new Animal();

    function Mammal(name, mmddyyyy) {
        this.info.class = "Mammal";
        Animal.call(this, arguments);
        this.reproduce = function(numberBabies) {
          numberBabies = numberBabies || 2;
          try {
            if (numberBabies > 13 || numberBabies < 0){throw error;}
          } catch (error) {
            prompt("You want your Mammal to reproduce. Try a number between 1 and 13.");
          }
          for (var index = 1; index <= numberBabies; index++) {
            var date = new Date();
            var babyName = "Baby Mammal " + index;
            var mammalbaby = new Mammal(babyName , date);
            console.log("A new fuzzy baby! Born: " + date);
            console.log(mammalbaby.toString());
            return mammalbaby;
          }
        };
    }

    /* Test Mammal Constructor */
    console.log("Test Mammal Constructor");
    var testMammal = new Mammal("Fuzzy", "12/3/14");
    testMammal.move();
    testMammal.vocalize(0);
    testMammal.reproduce(0);
    testMammal.toString();


    /* Wolf Constructor */
    Wolf.prototype = new Mammal();

    function Wolf(name, mmddyyyy) {
        Mammal.call(this, arguments);
        this.info.species = 'Wolf';
        this.move = function(speed) {
            console.log("Lope across the white expanse.");

        };
        this.vocalize = function(times) {
            for (var index = 0; index < times; index++) {
                console.log("AAARRRRROOOOOOOOOO");
            }
        };
    }

    /* Test Wolf Constructor */
    console.log("Test Wolf Constructor");
    var testWolf = new Wolf("Wolfie", 10/1/1978);
    testWolf.move();
    testWolf.vocalize(0);
    testWolf.reproduce(0);
    testWolf.toString();


    /* Bird Constructor */
    Bird.prototype = new Animal();

    function Bird(name, mmddyyyy) {
        Animal.call(this, arguments);
        this.info.class = "Bird";
        this.reproduce = function(eggs) {
            try {
                if (eggs < 2) {
                    throw error;
                }
                if (eggs > 18) {
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

    /* Test Bird Constructor */
    console.log("Test Bird Constructor");
    var testBird = new Bird("Tweets", "1.4.14");
    testBird.move();
    testBird.vocalize(0);
    testBird.reproduce(1);
    testBird.toString();


    /* Duck Constructor */
    Duck.prototype = new Bird();

    function Duck(name, mmddyyyy) {
        Bird.call(this, arguments);
        this.info.species = 'Duck';
        this.move = function() {
            console.log("Waddle to the pond and dive.");
        };
        this.vocalize = function(times) {
            for (var index = 0; index < times; index++) {
                console.log("WACK WACK WACK");
            }
        };
    }

    /* Test Duck Constructor */
    console.log("Test Duck Constructor");
    var testDuck = new Duck("Quackers", 1/1/2015);
    testDuck.move();
    testDuck.vocalize(0);
    testDuck.reproduce(25);
    testDuck.toString();


    /* Gammaproteobacteria Constructor */
    Gammaproteobacteria.prototype = new Animal();

    function Gammaproteobacteria(name, mmddyyyy) {
        Animal.call(this, arguments);
        this.info.class = "Gammaproteobacteria";
        this.reproduce = function(numberCells) {
          numberCells = numberCells || 400000;
          try {
            if (numberCells < 15000) { throw error;}
          } catch (error) {
            prompt("That's not enough to start a culture! Try a bigger number.");
          }
            var date = new Date();
            var culture = new Gammaproteobacteria("Fresh Culture", date);
            console.log("A new colony of " + this.numberCells + "was formed on " + date);
            return culture;
        };
    }

    /* Test Gammaproteobacteria Constructor */
    console.log("Test Gammaproteobacteria Constructor");
    var testGamma = new Gammaproteobacteria("Today's culture", "10/1/16");
    testGamma.move();
    testGamma.vocalize(0);
    testGamma.reproduce(1);
    testGamma.toString();


    /* Ecoli Constructor */
    Ecoli.prototype = new Gammaproteobacteria();

    function Ecoli(name, mmddyyyy) {
        Gammaproteobacteria.call(this, arguments);
        this.info.species = 'E. coli';
        this.move = function() {
            console.log("Jiggle. Jiggle.");
        };
        this.vocalize = function(times) {
            for (var index = 0; index < times; index++) {
                console.log("Wanna share my plasmid? I'm resistant to ampicillin.");
            }
        };
    }

    /* Test Ecoli Constructor */
    console.log("Test Ecoli Constructor");
    var testEcoli = new Ecoli ("DH5alpha", "9/30/16");
    testEcoli.move();
    testEcoli.vocalize(0);
    testEcoli.reproduce(1);
    testEcoli.toString();

});
