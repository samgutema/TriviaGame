// var startGame = function () {

//     $(".crystals").empty()

//     var images = [
//         "assets/images/crystal1.jpg",
//         "assets/images/crystal2.jpg",
//         "assets/images/crystal3.jpg",
//         "assets/images/crystal4.jpg"
//     ]

    var questionTime = 10;
    var gaugeWidth = 150;
    var count = 0; 
    var gaugeProgressUnit = gaugeWidth/questionTime

    fucntion counterRender (){
        if (count <= questionTime) {
            counter.innerHTML = count; 
            timeGauge.style.width = gaugeProgressUnit * count + "px";
            count++;
        }
        else {
            count = 0; 
            answerIsWrong (); 
            if(runningQuestionIndex < lastQuestionIndex){
                runningQuestionIndex++;
                questionRender();
            }
            else{clearInterval(TIMER); 
            scoreRender();}
        }
    }