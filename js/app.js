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
        let reg_form = document.createElement('div');
        cover.id = 'cover-div';
        reg_form.id = 'login-form';
        reg_form.style.display = 'block';
        reg_form.onclick = (e) => e.stopPropagation();
        cover.onclick = () => document.body.removeChild(cover);
        cover.appendChild(reg_form);
        document.body.appendChild(cover);
    }

    function signinHandler() {
        let cover = document.createElement('div');
        let reg_form = document.createElement('div');
        cover.id = 'cover-div';
        reg_form.id = 'signin-form';
        reg_form.style.display = 'block';
        reg_form.onclick = (e) => e.stopPropagation();
        cover.onclick = () => document.body.removeChild(cover);
        cover.appendChild(reg_form);
        document.body.appendChild(cover);
    }

    document.querySelector("input[type='button']").addEventListener('click', sendHandler);
    document.getElementById("login").addEventListener('click', loginHandler);
    document.getElementById("signin").addEventListener('click', signinHandler);

    window.localStorage.clear();
    db_api.get();

}());
