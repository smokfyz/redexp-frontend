const story = {

    addItem: function(data) {
        let storyTable = document.getElementById('story');

        let item = document.createElement('div');
        item.setAttribute('class', 'story_row');

        let type = document.createElement('div');
        let amount = document.createElement('div');
        let date = document.createElement('div');
        let reason = document.createElement('div');
        type.setAttribute('class', 'story_cell');
        amount.setAttribute('class', 'story_cell');
        date.setAttribute('class', 'story_cell');
        reason.setAttribute('class', 'story_cell');
        type.innerHTML = data.type ===  'income' ? 'Доход' : 'Расход';
        amount.innerHTML = +data.amount;
        date.innerHTML = new Date(data.date).toLocaleDateString();
        reason.innerHTML = data.reason;

        item.appendChild(type);
        item.appendChild(amount);
        item.appendChild(date);
        item.appendChild(reason);
        storyTable.appendChild(item);
    },

    countTotal: function(data) {
        let localStorage = window.localStorage;

        let total = {
            rub: 0,
            usd: 0,
            eur: 0
        };

        if(localStorage.getItem('total')) {
            total = JSON.parse(localStorage.getItem('total'));
        }

        if(data) {
            switch(data.currency) {
                case 'rub':
                    data.type === 'income' ? total.rub += +data.amount : total.rub -= +data.amount;
                    break;
                case 'usd':
                    data.type === 'income' ? total.usd += +data.amount : total.usd -= +data.amount;
                    break;
                case 'eur':
                    data.type === 'income' ? total.eur += +data.amount : total.eur -= +data.amount;
                    break;
            }
        }

        localStorage.setItem('total', JSON.stringify(total));

        document.getElementById('total_rub').innerHTML = total.rub;
        document.getElementById('total_usd').innerHTML = total.usd;
        document.getElementById('total_eur').innerHTML = total.eur;
    }

}
