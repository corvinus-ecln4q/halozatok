
 var kérdések = null;
    function Letöltés() {
        fetch('/questions.json')
            .then(response => response.json())
            .then(data => {
                letöltésBefejeződött(data)
                kérdésmegjelenítés(data)
            }
            );
        
    }
    window.onload = () => {
        console.log("betöltődött")
        Letöltés();

     
    
}
   
    function letöltésBefejeződött(d) {
            console.log("Sikeres letöltés")
            console.log(d)
            kérdések = d;
    }

    function kérdésmegjelenítés(adat) {
        document.getElementById("kérdés_szöveg").innerText = d.questionText;
        document.getElementById("válasz1").innerText = d.answer1;
        document.getElementById("válasz2").innerText = d.answer2;
        document.getElementById("válasz3").innerText = d.answer3;
    }
