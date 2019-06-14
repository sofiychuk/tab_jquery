window.onload = function () {

    $('.card-tab').on('click', trigger);


    function trigger(event) {
        $('.card-tab').removeClass('active');
        $(this).addClass('active');
        var tabId = $(this).attr('data-tab-id');
        $('.content-tab').hide();
        $('#' + tabId).show()
        console.log($('#' + tabId).show())
    }

}