exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
    createModule : function(str1, str2) {
      return (function () {

            var name = str2;
            var greeting = str1;

            var sayIt = function () {
                return this.greeting + ", " + this.name
            };

            return {
                sayIt:sayIt,
                name:name,
                greeting:greeting
            }

        }());


    }

};
