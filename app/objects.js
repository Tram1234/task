exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
    alterContext : function(fn, obj) {
        name = obj.name;
        greeting = obj.greeting;

     return  fn(name, greeting)
    },

    alterObjects : function(constructor, greeting) {

        constructor.prototype.greeting = greeting;

    },

    iterate : function(obj) {

        return Object.keys(obj).map(function (key) {
            return  key + ': ' + obj[key]
        });

    }
};
