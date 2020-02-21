const Abstraction = require("../Abstraction");
test("Abstraction get coding language will be JavaScript", () =>{
        let Abstract = new Abstraction("JavaScript")
        expect(Abstract.codeLanguage).toBe("JavaScript");

    }
);