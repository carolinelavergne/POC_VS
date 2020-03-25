const cucumber = require('cypress-cucumber-preprocessor').default; // CUCUMBER
 
module.exports = (on, config) => {
    on('file:preprocessor', cucumber()); // CUCUMBER
};
