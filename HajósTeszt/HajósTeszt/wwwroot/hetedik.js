{
    fetch('/questions/4')
        .then(response => response.json())
        .then(data => console.log(data)
    );
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => k�rd�sMegjelen�t�s(data)
        );

    function k�rd�sMegjelen�t�s(k�rd�s) {
        console.log(k�rd�s);
        document.getElementById("k�rd�s_sz�veg").innerText = k�rd�s.questionText
        document.getElementById("v�lasz1").innerText = k�rd�s.answer1
        document.getElementById("v�lasz2").innerText = k�rd�s.answer2
        document.getElementById("v�lasz3").innerText = k�rd�s.answer3
        document.getElementById("k�p").src = "https://szoft1.comeback.hu/hajo/" + k�rd�s.image;
    }
    function k�rd�sBet�lt�s(id) {
        fetch(`/questions/${id}`)
            .then(response => {
                if (!response.ok) {
                    console.error(`Hib�s v�lasz: ${response.status}`)
                }
                else {
                    return response.json()
                }
            })
            .then(data => k�rd�sMegjelen�t�s(data));
    }
    function v�laszfeldolgoz�s(v�lasz) {
        if (!v�lasz.ok) {
            console.error(`Hib�s v�lasz: ${response.status}`)
        }
        else {
            return v�lasz.json()
        }
    }
}
