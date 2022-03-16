var StartButton = document.getElementById("StartButton");
var NextButton = document.getElementById("NextButton");
var BackButton = document.getElementById("BackButton");
var StopButton = document.getElementById("StopButton");
var _Qusetions = document.getElementById("_Qusetions");
var stu_result = document.getElementById("stu_result");
var stu_name = document.getElementById("stu_name");
var stu_score = document.getElementById("stu_score");
var warning;
var submit = document.getElementById("submit");
var stu_info = document.getElementById("stu_info");
var body = document.getElementById("body");
let mins = 1;
let seconds = 59;
let currentId;
let time;
let score =0;
setTimeout(function(){
    Questions=[];
    
    clearInterval(timer);
    document.getElementById("counter").innerHTML="";
   
    _Qusetions.innerHTML="";
    NextButton.classList.add("deactive_div");
    NextButton.classList.remove("active_div");
    
    BackButton.classList.add("deactive_div");
    BackButton.classList.remove("active_div");
    document.getElementById("name").innerHTML="";
    stu_result.classList.remove("deactive_div");
    stu_score.innerHTML=score +" of "+questions.length;
    stu_name.innerHTML= document.getElementById("name").innerHTML= document.getElementById("student").value ;
    
    if(score>(questions.length/2))
    stu_name.style.color="green";
    else
    stu_name.style.color="red";


    submit.classList.remove("active_div");
    submit.classList.add("deactive_div");
    
    StartButton.classList.remove("deactive_div");
},120000)

StartButton.addEventListener("click",function(){
    score=0;
     mins = 1;
     seconds = 59;
     timer = setInterval(function () {
        if(seconds!=0){
            if(seconds<10)
            document.getElementById("counter").innerHTML=`${mins}:0${seconds--}`;
            else
            document.getElementById("counter").innerHTML=`${mins}:${seconds--}`;
        }
            else{
                mins--;
                seconds=59;
            }
        
    }, 1000);


  document.getElementById("name").innerHTML= document.getElementById("student").value;


  StartButton.classList.add("deactive_div")
  stu_info.classList.add("deactive_div")
  load_Questions(questions);
  currentId=1;
  showSlide(currentId);

  NextButton.classList.add("active_div");
  stu_result.classList.add("deactive_div");
  NextButton.classList.remove("deactive_div");
  
});





let Questions=[];
function load_Questions(_questions){
    _questions.forEach(_question => {
        let que_Text=`
        <div id="${_question.numb}" class="deactive_div" style="text-align: left;">
            <div class="ques"> 
               <b> ${_question.question}</b>
            </div>
            <div class="warning" style="color:red">
                
            </div>
            <div>
                <div class="ans"><input type="radio" name="_question${_question.numb}" onclick="checkButton(${_question.numb})" value="0"> ${_question.options[0]}</div>
                <div class="ans"><input type="radio" name="_question${_question.numb}" onclick="checkButton(${_question.numb})" value="1"> ${_question.options[1]}</div>
                <div class="ans"><input type="radio" name="_question${_question.numb}" onclick="checkButton(${_question.numb})" value="2"> ${_question.options[2]}</div>
                <div class="ans"><input type="radio" name="_question${_question.numb}" onclick="checkButton(${_question.numb})" value="3"> ${_question.options[3]}</div>
            </div>
        </div>
        
        `;

        Questions.push(que_Text);
        
    }); 

    _Qusetions.innerHTML=Questions.join("");
    
}



function showSlide(Id){
    document.getElementById(Id).classList.add("active_div");
    document.getElementById(Id).classList.remove("deactive_div");

}
function hideSlide(Id){
    document.getElementById(Id).classList.remove("active_div");
    document.getElementById(Id).classList.add("deactive_div");

}



NextButton.addEventListener("click",function(){
    if(CheckBeforNext(currentId)){
        if(currentId!=Questions.length)
        {
            hideSlide(currentId);
            currentId++;
            showSlide(currentId);
            
            BackButton.classList.add("active_div");
            BackButton.classList.remove("deactive_div");
        }

        if(currentId==Questions.length){
        
            NextButton.classList.remove("active_div");
            NextButton.classList.add("deactive_div");
            submit.classList.add("active_div");
            submit.classList.remove("deactive_div");
        }
        
    document.getElementsByClassName("warning")[currentId-1].innerHTML="";
    }else
    document.getElementsByClassName("warning")[currentId-1].innerHTML="You must Select An Option";

});


BackButton.addEventListener("click",function(){


   if(currentId!=1)
   {
    hideSlide(currentId);
    currentId--;
    showSlide(currentId);
   }
   if(currentId==1){
       
    BackButton.classList.remove("active_div");
    BackButton.classList.add("deactive_div");
   }

   if(currentId!=Questions.length-1){
       
    submit.classList.remove("active_div");
    submit.classList.add("deactive_div");
    NextButton.classList.add("active_div");
    NextButton.classList.remove("deactive_div");
}
});



StopButton.addEventListener("click",function(){

    Questions=[];
    
    clearInterval(timer);
    document.getElementById("counter").innerHTML="";
   
    _Qusetions.innerHTML="";
    NextButton.classList.add("deactive_div");
    NextButton.classList.remove("active_div");
    
    BackButton.classList.add("deactive_div");
    BackButton.classList.remove("active_div");
    document.getElementById("name").innerHTML="";
    stu_result.classList.remove("deactive_div");
    stu_score.innerHTML=score +" of "+questions.length;
    stu_name.innerHTML= document.getElementById("name").innerHTML= document.getElementById("student").value ;
    
    if(score>(questions.length/2))
    stu_name.style.color="green";
    else
    stu_name.style.color="red";


    submit.classList.remove("active_div");
    submit.classList.add("deactive_div");
    
    StartButton.classList.remove("deactive_div");
});


function CheckBeforNext(_questionNumb){
    var check=document.getElementsByName("_question"+_questionNumb);
    for(i = 0 ; i<check.length;i++)
    {
        if(check[i].checked==true)
        {
            return true;
        }
    }
    return false;
}


function checkButton(_questionNumb){

    var check=document.getElementsByName("_question"+_questionNumb);
    var qus;
    var qus_answer;
    var qus_stu_answer;
    var result;
    var single_check;

    for(i = 0 ; i<check.length;i++)
    {
        if(check[i].checked==true)
        {
            qus=questions[currentId-1];
            qus_answer=questions[currentId-1].answer;
            qus_stu_answer=questions[currentId-1].options[check[i].value];
    
            console.log(qus)
            console.log(qus_answer)
            console.log(qus_stu_answer)
            
             
            if(questions[currentId-1].studdent_answer==""){
                result = qus_answer.localeCompare(qus_stu_answer);
                if(result==0)
                score++;
            }else{
                result = qus_answer.localeCompare(qus_stu_answer);
                if(result==0)
                score++;
                else
                {
                    if(score!=0)score--;
                }
            }
            questions[currentId-1].studdent_answer=qus_stu_answer;
            console.log(score);





            break;
        }
    }
}

submit.addEventListener("click",function(){

    Questions=[];
    
    clearInterval(timer);
    document.getElementById("counter").innerHTML="";
   
    _Qusetions.innerHTML="";
    NextButton.classList.add("deactive_div");
    NextButton.classList.remove("active_div");
    
    BackButton.classList.add("deactive_div");
    BackButton.classList.remove("active_div");
    document.getElementById("name").innerHTML="";
    stu_result.classList.remove("deactive_div");
    stu_score.innerHTML=score +" of "+questions.length;
    stu_name.innerHTML= document.getElementById("name").innerHTML= document.getElementById("student").value ;
    
    if(score>(questions.length/2))
    stu_name.style.color="green";
    else
    stu_name.style.color="red";


    submit.classList.remove("active_div");
    submit.classList.add("deactive_div");
    
    StartButton.classList.remove("deactive_div");

   });

