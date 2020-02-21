const Encapsulation = require("../Encapsulation");
test("Encapsulation RoomOne returns 5", () =>{
    let Enc = new Encapsulation();
    expect(Enc.RoomOne()).toBe(5);

}
);
test("Encapsulation Hallway throws reference error", () =>{
        let Enc = new Encapsulation();
        expect(()=>{
            Enc.Hallway()
        }).toThrow();

    }
);