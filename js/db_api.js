const db_api = {

    add: function(data) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/transactions', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        let body = '';
        for(let key in data) {
            body += '&' + key + '=' + encodeURIComponent(data[key]);
        }
        body = body.substring(1, body.length);

        xhr.onload = function() {
            console.log(JSON.parse(this.responseText));
        }

        xhr.onerror = function() {
            alert( 'Ошибка ' + this.status );
        }

        xhr.send(body);
    },

    get: function() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/transactions', true);

        xhr.onload = function() {
            document.getElementById('floatingCirclesG').style.display = 'none';
            for(let item of JSON.parse(this.responseText)) {
                story.addItem(item);
            }
        }

        xhr.onerror = function() {
            alert( 'Ошибка ' + this.status );
        }

        xhr.send();
    },

    login: function(data) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/login', true);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        let body = '';
        for(let key in data) {
            body += '&' + key + '=' + encodeURIComponent(data[key]);
        }
        body = body.substring(1, body.length);

        xhr.onload = function() {
            console.log(JSON.parse(this.responseText));
        }

        xhr.onerror = function() {
            alert( 'Ошибка ' + this.status );
        }

        xhr.send(body);
    }
}
