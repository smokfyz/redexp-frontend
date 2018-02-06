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
            <input type='text' name='username' required></input>
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

        document.querySelector("input[value='Login']").onclick = (e) => {
            e.preventDefault();
            data = {
                username: document.querySelector("input[name='username']").value,
                password: document.querySelector("input[name='password']").value
            }
            db_api.login(data);
        }
    }

    function signinHandler() {
        let cover = document.createElement('div');
        let signin_div = document.createElement('div');
        let signin_form = `<form method='POST'>
            <p>Login</p>
            <input type='text' name='username' required></input>
            <p>Password</p>
            <input type='password' name='password' required></input>
            <p>Confirm password</p>
            <input type='password' name='password_conf' required></input>
            <input type='submit' value='Sign in'></input>
        </form>`
        cover.id = 'cover-div';
        signin_div.id = 'signin-div';
        signin_div.innerHTML = signin_form;
        signin_div.onclick = (e) => e.stopPropagation();
        cover.onclick = () => document.body.removeChild(cover);
        cover.appendChild(signin_div);
        document.body.appendChild(cover);
    }

    document.querySelector("input[type='button']").addEventListener('click', sendHandler);
    document.getElementById("login").addEventListener('click', loginHandler);
    document.getElementById("signin").addEventListener('click', signinHandler);

    window.localStorage.clear();
    db_api.get();

}());
