$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What year did tony hawk land 900?',
	possibleAnswers : ['A. 2001',
				 'B. 2004',
				 'C. 2003',
				 'D. 1999'],
	flags : [false, false, false, true],
	answer : 'D. 1999'
};

var q2 = {
	question: 'How old was Bill Gates when he made his first million?',
	possibleAnswers: ['A. 25',
				 'B. 31',
				 'C. 43',
				 'D. 50'],
	flags : [false, true, false, false],
	answer : 'B. 31'
};

var q3 = {
	question : 'Who won the World Cup in 2010?',
	possibleAnswers : ['A. France',
				 'B. Spain',
				 'C. USA',
				 'D. England'],
	flags : [false, true, false, false],
	answer : 'B. Spain'
};

var q4 = {
	question : 'Who is the number one chef in the world?',
	possibleAnswers : ['A. Gordon Ramsey',
				 'B. Thomas Keller',
				 'C. Jamie Oliver',
				 'D. Massimo Bottura'],
	flags : [true, false, false, false],
	answer : 'A. Gordon Ramsey'
};

var q5 = {
	question : 'Who was the First president',
	possibleAnswers : ['A. Donald Trump',
				 'B. George Washington',
				 'C. Barack Obama',
				 'D. Ben Franklin'],
	flags : [false, true, false, false],
	answer : 'B. George Washington'
};

var q6 = {
	question : 'What is the most peaceful country in the world to live in ?',
	possibleAnswers : ['A. Japan',
				 'B. New Zealand',
				 'C. USA',
				 'D. Iceland'],
	flags : [false, false, false, true],
	answer : 'D. Iceland'
};

var q7 = {
	question : 'How many Ballon dor trophies does Messi have?',
	possibleAnswers : ['A. 2',
				 'B. 4',
				 'C. 6',
				 'D. 1'],
	flags : [false, false, true, false],
	answer : 'C. 6'
};

var q8 = {
	question : 'Who is the highest paid athlete?',
	possibleAnswers : ['A. Lebron James',
				 'B. Lionel Messi',
				 'C. Serena Willams',
				 'D. Cristiano Ronaldo'],
	flags : [false, true, false, false],
	answer : 'B. Lionel Messi'
};

var q9 = {
	question : 'What year did Looney Tunes come out?',
	possibleAnswers : ['A. 1857',
				 'B. 2006',
				 'C. 1994',
				 'D. 1930'],
	flags : [false, false, false, true],
	answer : 'D. 1930'
};

var q10 = {
	question : 'What was the first fast-food restaurant in the world?',
	possibleAnswers : ['A. Mcdonalds',
				  'B. White Castle',
				  'C. KFC',
				  'D. Popeyes'],
	flags : [false, true, false, false],
	answer : 'B. White Castle'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});