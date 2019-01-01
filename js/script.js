$('.page-scrolll').on('click', function(e){

//  ambil isi href
var tujuan = $(this).attr('href');
//  tangkap elemen ybs
var elemenTujuan = $(tujuan);

// pindahkan scroll
$('body').animate({
    scrollTop : elemenTujuan.offset().top -50
}, 1250, 'swing'); 

e.preventDefault();

});

// parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.moments').offset().top - 250){
       $('.moments .img-thumbnail').addClass('muncul');
    }


});