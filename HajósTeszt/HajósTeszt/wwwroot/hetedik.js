
 var k�rd�sek = null;
    function Let�lt�s() {
        fetch('/questions.json')
            .then(response => response.json())
            .then(data => {
                let�lt�sBefejez�d�tt(data)
                k�rd�smegjelen�t�s(data)
            }
            );
        
    }
    window.onload = () => {
        console.log("bet�lt�d�tt")
        Let�lt�s();

     
    
}
   
    function let�lt�sBefejez�d�tt(d) {
            console.log("Sikeres let�lt�s")
            console.log(d)
            k�rd�sek = d;
    }

    function k�rd�smegjelen�t�s(adat) {
        document.getElementById("k�rd�s_sz�veg").innerText = d.questionText;
        document.getElementById("v�lasz1").innerText = d.answer1;
        document.getElementById("v�lasz2").innerText = d.answer2;
        document.getElementById("v�lasz3").innerText = d.answer3;
    }
