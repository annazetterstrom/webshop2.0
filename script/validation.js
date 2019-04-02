//validation of form
$(function(){
    let $form = $('form');
    let $input = $('input');
    $form.on('submit', validate);
    function validate(e){
        e.preventDefault()
        $('.error').remove();
        $('form div').css({"border" : "none"});
        if(checkName()&&checkMail()&&checkAdress()&&checkCity()){
            $('.deliveryoptions').fadeIn();
        }
        
    }
    function checkName(){
        $($input[0]).off('keyup');
        $($input[0]).siblings('.error').remove();
        if($input[0].value.length < 2){
            $($input[0]).parent().append('<p class="error">The name must be at least 2 letters long</p>');
            $($input[0]).parent().css({"border" : "red 1px solid"});
            $($input[0]).on('keyup', checkName);
            return false;
        } else {
            $($input[0]).parent().css({"border" : "none"});
            return true;
        }
    }
    function checkMail(){
        $($input[1]).off('keyup');
        $($input[1]).siblings('.error').remove();
        let mail = $input[1].value;
        if(!mail.includes("@") || !mail.includes(".") || mail.length < 3){
            $($input[1]).parent().append('<p class="error">Please enter a correct email</p>');
            $($input[1]).parent().css({"border" : "red 1px solid"});
            $($input[1]).on('keyup', checkMail);
            return false;
        } else {
            let local = mail.substring(0, mail.indexOf('@'));
            if(!mailError(local)){
                let domain = mail.substring(mail.indexOf("@") + 1, mail.indexOf("."));
                if(!mailError(domain)){
                    let com = mail.substring(mail.indexOf(".") + 1);
                    if(!mailError(com)){
                        $($input[1]).parent().css({"border" : "none"});
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    function checkAdress(){
        $($input[3]).off('keyup');
        $($input[3]).siblings('.error').remove();
        if(!$input[2].checked){
            if($input[3].value.length < 3){
                $($input[3]).parent().append('<p class="error">I want to know where you live because reasons :D</p>');
                $($input[3]).parent().css({"border" : "red 1px solid"});
                $($input[3]).on('keyup', checkAdress);
                return false;
            } else {
                $($input[3]).parent().css({"border" : "none"});
                return true
            }
        } else {
            return true;
        }
    }
    function checkCity(){
        $($input[4]).off('keyup');
        $($input[4]).siblings('.error').remove();
        if(!$input[2].checked){
            if($input[4].value.length < 3){
                $($input[4]).parent().append('<p class="error">Please enter a city to nuke</p>');
                $($input[4]).parent().css({"border" : "red 1px solid"});
                $($input[4]).on('keyup', checkCity);
                return false;
            } else {
                $($input[4]).parent().css({"border" : "none"});
                return true;
            }
        } else {
            return true;
        }
    }
    function mailError(str){
        if(str.includes("<") || str.includes(">") || str.includes("(") || str.includes(")") || str.includes("[") || str.includes("]") || str.includes(";") || str.includes(":") || str.includes(",") || str.length < 2){
            $($input[1]).parent().append('<p class="error">Please enter a correct email</p>');
            $($input[1]).parent().css({"border" : "red 1px solid"});
            $($input[1]).on('keyup', checkMail);
            return true;
        }
        return false;
    }
});