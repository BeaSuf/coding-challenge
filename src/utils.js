const axios = require('axios');

const cubicWeight = ({length, height, width}) => {
    const conversionFactor = 250;
    
    const cubicWeight = (dimentionInMeters({length, height, width}) * conversionFactor);
    
    return parseFloat(cubicWeight.toFixed(2));
};

const averageCubicWeight = cubicWeightsArray => (
    cubicWeightsArray.reduce(reducer, 0) / cubicWeightsArray.length
);
     
const getData = async url  => {    
    const response = await (axios.get(url)).catch(err => console.log(err.response.data));
       
    return response ? response.data : null;
}

// private
const dimentionInMeters = ({length, height, width}) => (length /100 * height / 100 * width / 100);

const reducer = (total, value) => total + value;

module.exports = {
    cubicWeight,
    averageCubicWeight,
    getData
}