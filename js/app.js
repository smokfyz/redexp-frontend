(function() {

    function sendHandler(event) {
        event.preventDefault();
        console.log('good');
        let income_inp = document.querySelector("input[name='income']");
        let outcome_inp = document.querySelector("input[name='outcome']");

        if(income_inp.value) {
            let data_income = {
                'type': 'income',
                'amount': income_inp.value,
                'currency': 'rub',
                'date': new Date(),
                'reason': 'Test'
            }

            db_api.add(data_income);
        }

        if(outcome_inp.value) {
            let data_outcome = {
                'type': 'outcome',
                'amount': outcome_inp.value,
                'currency': 'rub',
                'date': new Date(),
                'reason': 'Test'
            }

            db_api.add(data_outcome);
        }

        document.getElementById('info').innerHTML = window.localStorage.getItem('redexp_data');
    }

    let btn = document.querySelector("input[type='submit']");
    btn.addEventListener('click', sendHandler);

    window.localStorage.removeItem('redexp_data');

}());
