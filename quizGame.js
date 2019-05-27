
(function()
{
    function Question(question, answers, correct)    //     creating a function constructor
{
    this.question = question;
    this.answer = answers;                                           // [STEP 1]
    this.correct = correct;
}

Question.prototype.displayRandomQuestion = function()    //   function to loop through all the questions and answers 
{
    console.log(this.question);                               //    [STEP 3]

    for(var i = 0; i < this.answers.length; i++)
    {
        console.log(i + " : " + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans)                     //  [STEP 4]
{
    if(ans === this.correct)
    {
        console.log('correct answer !!');
    }
    else
    {
        console.log('Wrong answer !!');
    }
}


//   questions to be logged on the console arg(1), possible outcomes arg(2), correct ans arg(3)

var ques1 = new Question('Is Mclaren Speedtail better than a Bugatti Chiron ??', ['yes', 'no'], 0);     //  [STEP 2]
var ques2 = new Question('Which is the best Hypercar Brand ?', ['Porsche', 'Ferrari', 'Mclaren'], 2);
var ques3 = new Question('What are the best Engine Types ?', ['Naturally Aspirated', 'Hybrid', 'Turbo-charged', 'Supercharged'], 1);

var questions = [ques1, ques2, ques3];  

function nextQuestion()
{
    
    var getRandom = Math.floor(Math.random() * questions.length);  //  generating random question on the console
 
    questions[getRandom].displayRandomQuestion();

    var answer = prompt('Please select the correct answer !!'); 
        
    if(answer !== 'exit') 
    {
        questions[getRandom].checkAnswer(parseInt(answer));

        nextQuestion();
    }

}

nextQuestion();

})();

// console.log('*****************************************************************************************************');


// function Question(questions, answers, correct)
// {
//   this.questions = questions;
//   this.answers = answers;
//   this.correct = correct;
// }

//       //    Writing a function using prototype to display on the console

// Question.prototype.displayQuestion = function()
// {
//      console.log(this.questions);

//      for(var i = 0; i < this.answers.length; i++)
//      {
//             console.log(i + ' ' + this.answers[i]);
//      }
// }

// Question.prototype.displayAnswer = function(ans)
// {
//   if(ans === this.correct)
//   {
//     console.log('Correct Answer');      
//   }
//   else 
//   {
//     console.log('Wrong Answer!!');
//   }
// }

// var ques1 = new Question('Best time to workout?', ['morning', 'evening'], 1);
// var ques2 = new Question('Best workout split ?', ['Fullbody', 'Upper- lower Split', 'Push-Pull'], 0);
// var ques3 = new Question('Most Important Muscle ?', ['Back', 'Chest', 'Arms', 'Legs', 'Shoulders'], 3);

// var questn = [ques1, ques2, ques3];

// var randQues = Math.floor(Math.random() * questn.length);

// questn[randQues].displayQuestion();

// var answer = parseInt(prompt('Select a proper answer!!'));

// questn[randQues].displayAnswer(answer);





                            
//                                     // using ES6 class statement

// class Question {
//     // using a destructuring statement that takes out the relevant keys from the passed object
//     // we could also pass 'options' as a single key and do somethi ng like:
//     // this.question = option.question
//     constructor({question, possibleAnswers = [], correctAnswer}) {
//       this.question = question;
//       this.possibleAnswers = possibleAnswers;                                          
//       this.correctAnswer = correctAnswer;
//     }
  
//     // the new class syntax enables creating instance methods like this.
//     // this is the same as Question.prototype.displayOptions = function...
//     displayOptions() { //  function to loop through all the questions and answers 
//       console.log(this.question);  
  
  
//       // '() =>' is an arrow functions which is both a shorthand for function()
//       // - but also maintains the context (this) of the parent, similarly to
//       // function foo() {}
//       // foo.bind(this);      
//       this.possibleAnswers.forEach((possibleAnswer, index) => {
//         // Using ES6s template literal to avoid breaking the string and 
//         // putting it back together with '+'
//         console.log(`${index}: ${possibleAnswer}`);
//       });
//     }
  
//     checkAnswer(answer) {
//       if(answer === this.correctAnswer) {
//         console.log('correct output!!');
//       } else {
//         console.log('Wrong answer!!');
//       }
//     }  
//   }
  
//   // By creating a function, you can pass it multiple question batches, i.e
//   // carQuesitons, geographyQuestions etc. 
//   // - keeping it scoped and not worrying about the display logic
  
//   const displayRandomQuestion = (questions, message = 'Please select the correct answer !!') => {
//     const randomIndex = Math.floor(Math.random() * questions.length);
//     const selectedQuestion = questions[randomIndex];
//     selectedQuestion.displayOptions();
//     const answer = parseInt(prompt(message));
//     selectedQuestion.checkAnswer(answer);
//   }
  
//   // Using 'const' since the value of the variable isn't going to change
//   // passing named variables to serve as titles for the different parameters
//   const questions = [
//     new Question({
//       question: 'Which is the best Hypercar Brand ?', 
//       possibleAnswers: ['Porsche', 'Ferrari', 'Mclaren'], 
//       correctAnswer: 2
//     }),
//     new Question({
//       question: 'Which is the best Hypercar Brand ?', 
//       possibleAnswers: ['Porsche', 'Ferrari', 'Mclaren'], 
//       correctAnswer: 2
//     }),
//     new Question({
//       question: 'What are the best Engine Types ?', 
//       possibleAnswers: ['Naturally Aspirated', 'Hybrid', 'Turbo-charged', 'Supercharged'], 
//       correctAnswer: 1
//     })
//   ];
  
//   displayRandomQuestion(questions);









