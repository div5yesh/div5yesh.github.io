

$(document).ready(function () {

    let navbar = $(".navbar");
    let close = $(".close");

    let desg = $(".desg");

    $(desg).animate(function () {

    });

    $(navbar).click(function (event) {
        if (event.target.classList.contains("navbar")) {
            $(event.target).animate({
                // "letter-spacing": "30px",
            }, 500, "linear",
                function () {
                    $(event.target).animate({
                        top: "-" + parseInt($(event.target).attr("section")) * 25 + "%",
                        height: "100%"
                    }, 1000, "linear", function () {

                        });


                        $(".close",event.target).animate({
                            left: "20px"
                        }, 500);
                });
        }
    });

    $(close).click(function (event) {

        $(event.target).parent().animate({
            height: "25%",
            top: "",
            // "letter-spcing": "15px"
        }, 500);

        $(close).animate({
            left: "-50px"
        }, 500)
    });

});