const Inheritance = require("../Inheritance");
test("Encapsulation Hallway throws reference error", () =>{
        let Inherit = new Inheritance("Car", "Honda");
         expect(Inherit).toEqual({"brand": "Honda", "vehicleType": "Car"});

    }
);