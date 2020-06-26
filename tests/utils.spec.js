const utils = require ('../src/utils');

describe("Cubic Weight", () => {
    test('should return 6.75 when dimentions are length: 45cm, height: 20cm, width: 30cm', () => {
        
        const cubicWeight = utils.cubicWeight({length: 45, height: 20, width: 30});

        expect(cubicWeight).toEqual(6.75);        
    });    
});