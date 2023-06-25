

var panel = $('#quiz-area');
var countStartNumber = 30;


///////////////////////////////////////////////////////////////////////////////

//CLICK EVENTS

///////////////////////////////////////////////////////////////////////////////

$(document).on('click', '#start-over', function(e) {
  game.reset();
});

$(document).on('click', '.answer-button', function(e) {
  game.clicked(e);
});

$(document).on('click', '#start', function(e) {
  $('#subwrapper').prepend('<h4>Time Remaining: <span id="counter-number">30</span> Seconds</h4>');
  game.loadQuestion();
});

///////////////////////////////////////////////////////////////////////////////


//Question set


///////////////////////////////////////////////////////////////////////////////

var questions = [{
  question: "Which of these sports did HK never venture into as a kid?",
  img:"assets/images/background.jpg",
  answers: ["TaeKwonDo", "Dance", "Soccer", "Tennis", "Track"],
  correctAnswer: "Soccer"
},{

  question: "Andrew Garfield played Spiderman in, what Greek word does Andrew originate from",
  answers: ["", "", "", ""],
  correctAnswer: "",
},{
  question: "AB refuses to ever give up his Android, In Marvel The Vision is an android created by:",
  answers: ["Reed Richards", "Tony Stark", "Ultron", "Doctor Doon"],
  correctAnswer: "Tony Stark"
 }, {
  question: "What is the theme song of the last show binged by us?",
  answers: ["Renaissance by", "", "", ""],
  correctAnswer: "Mr.Belding"
 },{
  question: "Which of the medical dramas did HK not ever binge",
  answers: ["", "", "", ""],
  correctAnswer: ""
 },{
  question: "What is this image stating in sign language:",
  answers: ["You're annoying", "I'm hungry", "I'm waiting", "You're cute"],
  correctAnswer: "You're cute"
}, {
  question: "Mindy Kaling played Kelly Kapoor in the hit comedy The Office, What was the show she co-created centered around the life of a first generation Indian American?",
  answers: ["H", "Always Be My Maybe", "Sluts in College", "Never Have I Ever"],
  correctAnswer: "Never Have I Ever"
},{
  question: "Which is one of HK's favorite colors?",
  answers: ["Purple", "Green", "Black", "Orange", "Pink"],
  correctAnswer: "Purple"
}, {
  question: "Only a warm July day, the capital of which state was HK born in?",
  answers: ["New Jersey, US", "Illinois,US", "California,US", "Connecticut,US", "Uttar Pradesh, IN"],
  correctAnswer: "Connecticut,US"
}, {
  question: "What is the name of Tony Stark's building that the team uses as head-quarters?",
  answers: ["Camp Hammond", "Iron Tower", "Stark Tower", "S.H.I.E.L.D"],
  correctAnswer: "Stark Tower"
},{
  question: "Which of the locations did were some great kisses had?",
  answers: ["McGills Pub", "Casa de AB", "That Bar in the UWS", "That time before CLE", "All of the Above"],
  correctAnswer: "Stark Tower"
},{
  question: "newark native",
  answers: ["The Flash", "Arrow", "Green Lantern", "Batman"],
  correctAnswer: "Green Lantern"
}, {
  question: "ohio native",
  answers: ["The Flash", "Arrow", "Green Lantern", "Batman"],
  correctAnswer: "Green Lantern"
}, {
  question: "musesum art science",
  answers: ["The Flash", "Arrow", "Green Lantern", "Batman"],
  correctAnswer: "Green Lantern"
}, {
  question: "who is the coolest most awesome",
  answers: ["The Flash", "Arrow", "Green Lantern", "Batman"],
  correctAnswer: "Green Lantern"
},{
  question: "kal penn",
  answers: ["The Flash", "Arrow", "Green Lantern", "Batman"],
  correctAnswer: "Green Lantern"
}, 
{
  question: "piano",
  answers: ["The Flash", "Arrow", "Green Lantern", "Batman"],
  correctAnswer: "Green Lantern"
},
{
  question: "superbowl",
  answers: ["The Flash", "Arrow", "Green Lantern", "Batman"],
  correctAnswer: "Green Lantern"
}, {
  question: "sweet cussings",
  answers: ["The Flash", "Arrow", "Green Lantern", "Batman"],
  correctAnswer: "Green Lantern"
},{
  question: "love languages",
  answers: ["The Flash", "Arrow", "Green Lantern", "Batman"],
  correctAnswer: "Green Lantern"
},

finite games 

];



var game = {
  questions:questions,
  currentQuestion:0,
  counter:countStartNumber,
  correct:0,
  incorrect:0,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.timeUp();
    }
  },
  loadQuestion: function(){
    timer = setInterval(game.countdown, 1000);
    panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
    for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
      panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
    }
  },
  nextQuestion: function(){
    game.counter = countStartNumber;
    $('#counter-number').html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },
  timeUp: function (){
    clearInterval(timer);
    $('#counter-number').html(game.counter);

    panel.html('<h2>Out of Time!</h2>');
    panel.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
    panel.append('<img src="' + questions[this.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  results: function() {
    clearInterval(timer);

    panel.html('<h2>All done, heres how you did!</h2>');
    panel.html('<h2>You get first place! You can collect your reward when you show this screenshot and see HK next;)</h2>');
    $('#counter-number').html(game.counter);
    panel.append('<h3>Correct Answers: ' + game.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
    panel.append('<br><button id="start-over">Start Over?</button>');

  },
  clicked: function(e) {
    clearInterval(timer);

    if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function() {
    game.incorrect++;
    clearInterval(timer);
    panel.html('<h2>Nope!</h2>');
    panel.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
    ;

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  answeredCorrectly: function(){
    clearInterval(timer);
    game.correct++;
    panel.html('<h2>Correct!</h2>');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  reset: function(){
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};
