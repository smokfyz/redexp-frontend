(function() {

    function sendHandler(event) {
        event.preventDefault();

        let income_inp = document.querySelector("input[name='income']");
        let outcome_inp = document.querySelector("input[name='outcome']");


        if(income_inp.value.match(/^\d+$|^\d+\.\d+$/)) {
            let data_income = {
                'type': 'income',
                'amount': income_inp.value,
                'currency': 'rub',
                'date': new Date(),
                'reason': 'Test'
            }

            db_api.add(data_income);
            story.addItem(data_income);
        }

        if(outcome_inp.value.match(/^\d+$|^\d+\.\d+$/)) {
            let data_outcome = {
                'type': 'outcome',
                'amount': outcome_inp.value,
                'currency': 'rub',
                'date': new Date(),
                'reason': 'Test'
            }

            db_api.add(data_outcome);
            story.addItem(data_outcome);
        }
    }

    let btn = document.querySelector("input[type='submit']");
    btn.addEventListener('click', sendHandler);

    window.localStorage.removeItem('redexp_data');

}());
