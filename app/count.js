exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
    count : function (start, end) {

        var i = start;

          var myInterval = setInterval(function(){ myCounter() }, 100);

            function myCounter() {

                console.log(i);
                i++;
                if(i === end){
                    clearInterval(myInterval);
                }
            }

           function cancel() {
                clearInterval(myInterval);
            }


            return{
                cancel:cancel
            }

    },

};
