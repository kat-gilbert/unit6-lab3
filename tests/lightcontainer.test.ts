import LightContainer from "../src/lightcontainer";

describe("LightContainer testing", function() {
    test("Destination and cargoWeight properties are set from the constructor parameters", function(){
    let newContainer: LightContainer = new LightContainer("San Diego", 2000);
        expect(newContainer).toEqual({destination: "San Diego", cargoWeight: 2000});
    })
    test("CargoWeight defaults to 0", function(){
        let newContainer: LightContainer = new LightContainer("San Diego");
            expect(newContainer).toEqual({destination: "San Diego", cargoWeight: 0});
    })
    test("getGrossWeight returns cargoWeight", function(){
        let newContainer: LightContainer = new LightContainer("San Diego", 2000);
            expect(newContainer.getGrossWeight()).toEqual(2000);
    })
    test("getGrossWeight returns cargoWeight", function(){
        let newContainer: LightContainer = new LightContainer("San Diego", 50000);
            expect(newContainer.getGrossWeight()).toEqual(50000);
    })
})