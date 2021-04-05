(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        ThePi: Math.PI,


        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var theArea = (Math.pow(this.radius, 2) * this.ThePi);

            return theArea;// TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            var Area = this.getArea();

            if (doRounding === true) {

                    let theRound = Math.round(Area);
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + theRound);
            }
            if (doRounding === false) {
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + Area);
            }




        }
    };

    // log info about the circle

    console.log("Raw circle information:");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    circle.radius = 5;
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();