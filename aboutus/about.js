var bodyWidth = $('body').width();

if (bodyWidth >= 1000) {
    $(".img_1").attr("src","images/fire_est_1.jpg");
} else if (bodyWidth >= 500) {
    $(".img_1").attr("src","images/fire_est_2.jpg");
} else {
    incno = itemsSplit[1];
    itemWidth = sampwidth / incno;
}