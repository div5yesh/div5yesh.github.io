document.body.onload = function () {
    // requestAnimationFrame(animate);

    let t1 = document.getElementsByClassName("t1")[0],
        t2 = document.getElementsByClassName("t2")[0],
        centerpeice = document.getElementsByClassName("centerpeice")[0];

    centerpeice.addEventListener("mouseover", function (event) {
        centerpeice.classList.add("slide");
    });

    centerpeice.addEventListener("mouseout", function (event) {
        centerpeice.classList.remove("slide");
    });

    // function animate() {
    //     if (!start) start = time;
    //     current = time - start;

    //     if (current > 16) {

    //     }

    //     requestAnimationFrame(animate);
    // }
};