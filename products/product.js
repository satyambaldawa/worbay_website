var idList = ['fireExtinguisher', 'smokeDetector','fireHydrant','firePumpRoom','gasSuppression','gasLeak']
for (let idName of idList) {
    console.log(idName);
    let a = $("#" + idName)
    let b = $("." + idName)
    a.on("click", function () {
        $(b).slideToggle("slow");
        if (a.text() === 'Read More') {
            a.text('Read Less');
            a.css('background-color', '#029aba');
        } else {
            a.text('Read More');
            a.css('background-color', '#216bac');
        }
    });
}

