$(function(){
    let animating = true;
    $('body').css({"height" : "100vh", "overflow": "hidden"});
    setInterval(animateOwl, 10000);
    if(localStorage.getItem('enter')=='true'){
        $('.darkness').hide().css({"z-index" : 2});
        $('.password').remove();
        animateIn();
    }
    let $password = $('.darkness input');
    $password.on('keyup', function(){
        let $this = $(this);
        if($this.val()=="i solemnly swear that i am up to no good"){
            $('.darkness').hide().css({"z-index" : 2});
            $('.password').remove();
            animateIn();
            localStorage.setItem('enter', 'true');
        }
    });

    $('.map').on('click', function(){
        let $this = $(this);
        animating = false;
        $this.animate({"left" : "50vw"}, 300, "swing", slideAway).animate({"left" : "50vw"}, 1200, "swing").fadeOut(500);
        $('body').css({"height" : "unset", "overflow": "auto"});
    })

    function animateIn(){
        if(animating)
        $('.map').animate({"left" : "10px"}, 1200, "swing", animateOut);
    }
    function animateOut(){
        if(animating)
        $('.map').animate({"left" : "-10px"}, 1200, "swing", animateIn);
    }
    function animateOwl(){
        $('.flyingleft').animate({"right" : "30vw"}, 1000).delay(3000).animate({"right" : "100vw"}, 2000, "linear", resetOwl);
    }
    function resetOwl(){
        $('.flyingleft').css({"right" : "-50px", "top" : Math.random()*80 + "vh"});
    }
    function slideAway(){
        $('.background1').animate({"left" : "-100vw"}, 1200, "swing");
    }
})