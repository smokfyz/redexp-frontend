(function() {

    function sendHandler(event) {
        event.preventDefault();

        let type = document.querySelector("input[name='type']:checked");
        let amount = document.querySelector("input[name='amount']").value;
        let currencies = document.querySelector("select[name='currency']");
        let currency = currencies.options[currencies.selectedIndex].value;
        let reason = document.querySelector("textarea[name='reason']").value;

        let data = {
            type: type.value,
            amount: amount,
            currency: currency,
            date: new Date(),
            reason: reason
        }

        db_api.add(data);
        story.addItem(data);
        story.countTotal(data);

    }

    function loginHandler() {
        let cover = document.createElement('div');
        let log_div = document.createElement('div');
        let log_form = `<form method='POST'>
            <p>Login</p>
            <input type='text' name='login' required></input>
            <p>Password</p>
            <input type='password' name='password' required></input>
            <input type='submit' value='Login'></input>
        </form>`
        cover.id = 'cover-div';
        log_div.id = 'login-div';
        log_div.innerHTML = log_form;
        log_div.onclick = (e) => e.stopPropagation();
        cover.onclick = () => document.body.removeChild(cover);
        cover.appendChild(log_div);
        document.body.appendChild(cover);
    }

    function signinHandler() {
        let cover = document.createElement('div');
        let reg_div = document.createElement('div');
        let signin_form = `<form method='POST'>
            <p>Login</p>
            <input type='text' name='login' required></input>
            <p>Password</p>
            <input type='password' name='password' required></input>
            <p>Confirm password</p>
            <input type='password' name='conf_password' required></input>
            <input type='submit' value='Sign in'></input>
        </form>`
        cover.id = 'cover-div';
        reg_div.id = 'signin-div';
        reg_div.innerHTML = signin_form;
        reg_div.onclick = (e) => e.stopPropagation();
        cover.onclick = () => document.body.removeChild(cover);
        cover.appendChild(reg_div);
        document.body.appendChild(cover);
    }

    document.querySelector("input[type='button']").addEventListener('click', sendHandler);
    document.getElementById("login").addEventListener('click', loginHandler);
    document.getElementById("signin").addEventListener('click', signinHandler);

    window.localStorage.clear();
    db_api.get();

}());
