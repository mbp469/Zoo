function Animal(name, mmddyyyy) {

    this.getDOB = function() {
        console.log("dob: " + Date.parse(mmddyyyy));
        return Date.parse(mmddyyyy);
    };
    this.getAge = function() {
        var timeNow = new Date();
        var timeBorn = this.getDOB();
        console.log("timeNow: " + timeNow);
        var age = (timeNow - timeBorn) / 31557600000;
        console.log("age: " + age);
        return age;
    };
    this.info = {
        name: name,
        dob: mmddyyyy,
        age: this.getAge()
    };
}
var animal = new Animal("fred", '09/29/2000');
console.log("animal age: " + animal.getAge());
