
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
        $('.icon').css({'backgroundColor' : '#212529' , 'transition' : '0.75s'});
        $('.icon').html('<span class="fs-2"><i class="fa-solid fa-bars"></i></span>');
    }
    else
    {
        $('.icon').css({'backgroundColor' : 'transparent', 'transition' : '0.75s'});
        $('.icon').html('<span class="fs-2"><i class="fa-solid fa-bars"></i> OPEN</span>');
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
    $('nav').css('left' , -navWidth);
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


// calc countdown timer 

let countdown = new Date('Dec 31 2023 23:59:59').getTime();

let row = setInterval(() => {

    let timeNow = new Date().getTime();
    let defTime = countdown - timeNow;
    let days = Math.floor(defTime / (1000 * 60 * 60 *24));
    let hours = Math.floor(defTime % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
    let mins = Math.floor(defTime % (1000 * 60 * 60) / (1000 * 60));
    let secs = Math.floor(defTime % (1000 * 60) / (1000));

    if(days < 10)
    {
        days = ('0' + days);
    }
    if(mins < 10)
    {
        mins = ('0' + mins);
    }
    if(hours < 10)
    {
        hours = ('0' + hours);
    }
    if(secs < 10)
    {
        secs = ('0' + secs);
    }

    $('#days').html(`${days}`);
    $('#hours').html(`${hours}`);
    $('#mins').html(`${mins}`);
    $('#secs').html(`${secs}`);

}, 1000);



// when user press on send message button...

$('#sendMessage').click(function(){
    sendValidMessage();
})

// validation message...

function sendValidMessage(){
    if(isInputEmpty() != true && validUserName() == true && validUserEmail() == true && validTextMessage() == true)
    {
        $('#alertSend').html('The message was sent Successfully');
        $('#alertSend').css({'display':'block' , 'color':'green'});
        resetForm();
    }
    else if (isInputEmpty())
    {
        $('#alertSend').html('all fields are important.. You should fill them correctly');
        $('#alertSend').css({'display':'block' , 'color':'red'});
        resetForm();
    }
    else if(validUserName() == false || validUserEmail() == false || validTextMessage() == false)
    {
        $('#alertSend').html('There are Invalid fields.. You should fill them correctly');
        $('#alertSend').css({'display':'block' , 'color':'red'});
        resetForm();
    }
}



// ...check if inputs are empty...

let inputs = Array.from($('.form-control'));

function isInputEmpty(){
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value == '')
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

// when user want to send a message...

if($('#name') != null){
    $('#name').on('input' , function(){
        validUserName();
    })
}

if($('#email') != null){
    $('#email').on('input' , function(){
        validUserEmail();
    })
}

if($('#message') != null){
    $('#message').on('input' , function(){
        validTextMessage();
    })
}

// Validation for form...

function validUserName(){
    let regexName = /^[A-Z][a-z- ]{2,15}$/;

    if(regexName.test($('#name').val()))
    {
        $('#name').addClass('is-valid');
        $('#name').removeClass('is-invalid');
        $('#alertName').css('display' , 'none');
        return true;
    }
    else
    {
        $('#name').addClass('is-invalid');
        $('#name').removeClass('is-valid');
        $('#alertName').css('display' , 'block');
        return false;
    }
}

function validUserEmail(){
    let regexEmail = /^[a-zA-Z0-9_]{3,15}(@[a-zA-Z0-9]{3,15}\.com)$/;

    if(regexEmail.test($('#email').val()))
    {
        $('#email').addClass('is-valid');
        $('#email').removeClass('is-invalid');
        $('#alertEmail').css('display' , 'none');
        return true;
    }
    else
    {
        $('#email').addClass('is-invalid');
        $('#email').removeClass('is-valid');
        $('#alertEmail').css('display' , 'block');
        return false;
    }
}

function validTextMessage(){
    let regexMsg = /^[a-zA-Z0-9- ]{1,100}$/;

    if(regexMsg.test($('#message').val()))
    {
        $('#message').addClass('is-valid');
        $('#message').removeClass('is-invalid');
        $('#alertMessage').css('display' , 'none');
        return true;
    }
    else
    {
        $('#message').addClass('is-invalid');
        $('#message').removeClass('is-valid');
        $('#alertMessage').css('display' , 'block');
        return false;
    }
}



// when user want to reset message form..

$('#reset').click(function(){
    resetForm();
})

//... reset Messages form...

function resetForm(){
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid');
        inputs[i].classList.remove('is-invalid');
        $('#alertName').css('display' , 'none');
        $('#alertEmail').css('display' , 'none');
        $('#alertMessage').css('display' , 'none');
    }
    $('#counter').html(100);
}


// counter character

let counter = $('#message').attr('maxlength');
$('#counter').html(counter);

$('#message').on('input' , function (){
    let changeCount = $('#message').val().length;
    let endCounter = 100 - changeCount;
    $('#counter').html(endCounter);
    
    if(endCounter == 0)
    {
        $('#counter').css({'fontWeight' : 'bold' , 'color' : 'red'});
    }
    else
    {
        $('#counter').css({'fontWeight' : 'normal' , 'color' : 'black'});
    }
});