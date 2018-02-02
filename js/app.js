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

    let btn = document.querySelector("input[type='button']");
    btn.addEventListener('click', sendHandler);

    window.localStorage.clear();
    story.countTotal();

}());
