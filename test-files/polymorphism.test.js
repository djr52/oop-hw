const Polymorphism = require("../Inheritance");
test("Encapsulation Hallway throws reference error", () =>{
        let Inherit = new Polymorphism("Car", "Honda");
        expect(Inherit.present()).toBe("I have a Car");

    }
);