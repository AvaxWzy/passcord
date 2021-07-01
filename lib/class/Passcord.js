const { characters } = require("../rest/characters.json");

class Passcord {
    constructor() {};
    /**
     * Length of the generated code
     * @param {number} length 
     */
    generate(length) {

        if (!length || typeof (length) !== "number" || length === 0) {

            length = 12;
        };

        let code = "";

        for (var i = 0; i < parseInt(length); i++) {
            code = code + characters[Math.floor(Math.random() * characters.length)];
        };

        return code;
    };
};

module.exports = Passcord;