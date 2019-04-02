$(function(){
    let $button = $('.burgerbutton');
    let $darkness = $('.darkness');
    let $menu = $('.burgermenu');
    let $li = $('.burgermenu li');
    let $label = $('[for=burgerbutton]');

    $button.on('click', toggler);
    $darkness.on('click', toggler);
    $li.on('click', loadItems);

    function toggler(){
        if(localStorage.getItem('enter')=='true'){
            $darkness.toggle();
            $menu.fadeToggle(300);
        }
    }
    function loadItems(){
        let $this = $(this);
        $label.text($this.text());
        toggler();
    }

});