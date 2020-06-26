const utils = require ('../src/utils');

describe("Cubic Weight", () => {
    test('should return 6.75 when dimentions are length: 45cm, height: 20cm, width: 30cm', () => {
        
        const cubicWeight = utils.cubicWeight({length: 45, height: 20, width: 30});

        expect(cubicWeight).toEqual(6.75);        
    });  
});  

describe("Average Cubic Weight", () => {
    test('should return an average of 6.00 when there are 3 parcels with [6.00, 5.00, 7.00] cubic dimentions', () => {
        
        const avgCubicWeight = utils.averageCubicWeight([6.00, 5.00, 7.00]);

        expect(avgCubicWeight).toEqual(6.00);        
    });  
});