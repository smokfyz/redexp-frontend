const story = {

    addItem: function(data) {
        let storyTable = document.getElementById('story');

        let item = document.createElement('div');
        item.setAttribute('class', 'story_row');

        let type = document.createElement('div');
        let amount = document.createElement('div');
        let date = document.createElement('div');
        type.setAttribute('class', 'story_cell');
        amount.setAttribute('class', 'story_cell');
        date.setAttribute('class', 'story_cell');
        type.innerHTML = data.type;
        amount.innerHTML = data.amount;
        date.innerHTML = data.date.toLocaleDateString();

        item.appendChild(type);
        item.appendChild(amount);
        item.appendChild(date);
        storyTable.appendChild(item);
    }

}
