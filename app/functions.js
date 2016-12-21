exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {

    argsAsArray : function(fn, arr) {
        return fn(arr[0], arr[1], arr[2])
    },

    speak : function(fn, obj) {
         greeting = obj.greeting;
         name = obj.name;
         return fn(greeting, name)
    },

    functionFunction : function(str) {
       return function (strTwo) {
           return str  + ", " + strTwo;
       }
    }
};
