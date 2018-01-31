const db_api = {

    add: function(data) {
        const db = window.localStorage;
        let redexp_data = JSON.parse(db.getItem('redexp_data'));
        if(!redexp_data) redexp_data = [];
        redexp_data.push(data);
        db.setItem('redexp_data', JSON.stringify(redexp_data));
        return 1;
    }

}
