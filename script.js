function checkForm() {
    var check;

    // Check Username
    var tempUsername = /^[A-Z0-9]/i;
    var loginField = document.forms[0].elements.Username;
    if (loginField.value == ''){
        if (!document.getElementById('errorVal')){
            loginField.insertAdjacentHTML('afterEnd', '<span  class="col-lg-12" id="errorVal">Correct value A-Z 0-9 </span>');
            document.getElementById('errorVal').style.color = 'red';
        }
        check = false;
    } else if (loginField.value.match(tempUsername)){
        if(document.getElementById('errorVal')){
            document.getElementById('errorVal').remove();
        }
        check = true;
    } else {
        if (!document.getElementById('errorVal')){
            loginField.insertAdjacentHTML('afterEnd', '<span  class="col-lg-12" id="errorVal">Correct value A-Z 0-9 </span>');
            document.getElementById('errorVal').style.color = 'red';
        }
        check = false;
    }

    // Check Name
    if (check == true){
        // English, russian, Ukrainian
        var tempName = /^[A-ZА-ЯА-Я][A-ZА-ЯА-Яa-zа-яа-я]+(^-[A-ZА-ЯА-Я][A-ZА-ЯА-Яa-zа-яа-я])?/;
        var nameField = document.forms[0].elements.FirstName;
        if (nameField.value == ''){
            if (!document.getElementById('errValName')){
                nameField.insertAdjacentHTML('afterEnd', '<span  class="col-lg-12" id="errValName">Correct value A-Z</span>');
                document.getElementById('errValName').style.color = 'red';
            }
            check = false;
        } else if (nameField.value.match(tempName)){
            if (document.getElementById('errValName')){
                document.getElementById('errValName').remove();
            }
            check = true;
        } else {
            if (!document.getElementById('errValName')){
                familyField.insertAdjacentHTML('afterEnd', '<span  class="col-lg-12" id="errValName">Correct value A-Z</span>');
                document.getElementById('errValName').style.color = 'red';
            }
            check = false;
        }
    }

    // Check Family
    if (check == true){
        var familyField = document.forms[0].elements.LastName;
        if (familyField.value == ''){
            if(!document.getElementById('errValFamily')){
                familyField.insertAdjacentHTML('afterEnd', '<span  class="col-lg-12" id="errValFamily">Correct value A-Z</span>');
                document.getElementById('errValFamily').style.color = 'red';
            }
            check = false;
        } else if(familyField.value.match(tempName)){
            if(document.getElementById('errValFamily')){
                document.getElementById('errValFamily').remove();
            }
            check = true;
        } else {
            if (!document.getElementById('errValFamily')){
                familyField.insertAdjacentHTML('afterEnd', '<span  class="col-lg-12" id="errValFamily">Correct value A-Z</span>');
                document.getElementById('errValFamily').style.color = 'red';
            }
            check = false;
        }
    }

    // Check valid email adress
    if (check == true){
        var tempMail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        var mailField = document.forms[0].elements.email;
        if (mailField.value.match(tempMail)){
            if (document.getElementById('errMail')){
                document.getElementById('errMail').remove();
            }
            check = true;
        } else {
            if (!document.getElementById('errMail')){
                mailField.insertAdjacentHTML('afterEnd', '<span  class="col-lg-12" id="errMail">Incorrect mail</span>');
                document.getElementById('errMail').style.color = 'red';
            }
            check = false;
        }
    }

    // Check password strenght
    if (check == true){
        // https://mattweb.ru/moj-blog/raznoe/item/142-30-primerov-regulyarnykh-vyrazhenij
        var tempPassoword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/;
        var passFied = document.forms[0].elements.password;
        if(passFied.value.match(tempPassoword)){
            if (document.getElementById('seakPass')){
                document.getElementById('seakPass').remove();
            }
            check = true;
        } else {
            if (!document.getElementById('seakPass')){
                passFied.insertAdjacentHTML('afterEnd', '<span  class="col-lg-12" id="seakPass">Password is not strong</span>');
                document.getElementById('seakPass').style.color = 'red';
            }
            check = false;
        }
    }

    // Check Re-enter password
    if (check == true){
        var rePassField = document.forms[0].elements.password2;
        if (rePassField.value == passFied.value){
            if (document.getElementById('notMatch')){
                document.getElementById('notMatch').remove();
            }
            check = true;
        } else {
            if (!document.getElementById('notMatch')){
                rePassField.insertAdjacentHTML('afterEnd', '<span  class="col-lg-12" id="notMatch">Passwords do not match</span>');
                document.getElementById('notMatch').style.color = 'red';
            }
            check = false;
        }
    }
    

    return check;
}