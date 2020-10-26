// валидация поля email формы subscribe
function validate(form_subscribe,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_subscribe].elements[email].value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
 }
// валидация поля email полной формы
function validate(full_form,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[full_form].elements[email].value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
 }
 // плавный скрол
 $(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
// маска для поля телефон
jQuery(function($){
    $("#tel").mask("+38(999) 999-99-99");
    });
