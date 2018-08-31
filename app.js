window.onload = function () {

    var funkyFunctions = {
        salsa: function () {
            var danceMoves = [3, 2, 1, 5, 6];
            var numSteps = 0;
            for (i = 0; i < danceMoves.length; i++) {
                numSteps += danceMoves[i];
            }
            return numSteps;
        },
        chickenDance: function () {
            var numClucks = 0;
            for (i = 0; i < 5; i++) {
                numClucks += 5;
            }
            return numClucks;
        },
        shuffle: function () {
            var type = ["melbourne", "electronic", "hard style"];
            var myShuffle = 
            {
                type: type[0],
                isPopular: true,
                numClaps: 300
            }
            if(myShuffle.isPopular === true){
                return (myShuffle.numClaps);
            }
        }
    };



    console.log(funkyFunctions.salsa(), funkyFunctions.chickenDance(), funkyFunctions.shuffle());



}