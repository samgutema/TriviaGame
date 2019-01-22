// // var startGame = function () {

// //     $(".crystals").empty()

// //     var images = [
// //         "assets/images/crystal1.jpg",
// //         "assets/images/crystal2.jpg",
// //         "assets/images/crystal3.jpg",
// //         "assets/images/crystal4.jpg"
// //     ]

//     // var questionTime = 10;
//     // var gaugeWidth = 150;
//     // var count = 0; 
//     // var gaugeProgressUnit = gaugeWidth/questionTime

//     // fucntion counterRender (){
//     //     if (count <= questionTime) {
//     //         counter.innerHTML = count; 
//     //         timeGauge.style.width = gaugeProgressUnit * count + "px";
//     //         count++;
//     //     }
//     //     else {
//     //         count = 0; 
//     //         answerIsWrong (); 
//     //         if(runningQuestionIndex < lastQuestionIndex){
//     //             runningQuestionIndex++;
//     //             questionRender();
//     //         }
//     //         else{clearInterval(TIMER); 
//     //         scoreRender();}
//     //     }
//     // }


//     var start = document.getElementById("start")
//     var quiz = docoument.getElementById("quiz")
//     var qImg = document.getElementById("quistionImage")
//     var question = document.getElementById("question")
//     var counter = document.getElementById("counter")
//     var timeGauge = document.getElementById("timeGauge")
//     var choiceA = document.getElementById("A")
//     var choiceB = document.getElementById("B")
//     var choiceC = document.getElementById("C")
//     var progress = document.getElementById("progress")
//     var scoreContainer = document.getElementById("scoreContainer")

//     var questions = [

//         {
//             question: "Which nail grows fastest?",
//             choiceA : "index", 
//             choiceB : "middle", 
//             choiceC : "pinky", 
//             correct : "B"
//         }

//         {
//             question : "What temprature does water boil at?", 
//             choiceA : "90C", 
//             choiceB : "50C", 
//             choiceC : " 100C",
//             correct : "C"
//         }


//     ]

//     if (question[0] && choiceB) {
//         counter++
//     }
//     else if (question[0] && choiceA || choiceC ){
//         counter--
//     }
    
    // function gameStart() {

    // }

function onSubmit(){

    var score = 0;
    var numberOfQuestions = 6;
    var answers = ["Middle", "100C", "1914", "Einstein", "Nairobi", "White"]

    var q1 = document.forms["quiz"]["q1"].value;
    var q2 = document.forms["quiz"]["q2"].value;
    var q3 = document.forms["quiz"]["q3"].value;
    var q4 = document.forms["quiz"]["q4"].value;
    var q5 = document.forms["quiz"]["q5"].value;
    var q6 = document.forms["quiz"]["q6"].value;


    // for (var  i = 1; i <= numberOfQuestions ; i++){
    //     if (eval ("q" + i) == "") {
    //         alert ( "missed " + i)
    //     }
    // }

        for (var i = 1; i <= numberOfQuestions; i++ ){
            if (eval("q" + i ) == answers [i - 1]){
                score++;
            }
        }

        var results = document.getElementById("results")
        results.innerHTML= "<h2> You Scored " + score + " points out of " + numberOfQuestions + "</h2>"
    
        // alert (" You scored" + score + " out of " + numberOfQuestions )
    
        // return false;


      
    }

     
  function countDown (secs, elem) {
    var element = document.getElementById(elem);

    element.innerHTML = "Time Remaining "+secs+" seconds"; 

    if (secs < 1) {
        clearTimeout(timer); 
        element.innerHTML = "<h2> Time out - GAME OVER! </h2>";
        element.innerHTML += onSubmit();
    }
    secs--; 
    var timer = setTimeout('countDown('+secs+',"'+elem+'")', 1000);
    


} 

countDown(10, "remTime")





//   function gameStart() {
//       {alert ("Time Out")}
//       onclick=setTimeout(onSubmit, 5000)
//   }




