const utils = require ('../src/utils');

const category = 'Air Conditioners';

/**
 * Filters the objects by category and calculates the cubic weights of the filtered objects
 * @param {Array} objectsArray 
 * @retun {Array} - array of cubic weights
 */
const getCubicWeights = objectsArray => {
    // Filter objects in the category 
    const filterdObjects = objectsArray.filter(object => object.category === category);

    // Calculate cubic weights of the filtered objects
    return filterdObjects.map(object => utils.cubicWeight(object.size));
}

/**
 * @retun {Array} - array of cubic weights from all pages of the API enpoint
 */
const calculateCubicWeights = async () => {

    const baseUrl = 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com';
    let api = '/api/products/1';

    let cubicWeights = [];

    // Repeat until there is no next page
    do {  
        const url = `${baseUrl}${api}`
        const data = await utils.getData(url);

        // If data is not available, break
        if(!data) {            
            break;
        }
                
        const currentCubicWeights = getCubicWeights(data.objects);

        // Collect the current page cubic weights in an array
        cubicWeights.push(...currentCubicWeights);
                
        // Next page in the API if available
        api = data.next;    
        
    } while (api);
    
    return cubicWeights;
}

/**
 * Prints out the average cubic weight for all products in the "Air Conditioners" category
 */
const showAverage = async () => {
    const cubicWeights = await calculateCubicWeights();

    const average = cubicWeights.length > 0 ? utils.averageCubicWeight(cubicWeights) : 0;

    console.log(`Average cubic weight for all products in the "Air Conditioners" category is: ${average}`);
} 

showAverage();