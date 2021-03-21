window.onload = () => {
    console.log("betöltõdött")

    let where = document.getElementById("here")
    where.innerHTML = ""

    for (let row = 0; row < 10; row++) {
        let r = document.createElement("div");
        r.classList.add("row");
        where.appendChild(r);
        for (let col = 0; col < row; col++) {
            var faktorialis = (n) => {
                if (n === 0 || n === 1) {
                    return 1;
                } else {
                    return n * faktorialis(n - 1);
                }
            };
            c.innerText =
                faktorialis(row) / (faktorialis(col) * faktorialis(row - col));
            c.classList.add("elem");
            r.appendChild(c);

        }
    }
}
