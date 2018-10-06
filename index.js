

$(document).ready(function () {

    let navbar = $(".navbar");

    navbar.click(function (event) {
        $(event.target).animate({
            // "letter-spacing": "80px",
        }, 500, "linear",
            function () {
            $(event.target).animate({
                top: "-"+ parseInt($(event.target).attr("section")) * 25+"%",
                height: "100%"
            }, 1000, "linear");
        });
    });
});