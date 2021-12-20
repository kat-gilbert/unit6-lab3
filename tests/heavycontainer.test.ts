import HeavyContainer from "../src/heavycontainer";

describe("HeavyContainer tests", function() {
    test("The tareWeight, destination, and cargoWeight are set from the constructor", function() {
        let newContainer: HeavyContainer = new HeavyContainer(2000, "San Diego", 5000);
        expect(newContainer).toEqual({tareWeight: 2000, destination: "San Diego", cargoWeight: 5000});
    });
    test("cargoWeight defaults to 0, when the third constructor parameter is omitted", function() {
        let newContainer: HeavyContainer = new HeavyContainer(2000, "San Diego");
        expect(newContainer).toEqual({tareWeight: 2000, destination: "San Diego", cargoWeight: 0});
    });
    test("getGrossWeight returns the tareWeight plus the cargoWeight", function() {
        let newContainer: HeavyContainer = new HeavyContainer(2000, "San Diego", 5000);
        expect(newContainer.getGrossWeight()).toEqual(7000);
    });
    test("getGrossWeight returns the tareWeight plus the cargoWeight", function() {
        let newContainer: HeavyContainer = new HeavyContainer(10000, "San Diego", 7000);
        expect(newContainer.getGrossWeight()).toEqual(17000);
    });

    
});