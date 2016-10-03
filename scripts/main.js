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
            var moveImg = function() {
                var leftOffset = 0;
                var intervalId = setInterval(moveImg, 30);
                $('#' + this.info.species + '-pic').offset({
                    left: leftOffset
                });
                if (leftOffset > 1000) {
                    clearInterval(intervalId);
                    leftOffset = 0;
                } else {
                    leftOffset++;
                    console.log("I'm an animal and I can move.");
                }
            };
        },
        vocalize: function(times) {
            // times = times || 3;
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
            // times = times || 1;
            try {
                if (times < 0 || times > 13) {
                    throw error;
                }
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
            /* add click event to the wolf-pic */
            $('#wolf-pic').click(this.move().bind(this));

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
            //begin with an empty string, overwriting past info in the infoContainer
            this.regions.infoContainer.innerHTML = '';
            //for each item stored in info, update the value in the HTML by passing it into the addInfo function in the prototype
            for (var property in this.info) {
                this.addInfo(this.info[property]);
            }
        };
    }

    /* Test Animal Constructor */
    console.log("Test Animal Constructor");
    var testAnimal = new Animal("Lars", "8/1/1946");
    testAnimal.move();
    testAnimal.vocalize(3);
    testAnimal.reproduce(2);
    console.log(testAnimal.toString());
    console.log("name: " + testAnimal.info.name + ", age: " + testAnimal.getAge() + ", dob: " + testAnimal.info.dob + ", species: " + testAnimal.info.species + ", class: " + testAnimal.info.class);


    /* Mammal Constructor */
    Mammal.prototype = new Animal();
    Mammal.prototype.toString = function() {
        return "[object Mammal]";
    };

    function Mammal(name, mmddyyyy) {
        Animal.call(this, name, mmddyyyy);
        this.info.class = "Mammal";
        this.reproduce = function(numberBabies) {
            numberBabies = numberBabies || 2;
            try {
                if (numberBabies > 13 || numberBabies < 0) {
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
                console.log("mammalbaby: " + mammalbaby.toString());
                return mammalbaby;
            }
        };
    }

    /* Test Mammal Constructor */
    console.log("Test Mammal Constructor");
    var testMammal = new Mammal("Fuzzy", "12/3/14");
    testMammal.move();
    testMammal.vocalize(3);
    testMammal.reproduce(2);
    console.log(testMammal.toString());
    console.log("name: " + testMammal.info.name + ", age: " + testMammal.getAge() + ", dob: " + testMammal.info.dob + ", species: " + testMammal.info.species + ", class: " + testMammal.info.class);


    /* Wolf Constructor */
    Wolf.prototype = new Mammal();
    Wolf.prototype.toString = function() {
        return "[object Wolf]";
    };
    function Wolf(name, mmddyyyy) {
        Mammal.call(this, name, mmddyyyy);
        this.info.species = 'Wolf';
        this.vocalize = function(times) {
            for (var index = 0; index < times; index++) {
                console.log("AAARRRRROOOOOOOOOO");
            }
        };
        this.move = function() {
          var intervalId = setInterval(moveImg, 30);
            var moveImg = function() {
                var leftOffset = 0;
                $('#wolf-pic').offset({
                    left: leftOffset
                });
                if (leftOffset > 1000) {
                    clearInterval(intervalId);
                    leftOffset = 0;
                } else {
                    leftOffset++;
                    console.log("Lope across the white expanse.");
                }
            };
        };

    }

    /* Test Wolf Constructor */
    console.log("Test Wolf Constructor");
    var testWolf = new Wolf("Wolfie", 10 / 1 / 1978);
    testWolf.move();
    testWolf.vocalize(3);
    testWolf.reproduce(2);
    console.log(testWolf.toString());
    console.log("name: " + testWolf.info.name + ", age: " + testMammal.getAge() + ", dob: " + testWolf.info.dob + ", species: " + testWolf.info.species + ", class: " + testWolf.info.class);

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
    testBird.vocalize(3);
    testBird.reproduce(2);
    console.log(testBird.toString());
    console.log("name: " + testBird.info.name + ", age: " + testBird.getAge() + ", dob: " + testBird.info.dob + ", species: " + testBird.info.species + ", class: " + testBird.info.class);



    /* Duck Constructor */
    Duck.prototype = new Bird();
    Duck.prototype.toString = function() {
        return "[object Duck]";
    };

    function Duck(name, mmddyyyy) {
        Bird.call(this, name, mmddyyyy);
        this.info.species = 'Duck';
        this.move = function() {
            console.log("Waddle to the pond and dive.");
        };
        this.vocalize = function(times) {
            for (var index = 0; index < times; index++) {
                console.log("WACK WACK WACK");
            }
        };
        this.toString = function() {
            return ("[object Duck]");
        };

    }

    /* Test Duck Constructor */
    console.log("Test Duck Constructor");
    var testDuck = new Duck("Quackers", 1 / 1 / 2015);
    testDuck.move();
    testDuck.vocalize(3);
    testDuck.reproduce(4);
    console.log(testDuck.toString());
    console.log("name: " + testDuck.info.name + ", age: " + testDuck.getAge() + ", dob: " + testDuck.info.dob + ", species: " + testDuck.info.species + ", class: " + testDuck.info.class);



    /* Gammaproteobacteria Constructor */
    Gammaproteobacteria.prototype = new Animal();
    Gammaproteobacteria.prototype.toString = function() {
        return "[object Gammaproteobacteria]";
    };

    function Gammaproteobacteria(name, mmddyyyy) {
        Animal.call(this, name, mmddyyyy);
        this.info.class = "Gammaproteobacteria";
        this.reproduce = function(numberCells) {
            numberCells = numberCells || 400000;
            try {
                if (numberCells < 15000) {
                    throw error;
                }
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
    testGamma.vocalize(3);
    testGamma.reproduce(15999);
    console.log(testGamma.toString());
    console.log("name: " + testGamma.info.name + ", age: " + testGamma.getAge() + ", dob: " + testGamma.info.dob + ", species: " + testGamma.info.species + ", class: " + testGamma.info.class);

    /* Ecoli Constructor */
    Ecoli.prototype = new Gammaproteobacteria();
    Ecoli.prototype.toString = function() {
        return "[object Ecoli]";
    };

    function Ecoli(name, mmddyyyy) {
        Gammaproteobacteria.call(this, name, mmddyyyy);
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
    var testEcoli = new Ecoli("DH5alpha", "9/30/16");
    testEcoli.move();
    testEcoli.vocalize(3);
    testEcoli.reproduce(16999);
    console.log(testEcoli.toString());
    console.log("name: " + testEcoli.info.name + ", age: " + testEcoli.getAge() + ", dob: " + testEcoli.info.dob + ", species: " + testEcoli.info.species + ", class: " + testEcoli.info.class);


});
