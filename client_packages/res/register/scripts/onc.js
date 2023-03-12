function loginfuno(){
    const login =  document.getElementById('log-login').value;
    const pass = document.getElementById('log-pass').value;
    resetError();

    if(!login || login.lenght < 6){
        return showError('Введите логин')
    }
    if(!pass || pass.lenght < 8){
        return showError('Введите пароль')
    };
    mp.trigger('onLogin', JSON.stringify({ login, pass}))
};
function regfuno(){
    // const mail =  document.getElementById('reg-mail').value;
    const login =  document.getElementById('reg-login').value;
    const pass = document.getElementById('reg-pass').value;
    const spass =  document.getElementById('reg-spass').value;
    const names =  document.getElementById('reg-name').value;
    resetError();

    // if(!mail || mail.lenght < 6){
    //     return showError('Введите правильную почту')
    // }

    if(!login || login.lenght < 6){
        return showError('Введите логин')
    }
    if(!pass || pass.lenght < 8){
        return showError('Введите пароль')
    };
    if(!spass || spass.lenght < 8){
        return showError('Введите повтор пароля')
    };
    if(pass != spass){
        return showError('Пароли не совпадают')
    };
    if(!names || login.lenght < 1){
        return showError('Введите имя')
    }
    mp.trigger('onRegister', JSON.stringify({login, pass, spass, names}))
};

function resetError(){
    const errorm = document.getElementById('error')
    errorm.innerText = '';
    errorm.style.display= 'none';
};

function showError(message){
    const errorm = document.getElementById('error');
    const errorp = document.getElementById('error-p');
    // errorm.innerText = message;
    errorp.innerHTML = message;
    errorm.style.display= 'block';
    console.log(message)
}