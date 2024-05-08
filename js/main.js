$(document).ready(function(){
    $('.checkfiled input').change(function () {
        if ($(this).is(':checked')) {
            $('.formsubmitbtn').prop('disabled', false);
        } else {
            $('.formsubmitbtn').prop('disabled', true);
        }
    });


    $('.popup__btn').on('click', function (e) {
        e.preventDefault;
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });

    $('.popup__close, .closepopup').on('click', function () {
        $('.popup__window').removeClass('active');
    });
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.popup__body').length) {
            $('.popup__window').removeClass('active');
        }
    });

    $('.popup__close, .closepopup, .popup__window').on('click', function (event) {
        if ($(event.target).hasClass('popup__window') || $(event.target).hasClass('popup__wrapper') || $(event.target).hasClass('popup__close') || $(event.target).hasClass('closepopup')) {
            $('.popup__window').removeClass('active');
        }
    });

    // upload
    $(".formupl").on("change", ".file-upload-field", function(){ 
        $(this).parent(".file-upload-wrapper").attr("data-text",         $(this).val().replace(/.*(\/|\\)/, '') );
    });
      




});