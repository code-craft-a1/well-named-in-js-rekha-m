import { ColorPair, getPairNumberFromColor, getColorFromPairNumber } from "../ColorPair.js";
import { allColorPairs } from "../constants.js";

// Test function
function test() {

    // Test all the pair num.
    let allColorPairsIterator = 0;
    for (let pairNum = 1; pairNum <= 25; pairNum++) {
        let testPairColor = getColorFromPairNumber(pairNum);
        console.log(`[In]Pair Number: ${pairNum}, [Out] Colors: ${JSON.stringify(testPairColor)}`);
        console.assert(testPairColor.majorColor === allColorPairs.at(allColorPairsIterator).majorColor);
        console.assert(testPairColor.minorColor === allColorPairs.at(allColorPairsIterator).minorColor);
        allColorPairsIterator++;
    }

    // Test all the pair colors.
    let pairNumIterator = 1;
    for (let pairColorIterator = 0; pairColorIterator < 25; pairColorIterator++) {
        let testPair = allColorPairs.at(pairColorIterator);
        let pairNumber = getPairNumberFromColor(testPair);
        console.log(`[In]Colors: ${JSON.stringify(testPair)}, [Out] Pair Number: ${pairNumber}`);
        console.assert(pairNumber === pairNumIterator);
        pairNumIterator++;
    }

    // Test invalid pair
    try {
        getColorFromPairNumber(26);
    } catch(err) {
        console.assert(err === `Argument PairNumber:26 is outside the allowed range`)
    }

    // Test invalid color pair
    try {
        getPairNumberFromColor(new ColorPair("SILVER", "GOLD"));
    } catch(err) {
        console.assert(err === `Unknown Colors:MajorColor:SILVER,MinorColor:GOLD`)
    }
    
}

// Run the test
test();
