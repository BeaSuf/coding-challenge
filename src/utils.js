const cubicWeight = ({length, height, width}) => {
    const conversionFactor = 250;
    
    const cubicWeight = (dimentionInMeters({length, height, width}) * conversionFactor);
    
    return parseFloat(cubicWeight.toFixed(2));
};
    
// private
const dimentionInMeters = ({length, height, width}) => (length /100 * height / 100 * width / 100);

module.exports = {
    cubicWeight
}