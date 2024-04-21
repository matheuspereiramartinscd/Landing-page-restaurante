$('.link').click(function(){
    var id = $(this).attr("rel");

    $('#'+id).slideToggle('fasts');
});
