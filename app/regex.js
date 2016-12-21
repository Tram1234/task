exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
    containsNumber : function(str) {
        var matched = str.match(/\d+/g);

        if( matched !== null ){
            return true;
        }
        return false;

    }
};
