var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
    questions:[
        {
            q:'Downing Street is the home of:',
            options: ['Boris Johnson', 'Harry Potter', 'David Beckham', 'Prince William'],
            answer:1
        },
        {
            q:'Witch color represents Distric Line?',
            options: ['Blue', 'Green', 'Purple', 'Red'],
            answer:2
        },      
        {
            q:'What was the most popular girls name in the UK in 2019?',
            options: ['Bruna', 'Greyde', 'Olivia', 'Maria'],
            answer:3
        },
        {
            q:'Whitch male actor was playing in Titanic?',
            options: ['Leonardo Da Vinci', 'Jason Statham', 'Brad Pitt', 'Leonardo DiCaprio'],
            answer:4
        }
               
    ],
    index:0,
    load:function(){
        if(this.index<=this.questions.length-1){
            quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
            opt1.innerHTML=this.questions[this.index].options[0];
            opt2.innerHTML=this.questions[this.index].options[1];
            opt3.innerHTML=this.questions[this.index].options[2];
            opt4.innerHTML=this.questions[this.index].options[3];
        }
        else {
            quizbox.innerHTML="Thanks for completing the quiz!";
            ul.style.display="none";
            nextButton.style.display="none";
        }
    },
    next: function(){
        this.index++;
        this.load();
    },
    check: function(ele){
        var id=ele.id.split('');
        if(id[id.length-1]==this.questions[this.index].answer){
            this.score++;
            ele.className="correct";
            this.scoreCard();
        }
        else{
            ele.className="wrong";
        }
    },
    preventClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="none";
        }
    },
    allowClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''
        }
    },
    score:0,
    scoreCard:function(){
        scoreCard.innerHTML=this.questions.length + "/" + this.score;
    }
}

window.load=app.load();

function button(ele){
app.check(ele);
app.preventClick();
}

function next(){
app.next();
app.allowClick();
}