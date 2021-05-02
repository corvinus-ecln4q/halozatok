
function k�rd�sBet�lt�s(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hib�s let�lt�s: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. k�rd�s let�ltve a hot list ${destination}. hely�re`)
                if (displayedQuestion == undefined && destination == 0) { //!!!!!!!!!!!!!
                    displayedQuestion = 0;
                    k�rd�sMegjelen�t�s();
                }
            }
        );
}
function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    //Els� k�rd�sek let�lt�se
    for (var i = 0; i < questionsInHotList; i++) {
        k�rd�sBet�lt�s(nextQuestion, i);
        nextQuestion++;
    }
}    
    



function k�rd�sMegjelen�t�s() {
    let k�rd�s = hotList[displayedQuestion].question;
    console.log(k�rd�s);
    document.getElementById("k�rd�s_sz�veg").innerText = k�rd�s.questionText
    document.getElementById("v�lasz1").innerText = k�rd�s.answer1
    document.getElementById("v�lasz2").innerText = k�rd�s.answer2
    document.getElementById("v�lasz3").innerText = k�rd�s.answer3
    
}
function el�re() {
    clearTimeout(timeoutHandler)
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    k�rd�sMegjelen�t�s()
}

function vissza() {
    questionId--;
    k�rd�sBet�lt�s(questionId)
}
window.onload = function (e) {
    console.log("Oldal bet�ltve...");
    document.getElementById("el�re_gomb").onclick = el�re;
    document.getElementById("vissza_gomb").onclick = vissza;
    k�rd�sBet�lt�s(questionId)
}
function v�laszt�s(n) {
    if (n != j�V�lasz) {
        document.getElementById(`v�lasz${n}`).classList.add("rossz");
        document.getElementById(`v�lasz${j�V�lasz}`).classList.add("j�");
    }
    else {
        document.getElementById(`v�lasz${j�V�lasz}`).classList.add("j�");
    }
}
var timeoutHandler;
timeoutHandler = setTimeout(el�re, 3000);
