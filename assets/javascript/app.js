

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
  $('#subwrapper').prepend('<h3>Time Remaining: <span id="counter-number">30</span> Seconds</h3>');
  game.loadQuestion();
});

///////////////////////////////////////////////////////////////////////////////


//Question set


///////////////////////////////////////////////////////////////////////////////

var questions = [{
  question: "Which of these sports did HK never venture into as a kid?",
  answers: ["TaeKwonDo", "Dance", "Soccer", "Tennis", "Track"],
  correctAnswer: "Soccer", 
  image:"assets/images/1.jpg"
},{
  question: "As Andrew has Greek origins of the word for man, Harika is derived from Sanskrit word for charm, among other origins. In which language does the latter directly translate to the mean 'wonderful'?",
  answers: ["Hindi", "Italian", "Turkish", "Arabic",],
  correctAnswer: "Turkish",
  image:"assets/images/2.jpg"
 },{
  question: "AB proudly refuses to ever give up his Android. In Marvel comics, The Vision is an android created by:",
  answers: ["Reed Richards", "Tony Stark", "Ultron", "Doctor Doon"],
  correctAnswer: "Ultron",
  image:"assets/images/3.jpg"
 }, {
  question: "Who composed the theme song of the last show binged by us?",
  answers: ["Scrantones", "Cristobal Tapia De Vee", "Ramin Djawadi", "Psapp"],
  correctAnswer: "Cristobal Tapia De Vee",
  image:"assets/images/4.jpg"
 },{
  question: "The first medical drama to air on television was called 'City Hospital'. Which of these medical dramas did HK never see?",
  answers: ["The Good Doctor", "Grey's Anatomy", "Chicago Med", "House", "Scrubs"],
  correctAnswer: "House",
  image:"assets/images/5.jpg"
 },{
  question: "Mindy Kaling played Kelly Kapoor in the hit comedy 'The Office'. What was the show she co-created centered around the life of a first generation Indian American?",
  answers: ["Convenience", "Always Be My Maybe", "Sex Lives of College Girls", "Never Have I Ever"],
  correctAnswer: "Never Have I Ever", 
  image:"assets/images/7.jpg"
},{
  question: "In UXD, color theory is an important component in site development. Which is one of HK's favorite colors?",
  answers: ["Purple", "Green", "Black", "Orange", "Pink"],
  correctAnswer: "Purple",
  image:"assets/images/8.jpg"
},{
  question: "Sign language was first introduced in 1817 in America. What is this image stating in sign language:",
  answers: ["You're annoying", "I'm hungry", "I'm waiting", "You're cute"],
  correctAnswer: "You're cute",
  image:"assets/images/yourecute.png"
},{
  question: "On a warm July day, the capital of which state was HK born in?",
  answers: ["New Jersey, US", "Illinois, US", "California, US", "Connecticut, US", "Uttar Pradesh, IN"],
  correctAnswer: "Connecticut, US",
  image:"assets/images/9.jpg"
},{
  question: "Philematology is the science of kissing, which historically is thought to have originated from India. Which of the locations were some great kisses had?",
  answers: ["McGills Pub", "That Bar in the UWS", "Casa de AB", "That time before CLE", "All of the Above"],
  correctAnswer: "All of the Above", 
  image:"assets/images/10.jpg"
},{
  question: "My Chemical Romance is a band from Newark, NJ. Who else from that area owned the building HK once stayed at for a bit?",
  answers: ["Shaquille O'Neal", "Jon Bon Jovi", "Queen Latifah", "Michael B. Jordan"],
  correctAnswer: "Shaquille O'Neal",
  image:"assets/images/11.jpg"
}, {
  question: "'The Oh in Ohio' stars a few Jersey natives. Which Marvel superhero did one of them eventually star as?",
  answers: ["Captain America", "Arrow", "Ant-Man", "Hawkeye"],
  correctAnswer: "Ant-Man",
  image:"assets/images/12.jpg"
},{
  question: "On a personal favorite date night of HK, the MET was visited after hours. Which museum is HK's all time favorite?",
  answers: ["MoMA", "Museum of Ice Cream", "California Academy of Sciences", "Smithsonian Air and Space Museum"],
  correctAnswer: "California Academy of Sciences",
  image:"assets/images/13.jpg"
}, {
  question: "When will HK get to whisper (or slightly yell) sweet <s>nothings</s> cussings in AB's ear, as promised? (may be met with a reward)",
  answers: ["Not Tomorrow", "Maybe The Next day", "Or the day after that", "Whenever HK wants:)"],
  correctAnswer: "Whenever HK wants:)",
  image:"assets/images/16.jpg"
},{
  question: "A lead chracter in one of HK's favorite comedy movies also authored which of the following books?",
  answers: ["<i>Why Not Me?<i>", "<i>Are You Serious?<i>", "<i>I Was Kidding<i>","<i>Why Are You Like This<i>"],
  correctAnswer: "<i>Are You Serious?<i>",
  image:"assets/images/15.jpg"
},{
  question: "Who is the coolest, most awesome, fun, caring adventurous human AB will have the pleasure of getting to know? ;)",
  answers: ["HK", "Harika", "Hari", "Any and all of the Above"],
  correctAnswer: "Any and all of the Above",
  image:"assets/images/14.gif"
},{
  question: "Author and talk show host, Dr. Gary Chapman discussed the concepts of the 5 love languages. How many languages can HK fluently speak? ",
  answers: ["one", "two", "three", "four"],
  correctAnswer: "two",
  image:"assets/images/17.jpg",
}, {
  question: "David Blaine once held his breath underwater for 17 minutes. Which Jersey shore will you never find HK swimming in?",
  answers: ["Belmar", "Atlantic City", "Wildwood", "Cape May"],
  correctAnswer: "Atlantic City",
  image:"assets/images/18.jpg",
},{
  question: "BONUS: HK has explored a handful of cities. Which of these cities that she visited has museum dedicated to AB's favorite painter",
  answers: ["Paris", "New York", "Sydney", "Amsterdam", "Montreal"],
  correctAnswer: "Amsterdam",
  image:"assets/images/19.jpg",
},];


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

    panel.html('<h2>All done, heres how you did!</h2><br><h2>You get first place! Ask HK how to collect your reward (may possibly include some new secrets)</h2>');
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
    panel.append('<img src="' + questions[game.currentQuestion].image + '" />');

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
    panel.append('<img src="' + questions[game.currentQuestion].image + '" />');

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
