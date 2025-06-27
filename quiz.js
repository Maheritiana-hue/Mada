function calculerScore(){
  let score = 0;
  for(let i = 1; i <= 30; i++){
    const question = document.querySelector('input[name="q' + i +'"]:checked');
    if(question){
      score += parseInt(question.value);
    }
  }
  document.getElementById("resultat").textContent = "SCORE OBTENU  =  " + score + "/ 30";
}

function recommencerQuiz(){
  for(let i = 1; i <= 30; i++){
    const options = document.getElementsByName("q" + i);
    for(let j = 0; j < options.length; j++){
      options[j].checked = false;
    }
  }
  document.getElementById("resultat").textContent ="";
}