const axios = require('axios');

/**
 * Calculates the cubic weight according to received dimentions
 * @param {Object} obj - size object
 * @param {number} obj.length - length
 * @param {number} obj.height - hieght
 * @param {number} obj.width - witdh
 * @retun {number} - cubic weight with 2 digits after the decimal point
 */
const cubicWeight = ({length, height, width}) => {
    const conversionFactor = 250;
    
    const cubicWeight = (dimentionInMeters({length, height, width}) * conversionFactor);
    
    return parseFloat(cubicWeight.toFixed(2));
};

/**
 * Calculates the average of cubic weights 
 * @param {array} cubicWeightsArray - array of cubic weights 
 * @retutn {number} - average cubic weight
 */
const averageCubicWeight = cubicWeightsArray => (
    cubicWeightsArray.reduce(reducer, 0) / cubicWeightsArray.length
);
     
/**
 * Fetches the data from the given endpoint
 * @param {string} url - api end point 
 * @return data - the data from the response if there is no error, otherwise null
 */
const getData = async url  => {    
    const response = await (axios.get(url)).catch(err => console.log(err.response.data));
       
    return response ? response.data : null;
}

// private methods

/**
 * Helper method to convert the dimention from centimeters to meters
 * @param {Object} obj - size object
 * @param {number} obj.length - length
 * @param {number} obj.height - hieght
 * @param {number} obj.width - witdh
 * @retun {number} - dimention in meters
 */
const dimentionInMeters = ({length, height, width}) => (length /100 * height / 100 * width / 100);

/**
 * Callback used in reduce
 * @param {number} total - acamulator 
 * @param {number} value - value 
 */
const reducer = (total, value) => total + value;

module.exports = {
    cubicWeight,
    averageCubicWeight,
    getData
}