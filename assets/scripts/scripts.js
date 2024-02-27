// Navigation
$('.js-tab-trigger').click(function () {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');

    $('.js-tab-content.active').removeClass('active');
    content.addClass('active');
});

//Tabs

$(document).ready(function () {
    let loadCount = 3;
    let switcher = 0;
    // Показываем первые элементы в каждом списке при загрузке страницы
    $(".content-trigger").each(function () {
        $(this).find(".info-block:lt(" + loadCount + ")").show();
    });
    // Загрузка элементов при клике на кнопку
    $(".show-hide").click(function () {
        let $list = $(this).siblings(".content-trigger");
        let $items = $list.find(".info-block").slice(3, 6);
        if (switcher === 0) {
            $items.show(); // Показываем выбранные элементы
            $(this).text('Свернуть');
            switcher = 1;
        } else {
            $items.hide(); // Скрываем выбранные элементы
            $(this).text('Показать полностью');
            switcher = 0;
        }
    });
});

// Animation

if ($(window).width() < 800) {
    $("#block").fadeIn(0);
} else {
    $("#block").fadeIn(4000);
}




