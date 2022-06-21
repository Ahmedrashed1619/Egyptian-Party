
// loading to init...........

$(document).ready(function(){
    $('#loading').fadeOut(2000, function(){
        $('body').css('overflow','visible')
    })
})


// when scroll event 

$(window).scroll(function(){

    if($(window).scrollTop() >= 200)
    {
        $('.icon').css({'backgroundColor' : '#212529' , 'transition' : '0.5s'})
    }
    else
    {
        $('.icon').css({'backgroundColor' : 'transparent', 'transition' : '0.5s'});
    }
})


// when click event on icons bar 

let navWidth = $('nav').outerWidth();

$('.icon').click(()=>{
    if($('nav').css('left') == '0px')
    {
        $('nav').css({'left' : -navWidth , 'transition' : '0.75s'});
    }
    else
    {
        $('nav').css({'left' : '0px' , 'transition' : '0.75s'});
    }
})

$('#x-icon').click(()=>{
    $('nav').css({'left' : -navWidth , 'transition' : '0.75s'});
})


// in the begining..

$(document).ready(()=>{
    let singers = Array.from($('.singer p'));
    for(let i = 0; i < singers.length; i++){
        $(singers[0]).slideDown();
        if(i > 0)
        {
            $(singers[i]).slideUp();
        }
    }
})

// when click event on any singer 

$('.singer h3').click(function(){
    $(this).siblings().slideToggle(500);
    $(this).parent().siblings().find('p').slideUp(500);
})

